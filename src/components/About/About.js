"use client"
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./about.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  return (
    <>
      <Container>

        <Row className={styles.minboxabout}>
          <Col xs={12} md={12} lg={6}>
            <div>
              <div>
                <h3>We Work For Building a Brighter Future Together and Grow BusinessLink</h3>
              </div>
              <div className={styles.txtabout}>
                <div>
                  <p>Company Mission</p>
                </div>
                <div>
                  <p className={styles.ptxtabout}>
                    We provide expert consulting services designed help businesses
                    thrive in today’s dynamic marketplace team experienced
                  </p>
                </div>

              </div>

              <div className={styles.txtabout}>
                <div>
                  <p>Company Mission</p>
                </div>
                <div>
                  <p className={styles.ptxtabout}>
                    We provide expert consulting services designed help businesses
                    thrive in today’s dynamic marketplace team experienced
                  </p>
                </div>

              </div>
            </div>

          </Col>
          <Col xs={12} md={12} lg={6}>

            <div className={styles["img-about"]}>
              <Image
                src="/images/3.jpg"
                alt="Example"
                width={400}
                height={500}
                className={styles["img-about-img"]}
                
              />

            </div>

          </Col>


        </Row>
      </Container>
    </>
  )
}
