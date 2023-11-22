import styles from "../styles/DashboardGrid.module.css";
import Mapa from "./Mapa";
import Restaurantes from "./Restaurantes";
import Hoteles from "./Hoteles";

//svgPi svgPi25
const DashboardGrid = ({ municipio }) => {
    return (
        <main className={styles.main}>
            <div className={styles.mapItem}>
                <Mapa />
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
                            SATISFACCIÓN HOTELERA (HSI)
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomItemContainer}>
                <div className={styles.bottomItem}>
                    <Restaurantes municipio={municipio} />
                </div>
            </div>
            <div className={styles.bottomItemContainer}>
                <div className={styles.bottomItem}>
                    <Hoteles municipio={municipio} />
                </div>
            </div>
        </main>
    );
};

export default DashboardGrid;
