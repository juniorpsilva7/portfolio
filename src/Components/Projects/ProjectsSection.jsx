import React from 'react'
import Project from './Project'

export default function ProjectsSection() {
  return (
    <div className="flex flex-col w-full text-white py-6 px-4 sm:px-12 gap-12 justify-center items-center">
        
        <Project 
            title={"App Cadastro LojasProdutos"}
            videoURL={"https://www.youtube.com/embed/TzzGer9cKhA?si=ueUh2-mJO6laG0xo&rel=0"}
            description={`Projeto Fullstack, feito com Node.js + MongoDB + AngularJS.
            App com autenticação e também com OAuth autenticando pelo facebook onde cada usuário pode cadastrar sua loja e seus produtos. 
            Persistência feita no MongoDB, com validações nos campos e na controller. No node.js foi usado Express, passport e outras bibliotecas 
            como 'mongoose' 'ejs', 'fs', 'multer'. No angular também foram usadas bibliotecas como bootstrap, ng-file-upload.`}
        />

        <Project 
            title={"App Simples de Finanças - feito com React + Local Storage"}
            videoURL={"https://www.youtube.com/embed/DhiyfWowg1M?si=TuskE3VfQPO1rdoa&rel=0"}
            description={`Projeto Front-end, feito com React + Local Storage. Aplicativo de controle de finanças simples com entradas e saídas, mostrando um dashboard 
            calculado em tempo real.`}
        />

        <Project 
            title={"App Consulta CEP + Google Maps"}
            videoURL={"https://www.youtube.com/embed/VHQtLQo_NMI?si=mY1mC3QyR_O6Q1qT&rel=0"}
            description={`Projeto Front-end, feito com React + API Google Maps.
            App que recebe um CEP, faz a consulta via API, retorna todos os dados do endereço e mostra o ponto exato no google maps. Estilização com react-materialize.`}
        />

        <Project 
            title={"API Node.js com Importação de CSV + busca por query"}
            videoURL={"https://www.youtube.com/embed/rPIhJIIxSsM?si=M5qyZGR5Yo0LtC05&rel=0"}
            description={`Projeto Back-end, feito com Node.js + MySql.
            API feita em node.js que recebe um arquivo CSV, salva no banco de dados (MySql) e permite serviços de consulta com query params. Testes com Jest.`}
        />

    </div>
  )
}
