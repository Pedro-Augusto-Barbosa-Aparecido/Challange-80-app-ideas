import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

import getConfig from "next/config";

export default function ContentCards () {
    const { publicRuntimeConfig } = getConfig();

    const [cards, setCards] = useState([]);
    const [time, setTime] = useState(Date.now());
    let res = useRef();

    useEffect(async () => {
        res.current = await axios.get(`http://localhost:3000/api/cards-api`);
        setCards(res.current.data.data);
        setTime(res.current.data.time);

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
                                                    <Image
                                                        src={card.imageSRC}
                                                        width={100} height={60}
                                                        layout={"responsive"}
                                                        alt={card.altName}
                                                        title={card.altName}
                                                        quality={"100"}

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
