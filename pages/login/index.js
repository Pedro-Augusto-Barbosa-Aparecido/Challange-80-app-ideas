import React, {useState} from "react";

import $ from "jquery";

import styles from "./styles.module.css";

export default function Login() {
    const [password, setPassword] = useState("password");

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

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Login</h1>
            <div className={styles.containerForm}>
                <form id={"login-form"}>
                    <div className={styles.containerInput}>
                        <label htmlFor={"email"}>E-mail/Phone Number</label>
                        <input
                            className={styles.input}
                            id={"email"}
                            name={"email"}
                            type={"text"}
                            placeholder={"Type your e-mail, phone-number or username..."}
                        />
                    </div>
                    <div className={styles.containerInput}>
                        <label htmlFor={"password"}>Password</label>
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
                    </div>
                    <input className={`${styles.button} bg-primary`} type={"submit"} value={"Submit"} />
                </form>
            </div>
        </main>

    );

}
