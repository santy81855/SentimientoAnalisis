"use client";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import styles from "../styles/Lista.module.css";

import { useRouter } from "next/navigation";

const options = [
    "Amagá",
    "Fredonia",
    "Andes",
    "Ciudad Bolívar",
    "Jardín",
    "Jericó",
    "La Pintada",
    "Santa Bárbara",
    "Támesis",
    "Valparaíso",
    "Venecia",
    "Urrao",
    "Tarso",
    "Pueblorrico",
    "Caramanta",
    "Montebello",
];

const defaultOption = options[0];

const Lista = ({ municipio }) => {
    const router = useRouter();
    return (
        <Dropdown
            className={styles.dropdown}
            options={options}
            value={municipio}
            onChange={(e) => {
                // setMunicipio(e.value);
                router.replace(`?municipio=${e.value}`);
            }}
            placeholder="Selecciona un municipio"
        />
    );
};

export default Lista;
