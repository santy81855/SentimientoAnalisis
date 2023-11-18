"use client";
import styles from "../styles/Mapa.module.css";
import Image from "next/image";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const Mapa = ({ coordinates }) => {
    const position = { lat: coordinates.latitude, lng: coordinates.longitude };
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <Image
                    src={coordinates.url}
                    width={1600}
                    height={900}
                    alt="Background image"
                    className={styles.image}
                />
            </div>
            <APIProvider apiKey={"AIzaSyBXp3swOU8DtCEqJRSHPd5axh0VmLIfIoo"}>
                <Map
                    center={position}
                    zoom={coordinates.zoom}
                    mapTypeId={"hybrid"}
                    streetViewControl={false}
                    className={styles.map}
                >
                    <Marker position={position} />
                </Map>
            </APIProvider>
        </main>
    );
};

export default Mapa;
