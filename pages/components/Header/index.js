import styles from "./styles.module.css";

import Link from "next/link";

import $ from "jquery";

import { useState } from "react";

export default function Header () {
    const [display, setDisplay] = useState("none");

    function handleClickLoginContainer (ev) {
        if ($(ev.target).hasClass("click"))
            $("#menuLogin").animate({ height: "toggle" }, 500);

    }

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#158894" }}>
                <div className="container-fluid">
                    <Link href={"/"}>
                        <a className="navbar-brand fs-2 font-monospace" href="#">Home</a>
                    </Link>
                    <div onClick={handleClickLoginContainer} className={`${styles.login} click`}>
                        <p className={"click"}>Sing-in</p>
                        <i className={"bi bi-person-circle click"} />
                        <div className={`${styles.menuLogin}`} id={"menuLogin"} style={{ display }}>
                            <Link href={"/profile/"}>
                                <a onClick={() => {
                                    $("#menuLogin").animate({ height: "toggle" }, 500);

                                }}>
                                    <i className={"bi bi-person-workspace"} />
                                    <p>My profile</p>
                                </a>
                            </Link>
                            <Link href={"/login"}>
                                <a onClick={() => {
                                    $("#menuLogin").animate({ height: "toggle" }, 500);

                                }}>
                                    <i className={"bi bi-box-arrow-right"} />
                                    <p>Login</p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );


}