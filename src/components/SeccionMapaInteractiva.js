"use client";
import styles from "../styles/SeccionMapaInteractiva.module.css";
import Lista from "../components/Lista";
import DashboardGrid from "../components/DashboardGrid";
import getCoordinates from "../lib/coordinates";
import React, { useState } from "react";

export default function Home() {
    const [municipio, setMunicipio] = useState("Amagá");
    const [coordinates, setCoordinates] = useState(getCoordinates("Amagá"));

    return (
        <main className={styles.main}>
            <div className={styles.dropdownContainer}>
                <p>Municipios</p>
                <Lista
                    municipio={municipio}
                    setMunicipio={setMunicipio}
                    setCoordinates={setCoordinates}
                />
            </div>
            <DashboardGrid coordinates={coordinates} />
        </main>
    );
}
