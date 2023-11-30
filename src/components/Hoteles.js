"use client";
import styles from "../styles/DashboardGrid.module.css";
import Lista from "./Lista";
import axios from "axios";

import React, { useState, useEffect } from "react";
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Hoteles = ({ municipio }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState(0);
    //const hotels = coordinates.hotels;
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await axios
                .get("api/get-hotels")
                .then((res) => {
                    setHotels(res.data);
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
                    <p className={styles.title}>Hoteles</p>
                    <button className={styles.arrowButton}
                    ><i className={isOpen ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"}></i></button>
                </div>
            </div>
            {(isOpen && selectedFilter === 0) && <div
                className={`${styles.ratingContainer} ${styles.graphContainer}`}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={hotels.filter(
                            (item) => (item.bajo !== "X" || item.alto !== "X") && item.municipio.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === municipio.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
                        )}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className={styles.barGraph}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="bajo"
                            fill="lightgrey"
                            activeBar={<Rectangle fill="pink" stroke="blue" />}
                        />
                        <Bar
                            dataKey="alto"
                            fill="#07c"
                            activeBar={
                                <Rectangle fill="gold" stroke="purple" />
                            }
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>}

            {(isOpen && selectedFilter !== 0) && <div className={styles.ratingContainer}>
                {hotels.filter(item => item.municipio.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === municipio.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")).map((hotel, index) => (
                    <div key={index} className={styles.ratingItem}>
                        <p className={styles.name}>{hotel.name}</p>
                        {(selectedFilter === 1 && hotel.type !== "X" && hotel.type !== "?") && <div className={styles.starContainer}>{hotel.type}</div>
                        }
                        {(selectedFilter === 2 && hotel.ota !== "X" && hotel.ota !== "") && <div className={styles.starContainer}>{hotel.ota === true ? "Si" : "No"}</div>
                        }
                    </div>
                ))}
            </div>}

            {isOpen && <Lista municipio={municipio} />}
            {isOpen && <div className={styles.filterButtonContainer}>
                <button className={selectedFilter === 0 ? styles.filterButtonActive : styles.filterButtonInactive} onClick={() => {
                    setSelectedFilter(0);
                }}>Costo</button>
                <button className={selectedFilter === 1 ? styles.filterButtonActive : styles.filterButtonInactive}
                    onClick={() => {
                        setSelectedFilter(1);
                    }}>Tipo</button>
                <button className={selectedFilter === 2 ? styles.filterButtonActive : styles.filterButtonInactive}
                    onClick={() => {
                        setSelectedFilter(2);
                    }}>OTA</button>
            </div>}
        </>
    );
};

export default Hoteles;
