import pack from "../../assets/pack.jpg";
import pack2 from "../../assets/pack2.jpg";


import "./main.css"
function Main({ title }) {
    return (
        <main>
            <div>
                <h1>{title}</h1>
                <p>Tenemos remerás personalizadas de tus bandas favoritas, tazas, llaveros, pins y mucho más!</p>
            </div>
            <div className="pack">
                <img src={pack} alt="pack1" />
                <img src={pack2} alt="pack2" />
            </div>

        </main>

    )
}
export default Main


