"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import React, { useState } from "react";
export default function Header() {
	<header className="header">
		<nav className={styles.navbar}>
			<div>
				<Image
					src="/assets/logo.png"
					width="30"
					height="30"
					alt="Logo Clínica"
				></Image>
				<h1 className="titulo">Clínica Médica</h1>
				<ul>
					<li>
						<Link href="/">HOME</Link>
						<Link href="/">MÉDICO</Link>
						<Link href="/">PACIENTE</Link>
						<Link href="/">CONSULTA</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>;
}
