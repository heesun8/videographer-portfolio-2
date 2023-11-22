import styles from "../styles/Home.module.css"

const Subtitle = ({title}) => (
    <div style={{marginBotton: '1rem'}}>
    <h2>{title}</h2>
    <img src="/page-break-scaled.png" className={styles.headingImg}/>
    </div>
);

export default Subtitle;