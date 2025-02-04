"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "../../style/header.module.css"
import React, { useState } from "react";
import '../../style/reset.css';
export default function Header() {
	return(
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
							<Link href="/">MÉDICO</Link>
							<Link href="/">PACIENTE</Link>
							<Link href="/">CONSULTA</Link>
						</li>
					</ul>
			</nav>
	</header>
	)
	
}
