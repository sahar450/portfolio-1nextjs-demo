"use client"
import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./landing.module.css";
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

export default function Landing() {
  const txtcirclechar = useRef(null);

  useEffect(() => {
    const sentenstxt = txtcirclechar.current;
    sentenstxt.innerHTML = sentenstxt.innerHTML
      .split("")
      .map((char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`)
      .join("");
  }, []);

  return (
    <>
      <Container fluid className={styles.back}>
        <Row>
          {/* بخش چپ */}
          <Col md={12} lg={6} xs={12} className={styles.colo}>
            <div className={styles.leftbox}>
              <h3>
                Modern Business Consulting {
                  <span className={styles['typewriter-text']}>
                    <Typewriter
                      words={['Firm', 'Service', 'Office']}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                }
              </h3>
              <hr className={styles['hr-line']} />
              <h5>
                We provide expert guidance across various business functions,
                including strategy development, process organizational.
              </h5>
            </div>
          </Col>

          {/* بخش راست */}
          <Col md={12} lg={6} xs={12} className={styles.colo}>
            <Image
              src="/images/view-down-chicago-river-from-sunset_181624-45155.jpg"
              alt="City View"
              className={styles['responsive-image']}
              width={0}
              height={440}
              sizes="100vw"
            />
            <div className={styles.circle}>
              <div className={styles.circletxt}>
                <p id="circletxt" ref={txtcirclechar}>including - strategy - development</p>
              </div>
            </div>
          </Col>

          {/* متن متحرک مارکویی */}
          <Col md={12} lg={12} xs={12}>
            <div className={styles["tf-marquee"]}>
              <div className={styles["wrap-marquee"]}>
                <div className={styles["marquee-group"]}>
                  {Array.from({ length: 2 }).map((_, groupIndex) => (
                    <>
                      {Array.from({ length: 15 }).map((_, itemIndex) => (
                        <div key={`${groupIndex}-${itemIndex}`} className={styles["marquee-item"]}>
                          <p className={`${styles["font-main-2"]} ${styles["text"]}`}>Saylo Consulting</p>
                        </div>
                      ))}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col md={12} lg={4} xs={12}>
            <div className={styles.boxinfo1}>
              <div className={styles.boxinfo1decoretive}></div>
              <div>
                <h5>Consulting Strategy</h5>
                <p>
                  Tailored strategies designed to address the unique ways challenges and opportunities of each client.

                </p>

              </div>
              <hr className={styles.boxinfo1hr} />
              <div>
                <ul>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                </ul>
              </div>

            </div>

          </Col>
          <Col md={12} lg={4} xs={12}>
            <div className={styles.boxinfo1}>
              <div className={styles.boxinfo1decoretive}></div>
              <div>
                <h5>Consulting Strategy</h5>
                <p>
                  Tailored strategies designed to address the unique ways challenges and opportunities of each client.

                </p>

              </div>
              <hr className={styles.boxinfo1hr} />
              <div>
                <ul>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                </ul>
              </div>

            </div>

          </Col>
          <Col md={12} lg={4} xs={12}>
            <div className={styles.boxinfo1}>
              <div className={styles.boxinfo1decoretive}></div>
              <div>
                <h5>Consulting Strategy</h5>
                <p>
                  Tailored strategies designed to address the unique ways challenges and opportunities of each client.

                </p>

              </div>
              <hr className={styles.boxinfo1hr} />
              <div>
                <ul>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                  <li className={styles.lilanding}>
                    Data-Driven Insights Leveraging


                  </li>
                </ul>
              </div>

            </div>

          </Col>

        </Row>
      </Container >
    </>
  )
}
