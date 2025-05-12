// components/layouts/DashboardLayout.jsx
"use client";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./dashbord.module.css"; // مسیر درست فایل CSS
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';
export default function DashboardLayout({ children }) {
  return (
    <Container fluid className={styles.back}>
      <Row>
        {/* Sidebar ثابت */}
        <Col lg={3}>
          <div className={styles["nav-dashboard"]}>
            <div className={styles["porf-dashboard"]}>
              <Image
                src="/images/3.jpg"
                width={100}
                height={100}
                alt="not found"
                className={styles["img-dashboard"]}
              />
              <div>
                <p>name</p>
              </div>
            </div>
            <hr />
            <ul className={styles["menu-dashboard"]}>
              <li><Link href="/dashbord/sales">Sales</Link></li>
              <li><Link href="/dashbord/analytics">Analytics</Link></li>
              <li><Link href="/dashbord/ecommerce">Ecommerce</Link></li>
            </ul>
          </div>
        </Col>

        {/* محتوای متغیر (با children) */}
        <Col lg={9}>{children}</Col>
      </Row>
    </Container>
  );
}
