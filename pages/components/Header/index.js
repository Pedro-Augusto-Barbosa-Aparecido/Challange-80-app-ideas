import styles from "./styles.module.css";

import Link from "next/link";
import Image from "next/image";

import $ from "jquery";

import React, { useEffect, useState } from "react";

export default function Header ({ logged }) {
    const [display, setDisplay] = useState("none");
    const [l, setL] = useState("");

    function handleClickLoginContainer (ev) {
        if ($(ev.target).hasClass("click"))
            $("#menuLogin").animate({ height: "toggle" }, 500);

    }

    useEffect(() => {
        setL(localStorage.getItem("logged") ? true : false);

    }, []);

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#158894" }}>
                <div className="container-fluid">
                    <Link href={"/"}>
                        <a className="navbar-brand fs-2 font-monospace" href="#">Home</a>
                    </Link>
                    <div onClick={handleClickLoginContainer} className={`${styles.login} click`}>
                        <p className={"click"}>
                            {
                                l === false ? "Sing-in" : "Pedro Augusto"
                            }
                        </p>
                        {
                            l === false ? <i className={"bi bi-person-circle click"} /> :
                                <Image
                                    className={`click ${styles.imageLogin}`}
                                    src={"/assets/login/profile-image/profile.jfif"}
                                    width={40}
                                    height={40}
                                    layout={"fixed"}
                                    quality={"100"}
                                    alt={"Profile Image"}
                                    priority
                                />
                        }
                        <div className={`${styles.menuLogin}`} id={"menuLogin"} style={{ display }}>
                            {
                                l === false ? <></> : <Link href={"/profile/"}>
                                                            <a onClick={() => {
                                                                $("#menuLogin").animate({ height: "toggle" }, 500);

                                                            }}>
                                                                <i className={"bi bi-person-workspace"} />
                                                                <p>My profile</p>
                                                            </a>
                                                        </Link>
                            }
                            <Link href={"/login"}>
                                <a onClick={() => {
                                    $("#menuLogin").animate({ height: "toggle" }, 500);

                                }}>
                                    <i className={"bi bi-box-arrow-right"} />
                                    <p>
                                        {
                                            l === false ? "Login" : "Logout"
                                        }
                                    </p>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    );


}