const validadCorreo = () => {
  // Declaracion de Variables
  const correo = document.querySelector("#correo").value;
  const expReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const esValido = expReg.test(correo);
  console.log(esValido);
  const spanError = document.querySelector("#flex-email__error");

  // Validacion del SPAN
  if (spanError != null) {
    spanError.innerHTML = "";
  }

  if (esValido) {
    alert("El correo " + correo + " fue enviado correctamente.");
  } else {
    // nodos del DOM
    const newElement = document.createElement("p");
    const errorMessage = document.createTextNode(
      "Please, provide a valid e-mail"
    );
    errorMessage.style = "color: red";
    newElement.appendChild(errorMessage);
    spanError.appendChild(newElement);
    console.log(correo);
  }
  document.querySelector("#correo").value = "";
};
