import styles from "../../style/footer.module.css"
import Image from "next/image";
export default function Footer(){
  return(
    <div className={styles.footer}>
      <div className={styles.legenda}>
        <h1>VivaMed</h1>
        <p className={styles.tituloFooter}>©2025 - VivaMed.</p>
      </div>
      <div className={styles.imageFooter}>
        <Image
        src="/assets/Doctors-bro.svg"
        width="100"
        height="100"
        alt="Logo Footer">
        </Image>
      </div>
      <div className={styles.linkFooter}>
        <Image 
        src="/assets/instagram (1).png"
        width="40"
        height="40"
        alt="Logo Insta Footer"
        >
        </Image>
      </div>
      <div className={styles.linkFooter}>
        <Image 
        src="/assets/facebook.png"
        width="40"
        height="40"
        alt="Logo Git Footer">
        </Image>
      </div>
    </div>
  )
}