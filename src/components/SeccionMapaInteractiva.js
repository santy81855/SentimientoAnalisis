import styles from "../styles/SeccionMapaInteractiva.module.css";
import Lista from "../components/Lista";
import DashboardGrid from "../components/DashboardGrid";

// get the url params
//import { useSearchParams } from "next/navigation";
// Link component will handle changing the url using the href tag ex <Link href={`/?municipio=${municipio}`}>
import Link from "next/link";

export default function Home({ municipio }) {
    //const searchParams = useSearchParams();

    return (
        <main className={styles.main}>
            <div className={styles.dropdownContainer}>
                <p>Municipios</p>
                <Lista municipio={municipio} />
            </div>
            <DashboardGrid municipio={municipio} />
        </main>
    );
}
