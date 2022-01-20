import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

export default function ContentCards () {
    const cards = [
        [
            {
                title: "B2D",
                imageSRC: "/assets/b2d/binary-to-decimal.png",
                altName: "Binary Converter",
                text: "Binary is the number system all digital computers are based on.\n" +
                    "Therefore it&apos;s important for developers to understand binary, or base 2, mathematics.\n" +
                    "The purpose of Bin2Dec is to provide practice and understanding\n" +
                    "of how binary calculations.",
                pageLink: "/challenge/beginner/binary-2-decimal",
                readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Bin2Dec-App.md"
            },
            {
                title: "Calculator",
                imageSRC: "/assets/calculator/calculator.jfif",
                altName: "Calculator",
                text: "                                Calculators are not only one of the most useful tools available, but\n" +
                    "                                they are also a great way to understand UI and event processing in an\n" +
                    "                                application. In this problem you will create\n" +
                    "                                a calculator that supports basic arithmetic calculations on integers.\n" +
                    "                                <br />\n" +
                    "                                <br />\n" +
                    "                                The styling is up to you so use your imagination and get creative! You\n" +
                    "                                might also find it worth your time to experiment with the calculator app on your\n" +
                    "                                mobile device to better understand basic functionality and edge cases.",
                pageLink: "/challenge/beginner/calculator-page",
                readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calculator-App.md"
            },
        ],
        [
            {
                title: "Border Radius",
                imageSRC: "/assets/border-radius/border-radius.jfif",
                altName: "Border Radius Tester",
                text: "                                The border-radius property can have multiple values changed.\n" +
                    "                                Preview how the shape looks while changing these values.",
                pageLink: "/challenge/beginner/border-radius-page",
                readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md"
            },
            {
                title: "Calender",
                imageSRC: "/assets/calender/calender.jfif",
                altName: "Calender",
                text: "                                Build a calendar application to organize you daily life.\n" +
                    "                                Add functionality to add events and reminder.\n" +
                    "                                Style your own calendar according to your requirement",
                pageLink: "/challenge/beginner/calender-page",
                readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Calendar-App.md"
            },
        ],
        [
            {
                title: "CSV To JSON",
                imageSRC: "/assets/csv-to-json/csv-to-json.png",
                altName: "CSV Converter To Json",
                text: "                                In the JSON2CSV application you translated JSON to a comma separated value (CSV) format.\n" +
                    "                                The objective of CSV2JSON is to reverse that process by converting a block of CSV text to JSON.\n" +
                    "                                In CSV2JSON you&apos;ll start by copying the JSON2CSV app you created and then modify it to allow\n" +
                    "                                CSV to JSON conversion as well the JSON to CSV conversion that&apos;s already present. <br /> <br /> In additional\n" +
                    "                                to providing a useful function, this challenge will also give you practice in modifying existing\n" +
                    "                                applications to add new functionality.",
                pageLink: "/challenge/beginner/csv-2-json-page",
                readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/CSV2JSON-App.md"
            },
            {
                title: "Cause Effect",
                imageSRC: "/assets/cause-effect/list.jfif",
                altName: "List Image",
                text: "                                Patterns are integral to software engineering and represent potentially reusable\n" +
                    "                                components in program logic. However, patterns aren&apos;t used only for program logic,\n" +
                    "                                they are exist in other domains such as DevOps, user support, and the user interface.\n" +
                    "                                <br />\n" +
                    "                                <br />\n" +
                    "                                A common user interface pattern is to summarize data in one section of a page\n" +
                    "                                that consists of some type of list (like text, images, or icons) that describes\n" +
                    "                                or categorizes a set of data. When a list item is clicked, the detailed data behind\n" +
                    "                                it is displayed in an adjacent pane on the page.\n" +
                    "                                <br />\n" +
                    "                                <br />\n" +
                    "                                For example, on a real estate site clicking an address in a list of\n" +
                    "                                properties for sale displays the details about the property in another\n" +
                    "                                part of the page.",
                pageLink: "/challenge/beginner/cause-effect-page",
                readmeLink: "https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Cause-Effect-App.md"
            },
        ]
    ]

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