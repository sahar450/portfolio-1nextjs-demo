"use client"
import React, { useEffect, useRef, useState, } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./a.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import LineChart from '@/components/chart/chart';
import { Col, Row, Container } from 'react-bootstrap';
import PieChart from '@/components/chart/Circlechart';
export default function page() {
  return (
    <>
     <Row>
        <h1> page Analytics</h1>
              <Col lg={4} md={6} xs={12}>
                <div className={styles.box1}>
                  <div>
                    <i className="fa-solid fa-user"></i>
                    <span style={{ margin: "0px 15px 0px 40px" }}>Total Followers</span>
                    <h3 className={styles["box1-h3"]}>12,432</h3>

                  </div>


                </div>


              </Col>
              <Col lg={4} md={6} xs={12}>
                <div className={styles.box1}>
                  <div>
                    <i className="fa-solid fa-user"></i>
                    <span style={{ margin: "0px 15px 0px 40px" }}>Total Followers</span>
                    <h3 className={styles["box1-h3"]}>12,432</h3>

                  </div>


                </div>


              </Col>
              <Col lg={4} md={6} xs={12}>
                <div className={styles.box1}>
                  <div>
                    <i className="fa-solid fa-user"></i>
                    <span style={{ margin: "0px 15px 0px 40px" }}>Total Followers</span>
                    <h3 className={styles["box1-h3"]}>12,432</h3>

                  </div>


                </div>


              </Col>
              <Col lg={6} md={12} xs={12}>
                <div className={styles["background-chart"]}>
                  <div>
                     <LineChart />

                  </div>
                </div>

              </Col>
               <Col lg={6} md={12} xs={12}>
                <div className={styles["background-chart"]}>
                  <div>
                     <PieChart />
                     

                  </div>
                </div>

              </Col>
            </Row>
         
    </>
  )
}
