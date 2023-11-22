import styles from "../styles/DashboardGrid.module.css";
import getCoordinates from "../lib/coordinates";

const Restaurantes = ({ municipio }) => {
    const coordinates = getCoordinates(municipio);
    const restaurants = coordinates.restaurants;
    const ratingClass = {
        1: styles.ratingBar20,
        2: styles.ratingBar40,
        3: styles.ratingBar60,
        4: styles.ratingBar80,
        5: styles.ratingBar100,
    };
    console.log(restaurants);
    return (
        <>
            <div className={styles.bottomItemTitleContainer}>
                <p className={styles.title}>Restaurantes</p>
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
                {restaurants.map((restaurant, index) => (
                    <div key={index} className={styles.ratingItem}>
                        <p className={styles.name}>{restaurant.name}</p>
                        <div className={styles.ratingBarBackground}>
                            <div
                                className={ratingClass[restaurant.rating]}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Restaurantes;
