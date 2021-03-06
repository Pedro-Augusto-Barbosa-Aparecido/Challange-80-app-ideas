import Link from "next/link";

import React from "react";

export default function Header () {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#158894" }}>
                <div className="container-fluid">
                    <Link href={"/"}>
                        <a className="navbar-brand fs-2 font-monospace" href="#">Home</a>
                    </Link>
                </div>
            </nav>
        </header>

    );


}