import Link from "next/link";
import styles from "../styles/Home.module.css"

const Card2 = ({src, scrolling, allow }) => (
    <iframe
        className={styles.iframe}
        src={src}
        // allowfullscreen
        scrolling={scrolling}
        allow={allow}
    ></iframe>

);

export default Card2; 