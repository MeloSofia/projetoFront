"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../style/header.module.css";
import React, { useState } from "react";
import "../../style/reset.css";
export default function Header() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const Nav = () => {
		setIsNavVisible(!isNavVisible);
	};
	return (
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
						<button onClick={Nav} className={styles.list2}></button>
						<Link href="/">MÉDICO</Link>
						<ul className={styles.list}>
							<li>
								<a href="#">Listar</a>
							</li>
							<li>
								<a href="#">Editar</a>
							</li>
							<li>
								<a href="#">Adicionar</a>
							</li>
							<li>
								<a href="#">Excluir</a>
							</li>
						</ul>
					</li>
					<li>
						<Link href="/">PACIENTE</Link>
						<ul className={styles.list}>
							<li>
								<a href="#">Listar</a>
							</li>
							<li>
								<a href="#">Editar</a>
							</li>
							<li>
								<a href="#">Adicionar</a>
							</li>
							<li>
								<a href="#">Excluir</a>
							</li>
						</ul>
					</li>
					<li>
						<Link href="/">CONSULTA</Link>
						<ul className={styles.list}>
							<li>
								<a href="#">Listar consultas</a>
							</li>
							<li>
								<a href="#">Editar consultas</a>
							</li>
							<li>
								<a href="#">Agendar consultas</a>
							</li>
							<li>
								<a href="#">Cancelar</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</header>
	);
}
