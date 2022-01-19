import styles from "./styles.module.css";

import Link from "next/link";

export default function ContentCards () {
    return (
        <section className={`${styles.grid} row`}>
            <div className="card col-lg">
                <h5 className="card-header">B2D</h5>
                <div className="card-body">
                    <h5 className="card-title">B2D</h5>
                    <p className="card-text">
                        Binary is the number system all digital computers are based on.
                        Therefore it's important for developers to understand binary, or base 2, mathematics.
                        The purpose of Bin2Dec is to provide practice and understanding
                        of how binary calculations.
                    </p>
                    <Link href={"/challenge/beginner/b2d-page"}>
                        <a className={styles.button}>Visit the Page</a>
                    </Link>
                </div>
            </div>
            <div className="card col-lg">
                <h5 className="card-header">Border Radius</h5>
                <div className="card-body">
                    <h5 className="card-title">Border Radius</h5>
                    <p className="card-text">
                        The border-radius property can have multiple values changed.
                        Preview how the shape looks while changing these values.
                    </p>
                    <Link href={"/challenge/beginner/border-radius-page"}>
                        <a className={styles.button}>Visit the Page</a>
                    </Link>
                </div>
            </div>
            <div className="card col-lg">
                <h5 className="card-header">CSV To JSON</h5>
                <div className="card-body">
                    <h5 className="card-title">CSV To JSON</h5>
                    <p className="card-text">
                        In the JSON2CSV application you translated JSON to a comma separated value (CSV) format.
                        The objective of CSV2JSON is to reverse that process by converting a block of CSV text to JSON.
                        In CSV2JSON you'll start by copying the JSON2CSV app you created and then modify it to allow
                        CSV to JSON conversion as well the JSON to CSV conversion that's already present. In additional
                        to providing a useful function, this challenge will also give you practice in modifying existing
                        applications to add new functionality.
                    </p>
                    <Link href={"/challenge/beginner/csv-2-json-page"}>
                        <a className={styles.button}>Visit the Page</a>
                    </Link>
                </div>
            </div>
        </section>

    );

}