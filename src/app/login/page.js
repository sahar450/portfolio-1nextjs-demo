
"use client"
import React, { useEffect, useRef, useState,  } from 'react';
import { useActionState } from 'react'; // نه react-dom!
import { Local } from "@/components/localstorage/Local.js";
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./register.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { sendLogin } from './action';
import { Col, Row, Container } from 'react-bootstrap';
const initialState = { message: '' ,token:null};
export default function page() {
      const router = useRouter();

    const [state, formAction] = useActionState(sendLogin, initialState);
    useEffect(()=>{
        if(state.message === "ورود با موفقیت انجام شد!" && state.token){
            Local(state.token);
            window.location.href="/dashbord";

        }
    },[state])

    return (
        <>
            <Container fluid className={styles.backgrandimg}>
                <Row className={styles.registerbox}>
                    <Col md={6} lg={6} xs={6} className={styles.cont}>
                        <div className={styles.registerback}>
                            <h3>
                                log in
                            </h3>
                            <div className={styles.inputbox}>
                                <form className={styles["input-detile"]} action={formAction}>
                                    <label className={styles["input-label"]}>user name</label>
                                    <input type='text' name='user' required />

                                    <br/><br/><br/>
                                    <label className={styles["input-label"]} required>password</label>
                                    <input type="password"  name='pass'/>
                                    <br/><br/><br/>
                                    <button type='submit' className={styles.btnform}>submit</button>
                                </form>
                                {state.message && <p style={{ color: "red" }}>{state.message}</p>}

                            </div>

                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}
