import React from "react";
import Head from "next/head";

import $ from "jquery";

import styles from "./styles.module.css";
import SimpleTable from "../../../components/SimpleTable";

export default function Binary2Decimal() {
    const [typeCode, setTypeCode] = React.useState("Binary");
    const [convertedCodes, setConvertedCodes] = React.useState([]);

    const changeTypeCode = () => typeCode.toLowerCase() === "binary" ? setTypeCode("Decimal") : setTypeCode("Binary");
    const handleSubmit = (ev) => {
        ev.preventDefault();

        let binaryCode = $("#number-sequence").val();

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
                        <label className={styles.label} htmlFor={"number-sequence"} id={"code-label"}>{ typeCode } code</label>
                        <input
                            name={"numberSequence"}
                            id={"number-sequence"}
                            type={"text"}
                            placeholder={`Enter with ${typeCode.toLowerCase()} code here...`}
                            autoComplete={"off"}
                        />
                    </div>
                    <div className={styles.containerInput} id={"switch"}>
                        <div className={"form-check form-switch"}>
                            <input onClick={changeTypeCode} className={"form-check-input"} name={"codetype"} id={"code-type"} type={"checkbox"} />
                            <label className={"form-check-label"}>Change type code</label>
                        </div>
                    </div>
                    <div>
                        <input className={styles.button} type={"submit"} value={"Convert"} />
                    </div>
                </form>
            </div>

            <SimpleTable header={["Code Type", "Code", "Result Converted"]} data={convertedCodes} />
        </main>
      </>
    );

}
