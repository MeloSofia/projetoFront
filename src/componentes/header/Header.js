"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../style/header.module.css";
import React, { useState } from "react";
import "../../style/reset.css";
export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(null);
  const Nav = (menuName) => {
		setIsNavVisible(isNavVisible === menuName ? null:menuName);
	};
	return (
		<div>
			<header className="header">
				<nav className={styles.navbar}>
					<div className={styles.logo}>
						<Image
							src="/assets/edificio-hospitalar.png"
							width="80"
							height="80"
							alt="Logo Clínica"
						></Image>
						<h1 className={styles.titulo}>Clínica Médica</h1>
					</div>

					<ul className={styles.link_items}>
						<li>
							<Link href="/">HOME</Link>
						</li>
						<li>
							<button onClick={() => Nav("medico")} className={styles.list2}>
								<Link href="#">MÉDICO</Link>
							</button>
							<ul
								className={`${styles.list} ${
									isNavVisible === "medico" ? styles.show : ""
								}`}
							>
								<li>
									<a href="/listas_medicos" className={styles.link}>
										Listar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Editar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Adicionar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Excluir
									</a>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => Nav("paciente")} className={styles.list2}>
								<Link href="#">PACIENTE</Link>
							</button>
							<ul
								className={`${styles.list} ${
									isNavVisible === "paciente" ? styles.show : ""
								}`}
							>
								<li>
									<a href="/lista_pacientes" className={styles.link}>
										Listar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Editar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Adicionar
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Excluir
									</a>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => Nav("consulta")} className={styles.list2}>
								<Link href="#">CONSULTA</Link>
							</button>
							<ul
								className={`${styles.list} ${
									isNavVisible === "consulta" ? styles.show : ""
								}`}
							>
								<li>
									<a href="/listar_agendamentos" className={styles.link}>
										Listar consultas
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Editar consultas
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Agendar consultas
									</a>
								</li>
								<li>
									<a href="#" className={styles.link}>
										Cancelar
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
