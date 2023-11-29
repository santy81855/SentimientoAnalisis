'use client';
import styles from "../styles/DashboardGrid.module.css";
import getCoordinates from "../lib/coordinates";
import axios from "axios";
import React, { useState } from "react";

const Restaurantes = ({ municipio }) => {
    const [isOpen, setIsOpen] = useState(true);
    const coordinates = getCoordinates(municipio);
    const restaurants = coordinates.restaurants;
    /*
    const getData = async()=>{
        await axios.get("api/get-excel-data").then((res)=>{console.log(res)}).catch((error)=>{});
    };
    */
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
                <div className={styles.ratingItem}>
                    <p className={styles.name}></p>

                </div>
                {restaurants.map((restaurant, index) => (
                    <div key={index} className={styles.ratingItem}>
                        <p className={styles.name}>{restaurant.name}</p>
                        <div
                            className={styles.starContainer}
                        >
                            {Array.from({ length: restaurant.rating }).map((_, index) => (
                                <i key={index} className={`fa-solid fa-star ${styles.star}`}></i>
                            ))}
                            {Array.from({ length: 5 - restaurant.rating }).map((_, index) => (
                                <i key={index} className={`fa-regular fa-star ${styles.star}`}></i>
                            ))}
                        </div>
                    </div>
                ))}
            </div>}
        </>
    );
};

export default Restaurantes;
