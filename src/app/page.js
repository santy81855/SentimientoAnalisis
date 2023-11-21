import styles from "./page.module.css";
import Image from "next/image";
import SeccionMapaInteractiva from "../components/SeccionMapaInteractiva";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.headerSection}>
                <p className={styles.companyName}>ASResearch</p>
                <Image
                    src="/images/homepage/antioquia.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="Background image"
                />
                <div className={styles.titleContainer}>
                    <h1>Antioquia</h1>
                    <p>
                        Análisis de sentimientos y percepción en redes sociales
                        de los municipios en el suroeste antioqueño. <br />
                        Aquí se detallan algunas de las razones por las cuales
                        el turismo podría ser importante en el suroeste
                        antioqueño teniendo en cuenta el impacto tanto en el
                        desarrollo económico como en el bienestar de la
                        comunidad.
                    </p>
                </div>
            </section>
            <section className={styles.mapSection}>
                <SeccionMapaInteractiva />
            </section>
        </main>
    );
}
