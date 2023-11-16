"use client";
import styles from "../styles/SeccionMapaInteractiva.module.css";
import Mapa from "../components/Mapa";
import Lista from "../components/Lista";
import React, { useState } from "react";

export default function Home() {
    const [municipio, setMunicipio] = useState("Amagá");
    const [coordinates, setCoordinates] = useState({
        latitude: 6.040036365306395,
        longitude: -75.70279244467295,
        zoom: 16,
    });

    return (
        <main
            className={styles.main}
            onClick={() => {
                console.log(municipio);
            }}
        >
            <div className={styles.dropdownContainer}>
                <Lista
                    municipio={municipio}
                    setMunicipio={setMunicipio}
                    setCoordinates={setCoordinates}
                />
            </div>
            <div className={styles.mapContainer}>
                <Mapa coordinates={coordinates} />
            </div>
        </main>
    );
}
