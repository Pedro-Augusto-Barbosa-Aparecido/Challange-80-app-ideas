import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";

import axios from "axios";

export default function ContentCards () {
    const [cards, setCards] = useState([]);
    const [time, setTime] = useState(Date.now());
    let res = useRef();

    useEffect(() => {
        async function fetchData () {
            res.current = await axios.get(`${window.location.href}api/cards-api`);
            setCards(res.current.data.data);
            setTime(res.current.data.time);

        }

        fetchData().then(() => {

        });
    }, [res])

    return (
        <section>
            <div className={"row"}>
                {
                    cards.map((col, index) => {
                        return (
                            <div className={"col"} key={index}>
                                {
                                    col.map((card, _index) => {
                                        return (
                                            <div className="card" key={_index}>
                                                <h5 className="card-header">{ card.title }</h5>
                                                <div className="card-body">
                                                    <h5 className="card-title">{ card.title }</h5>
                                                    <img
                                                        src={card.imageSRC}
                                                        // width={100} height={60}
                                                        style={{ width: "100%", height: "50vh" }}
                                                        // layout={"responsive"}
                                                        alt={card.altName}
                                                        title={card.altName}
                                                        // quality={"100"}
                                                        // priority

                                                    />
                                                    <p className="card-text">
                                                        { card.text }
                                                    </p>
                                                    <Link href={ card.pageLink }>
                                                        <a className={styles.button}>Visit the Page</a>
                                                    </Link>
                                                    <Link href={ card.readmeLink }>
                                                        <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );

}
