import { useState, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export const Checkout = () => {
  const [formularioEnviado, setFormularioEnviado] = useState(false);
  const { cart, getItemPrice,emptyCart } = useContext(CartContext);
  const [orderCompra, setOrderCompra] = useState("");
  const [idBuy, setIdBuy] = useState("");

  const db = getFirestore();
  const orderCollection = collection(db, "order");
  
  

  // const handleClick = () => {
  //   const order = {
  //     buyer: {},
  //     items: cart,
  //     total: getItemPrice(),
  //   };
  //   addDoc(orderCollection, order).then(({ id }) => {
  //     setOrderCompra(id);
  //   });
  // };
  return (
    <> 
      {orderCompra.length > 0 ? (
        <div className="purchaseOrder">
          <h1 style={{ fontSize: "2.2rem", color: "rgb(75 76 95)" }}>
            {" "}
            Muchas gracias por comprar en nuestra tienda!{" "}
          </h1>
          <p style={{ fontSize: "1.5rem", color: "#787A91" }}>
            Su orden es: {orderCompra}
          </p>
        </div>
      ) : (
        <Formik
          initialValues={{
          
          }}
          validate={(valores) => {
            let errores = {};
            // validacion nombre
            if (!valores.nombre) {
              errores.nombre = "Porfavor ingresa su nombre";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                "El nombre solo puede contener letras y espacios";
            }
            // validacion correo
            if (!valores.correo) {
              errores.correo = "Porfavor ingrese un correo electronico";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo =
                "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
            }
            // telefono
            if (!valores.telefono) {
              errores.telefono = "Porfavor ingrese un numero de telefono";
            } else if (!/^\+[1-9]{1}[0-9]{3,14}$/.test(valores.telefono)) {
              errores.telefono =
                "Ingrese el numero de telefono completo porfavor";
            }
            return errores;
          }}
          onSubmit={(values, { resetForm }) => {
            const order = {
              buyer: { ...values },
              total: getItemPrice(),
              items: [...cart],
            };
            addDoc(orderCollection, order).then(({ id }) => {
              setOrderCompra(id);
            });
            resetForm();
            emptyCart();
            setFormularioEnviado(true);
            setTimeout(() => {
              setFormularioEnviado(false);
            }, 4000);
          }}
        >
          {({ errors,isSubmitting }) => (
            <Form action="" id="msform" className="formFather">
              <fieldset>
                <h2 className="fs-title">Complete el Formulario</h2>
                <div>
                  <Field
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Luciano"
                    required
                  />
                  <ErrorMessage
                    name="nombre"
                    component={() => (
                      <div className="errorNameForm">{errors.nombre}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    id="telefono"
                    name="telefono"
                    placeholder="+541145096743"
                    required
                 className="fieldRequired"
                  />
                  <ErrorMessage
                    name="telefono"
                    component={() => (
                      <div className="errorTelefonoForm">{errors.telefono}</div>
                    )}
                  />
                </div>
                <div>
                  <Field
                    type="text"
                    id="correo"
                    name="correo"
                    placeholder="correo@gmail.com"
                    required
                  />
                  <ErrorMessage
                    name="correo"
                    component={() => (
                      <div className="errorCorreoForm">{errors.correo}</div>
                    )}
                  />
                </div>
                <button className="buttonsDetail" onClick={isSubmitting}>
                  Enviar
                </button>
                {formularioEnviado && (
                  <p className="formSent">Formulario enviado con exito!</p>
                )}
              </fieldset>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
};
