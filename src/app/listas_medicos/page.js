'use client';
import { useEffect, useState } from "react";
import styles from './medicos.module.css';

export default function Medicos (){
  const [exibirDropdown, setExibirDropdown] = useState(false);
  const [busca, setBusca] = useState("");
  const [medicos, setMedicos] = useState([
		{
			idmedico: 1,
			nome: "Dr. João Silva",
			telefone: "(11)99999-0001",
			email: "joão@silva.com",
			especialidade: "Clínica Geral",
		},
		{
			idmedico: 2,
			nome: "Dra. Maria Luiza",
			telefone: "(11)98888-0002",
			email: "maria@luiza.com",
			especialidade: "Pediatria",
		},
		{
			idmedico: 3,  
			nome: "Dr. Antonio Carlos",
			telefone: "(11)97777-0003",
			email: "antonio@carlos.com",
			especialidade: "Cirurgia",
		},
		{
			idmedico: 4,
			nome: "Dra. Sofia Patrícia",
			telefone: "(11)96666-0004",
			email: "sofia@patricia.com",
			especialidade: "Ginecologia",
		},
		{
			idmedico: 5,
			nome: "Dr. Luiz Henrique",
			telefone: "(11)95555-0005",
			email: "luiz@henrique.com",
			especialidade: "Cardiologia",
		},
		{
			idmedico: 6,
			nome: "Dra. Beatriz Cristina",
			telefone: "(11)94444-0006",
			email: "beatriz@cristina.com",
			especialidade: "Psiquiatria",
		},
		{
			idmedico: 7,
			nome: "Dr. Marcelo Alves",
			telefone: "(11)93333-0007",
			email: "marcelo@alves.com",
			especialidade: "Ortopedia",
		},
		{
			idmedico: 8,
			nome: "Dra. Laura Fernanda",
			telefone: "(11)92222-0008",
			email: "laura@fernanda.com",
			especialidade: "Dermatologia",
		},
		{
			idmedico: 9,
			nome: "Dr. Felipe Oliveira",
			telefone: "(11)91111-0009",
			email: "felipe@oliveira.com",
			especialidade: "Urologia",
		},
		{
			idmedico: 10,
			nome: "Dra. Gabriela Souza",
			telefone: "(11)90000-0010",
			email: "gabriela@souza.com",
			especialidade: "Oftalmologia",
		},
	]);
  return (
		<div>
			<div className={styles.container}>
				<button className={styles.botao}>Buscar médico</button>
				<h1 className={styles.listaMed}>Lista de Médicos</h1>
			</div>
			<div className={styles.tabela}>
				<thead>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Telefone</th>
						<th>Email</th>
						<th>Especialidade</th>
					</tr>
				</thead>
				<tbody>
          {/* {medicos.map((medico) =>{
            <tr key={medico.idmedico}>
							<td>{medico.idmedico}</td>
							<td>{medico.nome}</td>
              <td>{medico.telefone}</td>
              <td>{medico.email}</td>
              <td>{medico.especialidade}</td>
						</tr>;
          })} */}
					<tr>
						<td>1</td>
						<td>Dr. João Silva</td>
						<td>(11)99999-0001</td>
						<td>joão@silva.com</td>
						<td>Clínica Geral</td>
					</tr>

					<tr>
						<td>2</td>
						<td>Dra. Maria Luiza</td>
						<td>(11)98888-0002</td>
						<td>maria@luiza.com</td>
						<td>Pediatria</td>
					</tr>

					<tr>
						<td>3</td>
						<td>Dr. Antonio Carlos</td>
						<td>(11)97777-0003</td>
						<td>antonio@carlos.com</td>
						<td>Cirurgia</td>
					</tr>

					<tr>
						<td>4</td>
						<td>Dra. Sofia Patrícia</td>
						<td>(11)96666-0004</td>
						<td>sofia@patricia.com</td>
						<td>Ginecologia</td>
					</tr>

					<tr>
						<td>5</td>
						<td>Dr. Luiz Henrique</td>
						<td>(11)95555-0005</td>
						<td>luiz@henrique.com</td>
						<td>Cardiologia</td>
					</tr>

					<tr>
						<td>6</td>
						<td>Dra. Beatriz Cristina</td>
						<td>(11)94444-0006</td>
						<td>beatriz@cristina.com</td>
						<td>Psiquiatria</td>
					</tr>

					<tr>
						<td>7</td>
						<td>Dr. Marcelo Alves</td>
						<td>(11)93333-0007</td>
						<td>marcelo@alves.com</td>
						<td>Ortopedia</td>
					</tr>

					<tr>
						<td>8</td>
						<td>Dra. Laura Fernanda</td>
						<td>(11)92222-0008</td>
						<td>laura@fernanda.com</td>
						<td>Dermatologia</td>
					</tr>

					<tr>
						<td>9</td>
						<td>Dr. Felipe Oliveira</td>
						<td>(11)91111-0009</td>
						<td>felipe@oliveira.com</td>
						<td>Urologia</td>
					</tr>

					<tr>
						<td>10</td>
						<td>Dra. Gabriela Souza</td>
						<td>(11)90000-0010</td>
						<td>gabriela@souza.com</td>
						<td>Oftalmologia</td>
					</tr>
				</tbody>
			</div>
		</div>
	);
}