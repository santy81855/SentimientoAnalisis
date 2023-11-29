"use client";
import styles from "../styles/DashboardGrid.module.css";
import getCoordinates from "../lib/coordinates";
import Lista from "./Lista";

import React, { useState, PureComponent } from "react";
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
    const coordinates = getCoordinates(municipio);
    const [isOpen, setIsOpen] = useState(true);
    const hotels = coordinates.hotels;

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
            {isOpen && <div
                className={`${styles.ratingContainer} ${styles.graphContainer}`}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={hotels.filter(
                            (hotel) => hotel.bajo !== "" || hotel.alto !== ""
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
            {isOpen && <Lista municipio={municipio} />}

        </>
    );
};

export default Hoteles;
