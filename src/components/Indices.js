'use client';
import styles from "../styles/DashboardGrid.module.css";
import React, { useState } from "react";

const Indices = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <div className={styles.topItemTitleContainer}>
                <div className={styles.itemRowContainer}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <p className={styles.title}>Índices de satisfacción</p>
                    <button className={styles.arrowButton}
                    ><i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i></button>
                </div>
            </div>
            {isOpen && <div className={styles.chartContainer}>
                <div className={styles.chartItemContainer}>
                    <svg className={`${styles.svgPi} ${styles.svgPi85}`}>
                        <circle className={styles.svgPiTrack} />
                        <circle className={styles.svgPiIndicator} />
                    </svg>
                    <p className={styles.circleText}>85%</p>
                    <p className={styles.chartTitle}>GASTRONOMIA</p>
                </div>
                <div className={styles.chartItemContainer}>
                    <svg className={`${styles.svgPi} ${styles.svgPi77}`}>
                        <circle className={styles.svgPiTrack} />
                        <circle className={styles.svgPiIndicator} />
                    </svg>
                    <p className={styles.circleText}>77%</p>
                    <p className={styles.chartTitle}>GENERAL</p>
                </div>
                <div className={styles.chartItemContainer}>
                    <svg className={`${styles.svgPi} ${styles.svgPi73}`}>
                        <circle className={styles.svgPiTrack} />
                        <circle className={styles.svgPiIndicator} />
                    </svg>
                    <p className={styles.circleText}>73%</p>
                    <p className={styles.chartTitle}>
                        SATISFACCIÓN HOTELERA
                    </p>
                </div>
            </div>}
        </>
    );
};

export default Indices;