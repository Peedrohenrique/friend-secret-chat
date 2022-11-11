import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout";
import Api from "../../src/services/api";
import "../App.css";

function SeedMessage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function enviarFormulario(e) {
    e.preventDefault();
    if (name === "" || message === "") {
      toast.error("Preencha todos os campos!");
      return;
    }
    Api.post(
      "/post",
      JSON.stringify({
        name,
        message,
      }),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((response) => {
        console.log(response);
        navigate("/");
        toast.success("Mensagem enviada!");
      })
      .catch((error) => {
        toast.error("Ops... algo deu errado!" + error);
      });
  }

  return (
    <Layout>
      <div className="container">
        <div className="inicio">
          <h1>Envie Sua Mensagem </h1>
          <p className="lead" style={{ color: "rgb(115 105 118)" }}>
            Se o plano não funciona, mude o plano, não a meta.😜
          </p>
        </div>
        <div>
          <form onSubmit={enviarFormulario} className="styleFor">
            <div className="mb-3">
              <label className="form-label">Nome</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Digite seu nome"
                aria-describedby="emailHelp"
                defaultValue={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mensagem</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                name="Mensagem"
                rows="3"
                placeholder="Digite sua mensagem"
                defaultValue={message || ""}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-secondary">
              Cuida!
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default SeedMessage;
