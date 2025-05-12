"use client"
import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';
export default function Footer() {
    return (
        <>
            <Container>
                <Row className={styles.back}>
                    <Col md={12} lg={4} xs={12}>
                        <div>
                            <div className={styles.baccardfooter}>
                                <p className={styles["baccardfooter-title"]}>
                                    Become a Team Member?
                                </p>
                                <p className={styles["baccardfooter-txt"]}>
                                    We are always looking for talented Member
                                </p>

                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4} xs={12}>
                        <div>
                            <div className={styles.baccardfooter}>
                                <p className={styles["baccardfooter-title"]}>
                                    Become a Team Member?
                                </p>
                                <p className={styles["baccardfooter-txt"]}>
                                    We are always looking for talented Member
                                </p>

                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={4} xs={12}>
                        <div>
                            <div className={styles.baccardfooter}>
                                <p className={styles["baccardfooter-title"]}>
                                    Become a Team Member?
                                </p>
                                <p className={styles["baccardfooter-txt"]}>
                                    We are always looking for talented Member
                                </p>

                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4} xs={4}>
                        <div>
                            <div>
                                <p>
                                    Services
                                </p>
                                <ul className={styles.ulllfooter}>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Financial Analysis</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Market Research</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Competitive Analysis</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Team Building</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">HR Management</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} lg={4} xs={4}>
                        <div>
                            <div>
                                <p>
                                    Quick Links
                                </p>
                                <ul className={styles.ulllfooter}>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">About Company</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Carrier Options</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Applications</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Contact Us</Link></li>
                                    <li className={styles.ulllfooter}><Link className={styles.ulllfooter} href="#">Case Studies</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={4} xs={4}>
                        <div>
                            <div>
                                <p>Stay up-to-date with the latest trends in digital marketing and receive exclusive
                                tips and insights by subscribing to our newsletter.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
