import styles from "../styles/DashboardGrid.module.css";
import Mapa from "./Mapa";

//svgPi svgPi25
const DashboardGrid = ({ coordinates }) => {
    return (
        <main className={styles.main}>
            <div className={styles.mapItem}>
                <Mapa coordinates={coordinates} />
            </div>
            <div className={styles.topItem}>
                <div className={styles.topItemTitleContainer}>
                    <p className={styles.title}>Índices de satisfacción</p>
                    <p className={styles.subTitle}>
                        Octubre / variación interanual
                    </p>
                </div>
                <div className={styles.chartContainer}>
                    <div className={styles.chartItemContainer}>
                        <svg className={`${styles.svgPi} ${styles.svgPi25}`}>
                            <circle className={styles.svgPiTrack} />
                            <circle className={styles.svgPiIndicator} />
                        </svg>
                        <p className={styles.circleText}>25%</p>
                        <p className={styles.chartTitle}>GASTRONOMIA</p>
                    </div>
                    <div className={styles.chartItemContainer}>
                        <svg className={`${styles.svgPi} ${styles.svgPi43}`}>
                            <circle className={styles.svgPiTrack} />
                            <circle className={styles.svgPiIndicator} />
                        </svg>
                        <p className={styles.circleText}>43%</p>
                        <p className={styles.chartTitle}>GENERAL</p>
                    </div>
                    <div className={styles.chartItemContainer}>
                        <svg className={`${styles.svgPi} ${styles.svgPi73}`}>
                            <circle className={styles.svgPiTrack} />
                            <circle className={styles.svgPiIndicator} />
                        </svg>
                        <p className={styles.circleText}>73%</p>
                        <p className={styles.chartTitle}>
                            SATISFACCIÓN HOTELERA (HSI)
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomItemContainer}>
                <div className={styles.bottomItem}>item</div>
                <div className={styles.bottomItem}>item</div>
            </div>
        </main>
    );
};

export default DashboardGrid;
