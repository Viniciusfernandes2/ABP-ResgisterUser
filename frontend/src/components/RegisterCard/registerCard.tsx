
import "./registerCard.css";

export default function RegisterCard() {
    return (
        <div>
            <div className="but-container">
            <button className="but">Botão 1</button>
            <button className="but">Botão 2</button>
            </div>
                <div className="card">
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome e Sobrenome" />
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" name="email" placeholder="usuario@servidor.com.br" />
                    <label htmlFor="funcao">Função</label>
                    <input type="text" id="funcao" name="funcao" placeholder="Cargo" />
                    <button className="but2">Comfirmar</button>
                </div>
            
        </div>
    );
}
