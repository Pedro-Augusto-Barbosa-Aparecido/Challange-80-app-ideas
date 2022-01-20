import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

export default function ContentCards () {
    return (
        <section>
            <div className={"row"}>
                <div className={"col"}>
                    <div className="card">
                        <h5 className="card-header">B2D</h5>
                        <div className="card-body">
                            <h5 className="card-title">B2D</h5>
                            <Image
                                src={"/assets/b2d/binary-to-decimal.png"}
                                width={100} height={60}
                                layout={"responsive"}
                                alt={"Binary Converter"}
                                title={"Binary Converter"}
                                quality={"100"}

                            />
                            <p className="card-text">
                                Binary is the number system all digital computers are based on.
                                Therefore it&apos;s important for developers to understand binary, or base 2, mathematics.
                                The purpose of Bin2Dec is to provide practice and understanding
                                of how binary calculations.
                            </p>
                            <Link href={"/challenge/beginner/b2d-page"}>
                                <a className={styles.button}>Visit the Page</a>
                            </Link>
                            <Link href={"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md"}>
                                <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className="card-header">Calculator</h5>
                        <div className="card-body">
                            <h5 className="card-title">Calculator</h5>
                            <Image
                                src={"/assets/calculator/calculator.jfif"}
                                width={100} height={60}
                                layout={"responsive"}
                                alt={"Binary Converter"}
                                title={"Binary Converter"}
                                quality={"100"}

                            />
                            <p className="card-text">
                                Calculators are not only one of the most useful tools available, but
                                they are also a great way to understand UI and event processing in an
                                application. In this problem you will create
                                a calculator that supports basic arithmetic calculations on integers.
                                <br />
                                <br />
                                The styling is up to you so use your imagination and get creative! You
                                might also find it worth your time to experiment with the calculator app on your
                                mobile device to better understand basic functionality and edge cases.
                            </p>
                            <Link href={"/challenge/beginner/calculator-page"}>
                                <a className={styles.button}>Visit the Page</a>
                            </Link>
                            <Link href={"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md"}>
                                <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"col"}>
                    <div className="card">
                        <h5 className="card-header">Border Radius</h5>
                        <div className="card-body">
                            <h5 className="card-title">Border Radius</h5>
                            <Image
                                src={"/assets/border-radius/border-radius.jfif"}
                                width={100} height={60}
                                layout={"responsive"}
                                alt={"Border Radius Tester"}
                                title={"Border Radius Tester"}
                                quality={"100"}

                            />
                            <p className="card-text">
                                The border-radius property can have multiple values changed.
                                Preview how the shape looks while changing these values.
                            </p>
                            <Link href={"/challenge/beginner/border-radius-page"}>
                                <a className={styles.button}>Visit the Page</a>
                            </Link>
                            <Link href={"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/CSV2JSON-App.md"}>
                                <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className="card-header">Calender</h5>
                        <div className="card-body">
                            <h5 className="card-title">Calender</h5>
                            <Image
                                src={"/assets/calender/calender.jfif"}
                                width={100} height={60}
                                layout={"responsive"}
                                alt={"Calender"}
                                title={"Calender"}
                                quality={"100"}

                            />
                            <p className="card-text">
                                Build a calendar application to organize you daily life.
                                Add functionality to add events and reminder.
                                Style your own calendar according to your requirement
                            </p>
                            <Link href={"/challenge/beginner/calender-page"}>
                                <a className={styles.button}>Visit the Page</a>
                            </Link>
                            <Link href={"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md"}>
                                <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={"col"}>
                    <div className="card">
                        <h5 className="card-header">CSV To JSON</h5>
                        <div className="card-body">
                            <h5 className="card-title">CSV To JSON</h5>
                            <Image
                                src={"/assets/csv-to-json/csv-to-json.png"}
                                width={100} height={60}
                                layout={"responsive"}
                                alt={"CSV Converter To Json"}
                                title={"CSV Converter"}
                                quality={"100"}

                            />
                            <p className="card-text">
                                In the JSON2CSV application you translated JSON to a comma separated value (CSV) format.
                                The objective of CSV2JSON is to reverse that process by converting a block of CSV text to JSON.
                                In CSV2JSON you&apos;ll start by copying the JSON2CSV app you created and then modify it to allow
                                CSV to JSON conversion as well the JSON to CSV conversion that&apos;s already present. <br /> <br /> In additional
                                to providing a useful function, this challenge will also give you practice in modifying existing
                                applications to add new functionality.
                            </p>
                            <Link href={"/challenge/beginner/csv-2-json-page"}>
                                <a className={styles.button}>Visit the Page</a>
                            </Link>
                            <Link href={"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md"}>
                                <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                            </Link>
                        </div>
                    </div>
                    <div className="card">
                        <h5 className="card-header">Cause Effect</h5>
                        <div className="card-body">
                            <h5 className="card-title">Cause Effect</h5>
                            <Image
                                src={"/assets/cause-effect/list.jfif"}
                                width={100} height={60}
                                layout={"responsive"}
                                alt={"List Image"}
                                title={"List Image"}
                                quality={"100"}

                            />
                            <p className="card-text">
                                Patterns are integral to software engineering and represent potentially reusable
                                components in program logic. However, patterns aren&apos;t used only for program logic,
                                they are exist in other domains such as DevOps, user support, and the user interface.
                                <br />
                                <br />
                                A common user interface pattern is to summarize data in one section of a page
                                that consists of some type of list (like text, images, or icons) that describes
                                or categorizes a set of data. When a list item is clicked, the detailed data behind
                                it is displayed in an adjacent pane on the page.
                                <br />
                                <br />
                                For example, on a real estate site clicking an address in a list of
                                properties for sale displays the details about the property in another
                                part of the page.
                            </p>
                            <Link href={"/challenge/beginner/cause-effect-page"}>
                                <a className={styles.button}>Visit the Page</a>
                            </Link>
                            <Link href={"https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md"}>
                                <a className={styles.buttonREADMEProblem}>Visit the Challenge README</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}