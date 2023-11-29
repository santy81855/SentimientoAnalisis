import styles from "../styles/DashboardGrid.module.css";
import Mapa from "./Mapa";
import Restaurantes from "./Restaurantes";
import Hoteles from "./Hoteles";
import Indices from "./Indices";

//svgPi svgPi25
const DashboardGrid = ({ municipio }) => {
    return (
        <main className={styles.main}>
            <div className={styles.mapItem}>
                <Mapa />
            </div>
            <p className={styles.sectionTitle}>Analisis de Sentimiento</p>
            <div className={styles.topItem}>
                <Indices />
            </div>
            <p className={styles.sectionTitle}>Analisis Descriptivo</p>
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
