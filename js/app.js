const validadCorreo = () => {
  // Declaracion de Variables
  const correo = document.querySelector("#correo").value;
  const expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const esValido = expReg.test(correo);
  console.log(esValido);
  const spanError = document.querySelector("#flex-email__error");

  if (spanError != null) {
    spanError.innerHTML = "";
  }

  if (esValido) {
    alert("La dirección de email " + correo + " es correcta.");
  } else {
    // nodos del DOM
    const newElement = document.createElement("p");
    const errorMessage = document.createTextNode(
      "Please, provide a valid mail"
    );
    errorMessage.style = "margin: 20px 0 0 20px; color: red";
    newElement.appendChild(errorMessage);
    spanError.appendChild(newElement);
    console.log(correo);
  }
};
