import "../AdmPanel/admPanel.css";
//@ts-ignore
import map from "../../images/AdmPanel/map.png";
//@ts-ignore
import satellite from "../../images/AdmPanel/satellite.png"

export default function AdminPanel() {
  return (
    <div className="body">
      <img className="img-boxmap" src={map} />
      <div className="cardcontainer">
        <div className="card1">
          <div className="cardtxt1">
            <h1>Painel de Projetos</h1>
            <h2>Acesse seus projetos</h2>
          </div>
        </div>
        <div className="card2">
          <div className="cardtxt2">
          <h1>Painel de usuários</h1>
          <h2>Acesse o perfil de usuários</h2>
        </div></div>
      </div>
      <img className="img-boxsat" src={satellite} />
    </div>
  );
}
