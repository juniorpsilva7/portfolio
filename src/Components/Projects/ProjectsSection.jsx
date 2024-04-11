import React from 'react'
import Project from './Project'

export default function ProjectsSection() {
  return (
    <div className="flex flex-col w-full text-white py-6 px-4 sm:px-12 gap-6 sm:gap-12 justify-center items-center">
        
        <Project 
            title={"App Cadastro LojasProdutos"}
            videoURL={"www.google.com"}
            description={`Projeto Fullstack, feito com Node.js + MongoDB + AngularJS
            App com autenticação e também com OAuth autenticando pelo facebook onde cada usuário pode cadastrar sua loja e seus produtos. 
            Persistência feita no MongoDB, com validações nos campos e na controller. No node.js foi usado Express, passport e outras bibliotecas 
            como 'mongoose' 'ejs', 'fs', 'multer'. No angular também foram usadas bibliotecas como bootstrap, ng-file-upload.`}
        />

    </div>
  )
}
