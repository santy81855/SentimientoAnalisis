import styles from "./page.module.css";
import SeccionMapaInteractiva from "../components/SeccionMapaInteractiva";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.headerSection}>
                <h1>Antioquia</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum luctus ex vel sapien facilisis, ac venenatis
                    tortor ullamcorper. Maecenas eget tincidunt nulla. Sed
                    cursus lacinia nulla, vel laoreet est vestibulum nec. Fusce
                    auctor, elit in egestas dapibus, nisi lacus convallis justo,
                    ac eleifend velit sem vel libero. Duis varius mi nec magna
                    malesuada, vel congue justo ultricies. In hac habitasse
                    platea dictumst. Sed ullamcorper tortor vel orci cursus, eu
                    semper neque ultricies.
                </p>
            </section>
            <section className={styles.mapSection}>
                <SeccionMapaInteractiva />
            </section>
        </main>
    );
}
