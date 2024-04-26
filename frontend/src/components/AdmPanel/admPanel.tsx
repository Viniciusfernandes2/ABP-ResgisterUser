import "../AdmPanel/admPanel.css";
//@ts-ignore
import map from "../../images/AdmPanel/map.png";

export default function AdminPanel() {
  return (
    <div className="body">
      <img className="img-boxmap" src={map} />
      <div className="cardcontainer">
        <div className="card1">
          <h2> Lorem ipsum, dolor sit amet c</h2>
          <p>TESTE DE TEXTO</p>
        </div>
        <div className="card2"></div>
      </div>
    </div>
  );
}
