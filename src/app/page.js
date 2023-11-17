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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum luctus ex vel sapien facilisis, ac venenatis
                        tortor ullamcorper. Maecenas eget tincidunt nulla. Sed
                        cursus lacinia nulla.
                    </p>
                </div>
            </section>
            <section className={styles.mapSection}>
                <SeccionMapaInteractiva />
            </section>
        </main>
    );
}
