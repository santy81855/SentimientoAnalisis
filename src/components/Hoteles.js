"use client";
import styles from "../styles/DashboardGrid.module.css";
import getCoordinates from "../lib/coordinates";
import Lista from "./Lista";

import React, { PureComponent } from "react";
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
    const hotels = coordinates.hotels;
    const ratingClass = {
        1: styles.ratingBar20,
        2: styles.ratingBar40,
        3: styles.ratingBar60,
        4: styles.ratingBar80,
        5: styles.ratingBar100,
    };
    /*
<div key={index} className={styles.ratingItem}>
                        <p className={styles.name}>{hotel.name}</p>
                        <div className={styles.ratingBarBackground}>
                            <div className={ratingClass[hotel.rating]}></div>
                        </div>
                    </div>
    */

    /*
{hotels.map((hotel, index) => (
                        <p>{hotel.low}</p>
                    ))}
                    */

    return (
        <>
            <div className={styles.bottomItemTitleContainer}>
                <p className={styles.title}>Hoteles</p>
            </div>
            <div
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
            </div>
            <Lista municipio={municipio} />
        </>
    );
};

export default Hoteles;
