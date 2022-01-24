import React from "react";
import Head from "next/head";

import $ from "jquery";

import styles from "./styles.module.css";
import SimpleTable from "../../../components/SimpleTable";

import { useRouter } from "next/router";

import { validCode } from "../../../../src/utils/validators";
import { Modal, Button } from "react-bootstrap";

export default function Binary2Decimal() {
    const [typeCode, setTypeCode] = React.useState("Binary");
    const [convertedCodes, setConvertedCodes] = React.useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [zIndex, setZIndex] = React.useState(999999);
    const [message, setMessage] = React.useState("");
    const [selectAll, setSelectAll] = React.useState(false);

    const router = useRouter();

    const changeTypeCode = () => typeCode.toLowerCase() === "binary" ? setTypeCode("Decimal") : setTypeCode("Binary");
    const closeModal = () => {
        setShowModal(false);
        setSelectAll(true);
        setTimeout(() => {
            setZIndex(9999999);
            $("#number-sequence").focus();

        }, 300);

    };
    const handleSubmit = (ev) => {
        ev.preventDefault();

        let binaryCode = $("#number-sequence").val();

        if (validCode(typeCode.toLowerCase(), binaryCode) || (binaryCode.length === 0)) {
            setShowModal(true);
            setZIndex(0);

            if (binaryCode.length === 0)
                setMessage("The input is empty!!");
            else
                setMessage("Check your code input, maybe it contains letters, whitespace or invalid numbers!");

            return;

        }

        let results = [];
        let aux = 0;

        if (typeCode.toLowerCase() === "decimal") {
            setConvertedCodes([...convertedCodes, {
                "type": typeCode,
                "value": binaryCode,
                "converted": parseInt(binaryCode).toString(2)
            }])

        } else {
            const positionNumberOneInCode = [];

            for (let i = 0; i < binaryCode.length; i++)
                if (binaryCode[i] === "1")
                    positionNumberOneInCode.push(i);

            positionNumberOneInCode.forEach(
                indexNumberOne => results.push(Math.pow(2, parseInt(indexNumberOne)))
            );

            results.forEach(result => aux += result);

            setConvertedCodes([...convertedCodes, {"type": typeCode, "value": binaryCode, "converted": aux}]);

        }

    }

    return (
      <>
        <Head>
            <title>Binary to Decimal</title>
        </Head>
        <main className={styles.container}>
            <h1>Converter your sequence</h1>
            <div className={styles.containerForm}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.containerInput} id={"code"}>
                        <label style={{ zIndex }} className={styles.label} htmlFor={"number-sequence"} id={"code-label"}>{ typeCode } code</label>
                        <input
                            name={"numberSequence"}
                            id={"number-sequence"}
                            type={"text"}
                            placeholder={`Enter with ${typeCode.toLowerCase()} code here...`}
                            onFocus={(ev) => {
                                if (selectAll)
                                    ev.target.select();

                                setSelectAll(false);

                            }}
                            autoComplete={"off"}
                        />
                    </div>
                    <div className={styles.containerInput} id={"switch"}>
                        <div className={"form-check form-switch"}>
                            <input onClick={changeTypeCode} className={"form-check-input"} name={"codetype"} id={"code-type"} type={"checkbox"} />
                            <label className={"form-check-label"}>Change type code</label>
                        </div>
                    </div>
                    <div className={styles.containerButton}>
                        <button
                            className={`${styles.button} bg-danger`}
                            type={"button"}
                            onClick={() => router.back()}
                        >Back Home</button>
                        <input className={styles.button} type={"submit"} value={"Convert"} />
                    </div>
                </form>
            </div>
            <SimpleTable header={["Code Type", "Code", "Result Converted"]} data={convertedCodes} />
        </main>
          <Modal
              show={showModal}
              onHide={closeModal}
              backdrop={"static"}
              keyboard={false}
          >
              <Modal.Header closeButton>
                  <Modal.Title>Warning</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  { message }
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={closeModal}>OK</Button>
              </Modal.Footer>
          </Modal>
      </>
    );

}
