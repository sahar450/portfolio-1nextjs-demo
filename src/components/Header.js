"use client"

import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // مطمئن شوید bootstrap به درستی نصب شده است.
import Image from 'next/image';
import styles from "./Header.module.css"; // مطمئن شوید فایل Header.module.css درست است.
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Header() {
    const [btnclick, setbtnclick] = useState(false);
    const clickhandler = () => {
        setbtnclick((prev) => !prev)
    }
    return (
        <>
            <header>
                <div className={styles.minbox}>
                    <div>
                        {/* مطمئن شوید که تصویر در مسیر صحیح قرار دارد */}
                        <Image src="/images/2.png" width={150} height={80} />
                    </div>
                    <div>
                        <ul className={styles["menu-show"]}>
                            <li><a href='/'>HOME</a></li>
                            <li><a href='/register'>Register</a></li>
                            <li><a href='/login'>Log in</a></li>
                        </ul>
                    </div>
                    <div className={styles.minbtnWelcome}>
                        <button className={styles.btnWelcome}>Welcome  </button>
                    </div>
                    <div className={styles.hidemenu}>
                        <button className={styles["btn-hidemune"]} onClick={clickhandler}>
                            <i className={`fa-solid fa-bars ${styles.btnicon}`}></i>
                        </button>
                    </div>

                </div>

            </header>
            <div className={btnclick ? styles.resshow : styles.reshide} >
                <div  >
                    <ul className={styles["resmenu-show"]}>
                        <li><a href='#'>HOME</a></li>
                        <li><a href='#'>Register</a></li>
                        <li><a href='#'>Log in</a></li>
                    </ul>

                </div>
            </div>
        </>
    )
}
