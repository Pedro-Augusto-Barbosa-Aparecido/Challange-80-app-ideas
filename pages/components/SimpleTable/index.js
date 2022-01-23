import React from "react";
import styles from "./styles.module.css";
import NoData from "../NoData";

export default function SimpleTable({ header, data }) {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.head}>
                <tr className={styles.row}>
                    {
                        header.map((item, index) => {
                            return <th className={styles.col} key={index}>
                                { item }
                            </th>

                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    data.length > 0 ? data.map((item, index) => {
                        return <tr className={styles.row} key={index}>
                            <td className={styles.colBody}>
                                { item.type }
                            </td>
                            <td className={styles.colBody}>
                                { item.value }
                            </td>
                            <td className={styles.colBody}>
                                { item.converted }
                            </td>
                        </tr>
                    }) : <NoData />
                }
                </tbody>
            </table>
        </div>
    );

}
