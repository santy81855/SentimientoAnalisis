import styles from "../styles/DashboardGrid.module.css";
import getCoordinates from "../lib/coordinates";

const Hoteles = ({ municipio }) => {
    const coordinates = getCoordinates(municipio);
    const hotels = coordinates.hotels;
    const ratingClass = {
        1: styles.ratingBar20,
        2: styles.ratingBar40,
        3: styles.ratingBar60,
        4: styles.ratingBar80,
        5: styles.ratingBar100,
    };

    return (
        <>
            <div className={styles.bottomItemTitleContainer}>
                <p className={styles.title}>Hoteles</p>
                <p className={styles.subTitle}>Calificacion de 1 a 5</p>
            </div>
            <div className={styles.ratingContainer}>
                <div className={styles.ratingItem}>
                    <p className={styles.name}></p>
                    <div className={styles.ratingBarLegend}>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                    </div>
                </div>
                {hotels.map((hotel, index) => (
                    <div key={index} className={styles.ratingItem}>
                        <p className={styles.name}>{hotel.name}</p>
                        <div className={styles.ratingBarBackground}>
                            <div className={ratingClass[hotel.rating]}></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Hoteles;
