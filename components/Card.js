import Link from "next/link";
import styles from "../styles/Home.module.css"

const Card = ({title,title2, link, width, height, src, frameborder, allow }) => (
  <div className={styles.card}>
                {/* <img
            src={imgUrl}
            alt='link_ref_image'
        /> */}
                <iframe 
                width={width}
                height={height} 
                src={src} 
                title={title}
                frameborder={frameborder}
                allow={allow}
                >
                <h2>{title2}</h2>
                </iframe>
        </div>
);

export default Card; 