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
      <div>
        <Image 
        src="/assets/Doctors-bro.svg"
        width="100"
        height="100"
        alt="Logo Footer">
        </Image>
      </div>
    </div>
  )
}