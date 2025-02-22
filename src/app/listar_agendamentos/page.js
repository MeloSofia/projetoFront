"use client";
import { useEffect, useState } from "react";
import styles from "./agendamentos.module.css";

export default function ListaConsultas() {
	const [busca, setBusca] = useState("");
	const [consultas, setConsultas] = useState([]);
	const [filtro, setFiltro] = useState("todos");
	const [modalAberto, setModalAberto] = useState(false);

	useEffect(() => {
		async function fetchConsultas() {
			try {
				const response = await fetch("https://api-clinica-2a.onrender.com/consultas");
				const data = await response.json();

				if (Array.isArray(data)) {
					setConsultas(data);
				} else {
					console.error("Erro: a API não retornou um array", data);
				}
			} catch (error) {
				console.error("Erro ao buscar consultas:", error);
			}
		}
		fetchConsultas();
	}, []);

	const consultasFiltradas = consultas.filter((consulta) => {
		if (filtro === "medico") {
			return consulta.medico?.toLowerCase().includes(busca.toLowerCase());
		} else if (filtro === "paciente") {
			return consulta.paciente?.toLowerCase().includes(busca.toLowerCase());
		}
		return true;
	});

	const abrirModal = (novoFiltro) => {
		setFiltro(novoFiltro);
		setBusca("");
		setModalAberto(true);
	};

	const fecharModal = () => {
		setModalAberto(false);
	};

	return (
		<div className={styles.containerPrincipal}>
			<h1 className={styles.titulo}>Lista de Consultas</h1>

			<div className={styles.filtros}>
				<button className={styles.botao} onClick={() => abrirModal("medico")}>
					Buscar por Médico
				</button>
				<button className={styles.botao} onClick={() => abrirModal("paciente")}>
					Buscar por Paciente
				</button>

			</div>
			{modalAberto && (
				<div className={styles.botaoEstilo} onClick={fecharModal}>
					<div className={styles.botao2} onClick={(e) => e.stopPropagation()}>
						<h2>Selecione um {filtro === "medico" ? "médico" : "paciente"}</h2>
						<input
							type="text"
							placeholder={`Digite o nome do ${filtro}`}
							value={busca}
							onChange={(e) => setBusca(e.target.value)}
							className={styles.input}
						/>
						<ul className={styles.lista}>
							{consultasFiltradas.map((consulta) => (
								<li key={consulta.id}>{filtro === "medico" ? consulta.medico : consulta.paciente}</li>
							))}
						</ul>
					</div>
				</div>
			)}
			<div className={styles.tabela}>
				<table>
					<thead>
						<tr>
							<th className={styles.th}>ID</th>
							<th className={styles.thMedico}>Médico</th>
							<th className={styles.th}>Especialidade</th>
							<th className={styles.thPaciente}>Paciente</th>
							<th className={styles.th}>Tipo</th>
						</tr>
					</thead>
					<tbody>
						{consultasFiltradas.length > 0 ? (
							consultasFiltradas.map((consulta) => (
								<tr key={consulta.id} className={styles.pesquisar}>
									<td className={styles.th}>{consulta.id}</td>
									<td className={styles.th}>{consulta.medico}</td>
									<td className={styles.th}>{consulta.especialidade}</td>
									<td className={styles.th}>{consulta.paciente}</td>
									<td className={styles.th}>{consulta.tipo}</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={5} className={styles.semResultados}>Nenhuma consulta encontrada</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}
