import "../AdmPanel/admPanel.css";
//@ts-ignore
import map from "../../images/AdmPanel/map.png";
//@ts-ignore
import satellite from "../../images/AdmPanel/satellite.png"
//@ts-ignore
import card1 from "../../images/AdmPanel/card1.png"
//@ts-ignore
import card2 from "../../images/AdmPanel/card2.png"


export default function AdminPanel() {
  return (
    <div className="body">
      <img className="img-boxmap" src={map} />
      <div className="cardcontainer">
        <div className="card1">
          <div className="cardtxt1">
            <h2>Painel de Projetos</h2>
            <p>Acesse seus projetos</p>
            <div className="butadm">
              <button>Acessar</button>
            </div>
          </div>
          <div className="cardimg1">
            <img className="img-card1" src={card1} />
          </div>
        </div>
        <div className="card2">
          <div className="cardtxt2">
            <h2>Painel de usuários</h2>
            <p>Acesse o perfil de usuários</p>
            <div className="butadm">
              <button>Acessar</button>
            </div>
          </div>
          <div className="cardimg2">
            <img className="img-card2" src={card2} />
          </div>
        </div>
      </div>
      <img className="img-boxsat" src={satellite} />
    </div>
  );
}
