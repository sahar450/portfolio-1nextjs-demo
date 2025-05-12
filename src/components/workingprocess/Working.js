"use client"
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./workin.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Working() {
    const bar = useRef();
    let i = 0;
    useEffect(() => {
        const barRef = bar.current;


        const stopsetinterval = setInterval(() => {
            if (i > 50) {
                clearInterval(stopsetinterval);
            } else {
                barRef.style.width = `${i}%`;
                i++;
            }
        }, 400);
    }, []);
    const [accor,setaccor]=useState({one:false,two:false,three:false});
    function changaccordion(id){
        setaccor((prve)=>({...accor,[id]:!prve[id] }))
    }
    return (
        <>
            <Container fluid>
                <Row className={styles.bacworking}>
                    <Col md={12} xs={12} lg={12}>
                        <div className={styles["bacworking-title"]}>
                            <p>
                                From Concept to Execution
                                Our ConsultingProcess
                            </p>

                        </div>
                    </Col>
                    <Col md={12} xs={12} lg={6} className={styles["bacworkind-boximg"]}>
                        <Image
                            src="/images/4.jpg"
                            width={400}
                            height={400}
                            className={styles["bacworkind-img"]}
                        />



                    </Col>
                    <Col md={12} xs={12} lg={6}>

                        <div className={styles.ptxt}>

                            <p className={styles.ptxt}>
                                Skills are the foundation of success in any profession, shaping how we approach<br /> challenges and achieve our goals. technical expertise, communication, problem-solving
                            </p>

                        </div>
                        <div>
                            <div className={styles["progras-bar"]}>
                                <div className={styles["progras-diteil"]} ref={bar}>
                                    30٪
                                </div>

                            </div>

                        </div>

                    </Col>
                    <Col md={12} lg={6} xs={12}>
                        <div className={styles["minbox-accordion"]}>
                            <div className={styles["minbox-accordion1"]}>
                                <button className={styles["btn-accordion"]} onClick={()=>changaccordion("one")}>
                                    What is business consulting?
                                </button>
                                <hr className={styles["line-accordion"]} />
                                <div className={styles["txt-accordion"]} style={{ display: accor.one ? "block" : "none" }}>
                                    Our process typically starts with a discovery phase, where we assess your business needs and goals, we develop a customized strategy, followed by implementation and continuous monitoring.
                                </div>
                            </div>
                            <div className={styles["minbox-accordion1"]}>
                                <button className={styles["btn-accordion"]} onClick={()=>changaccordion("two")}>
                                    What is business consulting?
                                </button>
                                <hr className={styles["line-accordion"]} />
                                <div className={styles["txt-accordion"]} style={{ display: accor.two ? "block" : "none" }}>
                                    Our process typically starts with a discovery phase, where we assess your business needs and goals, we develop a customized strategy, followed by implementation and continuous monitoring.
                                </div>
                            </div>
                            <div className={styles["minbox-accordion1"]}>
                                <button className={styles["btn-accordion"]} onClick={()=>changaccordion("three")}>
                                    What is business consulting?
                                </button>
                                <hr className={styles["line-accordion"]} />
                                <div className={styles["txt-accordion"]} style={{ display: accor.three ? "block" : "none" }}>
                                    Our process typically starts with a discovery phase, where we assess your business needs and goals, we develop a customized strategy, followed by implementation and continuous monitoring.
                                </div>
                            </div>
                            
                        </div>
                    </Col>
                    <Col md={12} xs={12} lg={6} className={styles["bacworkind-boximg"]}>
                        <Image
                            src="/images/4.jpg"
                            width={400}
                            height={400}
                            className={styles["bacworkind-img"]}
                        />



                    </Col>

                </Row>

            </Container>
        </>
    )
}
