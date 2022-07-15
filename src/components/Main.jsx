import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <>
      <h1 className="h1Title">BIENVENIDOS A MI E-COMMERCE</h1>
      <div className="mainImgContainer">
      <img
        src="https://media.revistagq.com/photos/62c2dd5c6479fa73c1ca229b/master/pass/gorras%20new%20era%20precio%20historia.jpg"
        alt="mainImg"
        className="mainImg"
        style={{ width: "100%", marginBottom: "3rem", marginTop: "3rem" }}
      />
      <div>
      <p>Usalo durante un mes, y si no te enamoraste para el día 30, te lo devolvemoss para obtener un reembolso completo.</p>
      </div>
      </div>

      <h1 className="h1Grid">ELIJE EL COLOR QUE MAS TE GUSTE</h1>
      <div className="boxGrid">
        <div className="box b1">
            <div className="indoor">
            <Link to={'category/Gorras Verdes'}>
          <img src="https://i.pinimg.com/750x/45/f4/18/45f4185c98fe8d92e0b9042fcf08362b.jpg" alt="" className="boxImg"/>
          </Link>
          </div>
        </div>
        <div className="box b2">
        <div className="indoor">
            <Link to={'category/Gorras Rojas'}>
          <img src="https://i.pinimg.com/564x/a7/be/38/a7be38a14b59e0c9767676f8c53654b8.jpg" alt="" className="boxImg"/>
          </Link>
          </div>
        </div>
        <div className="box b3">
        <div className="indoor">
        <Link to={'category/Gorras Negras'}>
          <img src="https://i.pinimg.com/564x/28/63/16/28631661cb7b08a1c14b0635b9631b52.jpg" alt="" className="boxImg" />
          </Link>
          </div>
        </div>
        <div className="box b4">
        <div className="indoor">
        <Link to={'category/Gorras Azules'}>
          <img src="https://i.pinimg.com/564x/9c/3d/82/9c3d8293cd43ec5e587c4f396a63f226.jpg" alt="" className="boxImg"/>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};
