import Image from "next/image";
import styles from "../styles/Home.module.css"

const Card = ({width, height, src, alt }) => (
    
    <div className={styles.card}>
                {/* <img
            src={imgUrl}
            alt='link_ref_image'
        /> */}
                <Image 
                width={width}
                height={height} 
                src={src} 
                alt={alt}
                >
                </Image>
        </div>
);

export default Card; 