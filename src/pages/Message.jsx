import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Api from "../services/api";
import { toast } from "react-toastify";
import "../App.css";

function Message() {
  const [users, setUsers] = useState([]);

  async function getAll() {
    await Api.get("/get")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  }

  // Função para deletar
  async function handleRemove(id) {
    console.log(id);
    await Api.delete(`/delete/${id}`)

      .then((resp) => {
        toast.success("Deletado!");
        // window.location.reload(false);
      })
      .catch((error) => {
        toast.error("Ops... algo deu errado!" + error);
      });
    const response = await Api.get("/get");
    setUsers(response.data);
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="inicio">
          <h1>Friend Secret Chat</h1>
          <p className="lead" style={{ color: "rgb(115 105 118)" }}>
            Guardar segredos é algo que se aprende. Assim como o silêncio.😜
          </p>
        </div>

        <div>
          {users.length > 0 ? (
            users.map((m) => (
              <div className="row" key={m.id}>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{m.name}</h5>
                      <p className="card-text">{m.message}</p>
                      <button
                        type="submit"
                        className="btn btn-secondary botao"
                        onClick={() => handleRemove(m.id)}
                      >
                        Deletar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="naoExisteMessagem">Não existe mensagem</h1>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Message;
