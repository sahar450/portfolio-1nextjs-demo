"use client"
import React, { useEffect, useRef, useState, } from 'react';
import { useActionState } from 'react'; // نه react-dom!
import { Local } from "@/components/localstorage/Local";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./sing.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { Col, Row, Container } from 'react-bootstrap';
import { sendRegister } from './action';
const ditialmessage = { message: '',token:null};

export default function Page() {
  const [state , formAction]=useActionState(sendRegister,ditialmessage);
  useEffect(()=>{
    if(state.message === "ثبت نام با موفقیت انجام شد" && state.token){
      Local(state.token);
      window.location.href='/dashbord';
    }
  },[state])
  return (
    <Container fluid className={styles.backgrandimg}>
      <Row className={styles.registerbox}>
        <Col md={6} lg={6} xs={10} className={styles.cont}>
          <div className={styles.registerback}>
            <h3>Register</h3>
            <div className={styles.inputbox}>
              <form className={styles["input-detile"]} action={formAction}>
                <div className={styles["form-group"]}>
                  <label className={styles["input-label"]}>name</label>
                  <input type="text" name="fullname" required />
                </div>

                <div className={styles["form-group"]}>
                  <label className={styles["input-label"]}>user name</label>
                  <input type="text" name="user" required />
                </div>

                <div className={styles["form-group"]}>
                  <label className={styles["input-label"]}>email</label>
                  <input type="email" name="email" required />
                </div>

                <div className={styles["form-group"]}>
                  <label className={styles["input-label"]}>phone</label>
                  <input type="text" name="phone" required />
                </div>

                <div className={styles["form-group"]}>
                  <label className={styles["input-label"]}>password</label>
                  <input type="password" name="pass" required />
                </div>

                <button type="submit" className={styles.btnform}>submit</button>
              </form>

              {
                state.message && <p style={{ color: "red" }}>{state.message}</p>
              }
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}