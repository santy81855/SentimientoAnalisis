'use client';
import Lista from "./Lista";
import styles from "../styles/DashboardGrid.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Restaurantes = ({ municipio }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(0);
    //const restaurants = coordinates.restaurants;
    const [restaurants, setRestaurants] = useState([]);
    useEffect(() => {
        const getData = async () => {
            await axios
                .get("api/get-restaurants")
                .then((res) => {
                    setRestaurants(res.data);
                })
                .catch((error) => {
                    alert(error);
                });
        };
        getData();
    }, []);

    return (
        <>
            <div className={styles.bottomItemTitleContainer}>
                <div className={styles.itemRowContainer}
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                >
                    <p className={styles.title}>Restaurantes</p>
                    <button className={styles.arrowButton}
                    ><i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i></button>
                </div>
            </div>
            {isOpen && <div className={styles.ratingContainer}>
                {restaurants.filter(item => item.municipio.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === municipio.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")).map((restaurant, index) => (
                    <div key={index} className={styles.ratingItem}>
                        <p className={styles.name}>{restaurant.name}</p>
                        {(selectedFilter === 0 && restaurant.rating !== "X" && restaurant.rating !== "?") && <div
                            className={styles.starContainer}
                        >
                            {Array.from({ length: restaurant.rating }).map((_, index) => (
                                <i key={index} className={`fa-solid fa-star ${styles.star}`}></i>
                            ))}
                            {restaurant.rating % 1 !== 0 && <i className={`fa-solid fa-star-half-stroke ${styles.star}`}></i>}
                            {Array.from({ length: 5 - restaurant.rating }).map((_, index) => (
                                <i key={index} className={`fa-regular fa-star ${styles.star}`}></i>
                            ))}
                        </div>}
                        {(selectedFilter === 0 && (restaurant.rating === "X" || restaurant.rating === "?")) && <div
                            className={styles.starContainer}
                        >

                            {Array.from({ length: 5 }).map((_, index) => (
                                <i key={index} className={`fa-regular fa-star ${styles.star}`}></i>
                            ))}
                        </div>}
                        {(selectedFilter === 1 && restaurant.type !== "X" && restaurant.type !== "?") && <div className={styles.starContainer}>{restaurant.type}</div>
                        }
                    </div>
                ))}
                <div className={styles.filterButtonContainer}>
                    <button className={selectedFilter === 0 ? styles.filterButtonActive : styles.filterButtonInactive} onClick={() => {
                        setSelectedFilter(0);
                    }}>Calificación </button>
                    <button className={selectedFilter === 1 ? styles.filterButtonActive : styles.filterButtonInactive}
                        onClick={() => {
                            setSelectedFilter(1);
                        }}>Tipo</button>
                </div>
            </div>}
        </>
    );
};

export default Restaurantes;
