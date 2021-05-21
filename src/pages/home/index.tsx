import React, { useContext, useState } from "react";

//nosso unico context criado que será usado junto com o hook useContext
import UserContext from "../../context/user/context";

//componentes do styled-components
//import { Container, ParentComponent, Form } from "./styles";

//importando os filhos ---  cada um é um componente que irá compor a pagina
import ChildrenOne from "../../components/ChildrenOne";
import ChildrenTwo from "../../components/ChildrenTwo";
import ChildrenThree from "../../components/ChildrenThree";

const FormData: React.FC = () => {
  //estados criados para armazenar o conteudo digitado dos inputs
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  //usando o useContext para capturar as propriedades do UserContext
  const { setState: setGlobalState } = useContext(UserContext);

  //função que ira submeter a alteração do estado global da aplicação
  function handleSubmit() {
    setGlobalState({ email, lastName, name });
  }
  return (
    <>
      <header
        style={{
          display: "flex",
          width: "100%",
          height: 50,
          backgroundColor: "red",
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        menu
      </header>
      <body
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          backgroundColor: "green",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            minWidth: 300,
            height: 1000,
            backgroundColor: "red",
          }}
        >
          filtragem lateral
        </div>
        <main
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: 1200,
            height: "auto",
            backgroundColor: "yellow",
            margin: 10,
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 200,
              height: 200,
              backgroundColor: "pink",
              margin: 10,
            }}
          >
            filtragem lateral
          </div>
        </main>
      </body>
      <footer> cabecalho</footer>
    </>
  );
};

export default FormData;
