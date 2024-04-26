import React, { useState } from "react";
import "./registerCard.css";
//@ts-ignore
import fundo from "../../images/registerPage/fundo.png";


export default function RegisterCard() {
    const [activeButton, setActiveButton] = useState("button1");
    const [pageTitle, setPageTitle] = useState("Cadastro de Usuário");

    const handleButtonClick = (buttonId: string) => {
        setActiveButton(buttonId);
        if (buttonId === "button2") {
            setPageTitle("Editar Perfil de Usuário");
        } else {
            setPageTitle("Cadastro de Usuário");
        }
    };

    return (
        <div className="container">
            <img className="fundo" src={fundo} />
            <h1>{pageTitle}</h1>
            <div className="but">
                <button
                    className={`but1 ${activeButton === "button1" ? "active" : ""}`}
                    onClick={() => handleButtonClick("button1")}
                >
                    Cadastrar Usuário
                </button>
                <button
                    className={`but2 ${activeButton === "button2" ? "active" : ""}`}
                    onClick={() => handleButtonClick("button2")}
                >
                    Editar Perfil de Usuário
                </button>
            </div>
            <div className="card">
                {activeButton === "button1" ? (
                    <div className="input-container">
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="nome" name="nome" placeholder="Nome e Sobrenome" />
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="usuario@servidor.com.br" />
                        <label htmlFor="funcao">Função</label>
                        <input type="text" id="funcao" name="funcao" placeholder="Cargo" />
                        <div className="but2">
                            <button>Confirmar</button>
                        </div>
                    </div>
                ) : (
                    <div className="input-container">
                        <div>
                            <label htmlFor="name">Nome</label>
                            <div className="input-wrapper">
                                <input type="text" id="nome" name="nome" placeholder="Nome e Sobrenome" />
                                <button className="edit-button"></button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">E-mail</label>
                            <div className="input-wrapper">
                                <input type="email" id="email" name="email" placeholder="usuario@servidor.com.br" />
                                <button className="edit-button"></button>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="funcao">Função</label>
                            <div className="input-wrapper">
                                <input type="text" id="funcao" name="funcao" placeholder="Cargo" />
                                <button className="edit-button"></button>
                            </div>
                        </div>
                        <div className="but2">
                            <button>Confirmar</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}




