"use client";
import styles from "../styles/Mapa.module.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const Mapa = ({ coordinates }) => {
    const position = { lat: coordinates.latitude, lng: coordinates.longitude };
    return (
        <main className={styles.main}>
            <APIProvider apiKey={"AIzaSyBXp3swOU8DtCEqJRSHPd5axh0VmLIfIoo"}>
                <Map
                    center={position}
                    zoom={coordinates.zoom}
                    mapTypeId={"hybrid"}
                    streetViewControl={false}
                >
                    <Marker position={position} />
                </Map>
            </APIProvider>
        </main>
    );
};

export default Mapa;
