import styles from "../style/page.module.css";
import Image from "next/image";
export default function Home() {
	return (
		<div className={styles.container}>
			{/* <Image>
				
			</Image> */}
			<h1 className={styles.h1}>Bem-Vindo à VivaMed!</h1>
			<p className={styles.p}>
				Cuidar da sua saúde é a nossa prioridade. <br />
				Aqui, você encontra um ambiente acolhedor, profissionais dedicados e um
				atendimento personalizado para o seu bem-estar.
				<br /> Estamos prontos para oferecer o melhor em cuidado e atenção,
				porque a sua saúde merece excelência. <br />
				Estamos felizes em ter você conosco!{" "}
			</p>
			<button className={styles.botaoAgendar}>Agendar consulta</button>
		</div>
	);
}
