import styles from "./styles.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import $ from "jquery";
import axios from "axios";

import { emailValidator } from "../../src/utils/validators";

export default function Login() {
    const [password, setPassword] = useState("password");
    const router = useRouter();

    function changeTypePassword (ev) {
        const icon = $(ev.target);

        if ($(ev.target).hasClass("bi-eye-fill")) {
            icon.removeClass("bi-eye-fill");
            icon.addClass("bi-eye-slash-fill");

            setPassword("password");

        } else {
            icon.removeClass("bi-eye-slash-fill");
            icon.addClass("bi-eye-fill");

            setPassword("text");

        }

    }

    async function handleSubmit (ev) {
        ev.preventDefault();

        const _password = ev.target.password.value;
        const _email = ev.target.email.value;

        if (emailValidator(_email)) {
            const res = await axios.post("http://localhost:3000/api/login", {
                email: _email,
                password: _password

            });

            if (!res.data.result)
                alert("E-mail or password is wrong!!");

            else {
                localStorage.setItem("logged", true.toString());
                const event = new CustomEvent("logged", {
                    isTrusted: true,
                    detail: {
                        logged: true

                    },

                });

                document.dispatchEvent(event);

                await router.push("/");

            }

        }

    }

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <div className={styles.containerForm}>
                <form onSubmit={handleSubmit} id={"login-form"}>
                    <div className={styles.containerInput}>
                        <label className={styles.label} htmlFor={"email"}>E-mail/Phone Number</label>
                        <input
                            className={styles.input}
                            id={"email"}
                            name={"email"}
                            type={"text"}
                            placeholder={"Type your e-mail, phone-number or username..."}
                        />
                    </div>
                    <div className={styles.containerInput}>
                        <label className={styles.label} htmlFor={"password"}>Password</label>
                        <div className={styles.password}>
                            <input
                                className={styles.input}
                                id={"password"}
                                name={"password"}
                                type={password}
                                placeholder={"Type you password..."}
                            />
                            <i onClick={changeTypePassword} className={"bi bi-eye-slash-fill"} />
                        </div>
                        <Link href={"/forgot-password"}>
                            <a className={styles.forgotPassword}>Forgot your password?</a>
                        </Link>
                    </div>
                    <input className={`${styles.button} bg-primary`} type={"submit"} value={"Submit"} />
                </form>
            </div>
        </main>

    );

}
