//Realizar las operaciones Eliminar y Editar.
//Encontrar el error y justificar

function validateForm() {
  let email = document.getElementById("email").value;
  let name = document.getElementById("nombre").value;
  let doc = document.getElementById("documento").value;

  if (email === "" || name === "" || doc === "") {
    alert("Por favor, complete todos los campos obligatorios.");
    return false;
  }

  if (!email.includes("@")) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return false;
  }
  return true;
}

function showData() {
  let listData;
  if (localStorage.getItem("listData") == null) {
    listData = [];
  }else {
    listData = JSON.parse(localStorage.getItem("listData"));
}
    let html = "";

    listData.forEach(function (element, index) {
        html += `<tr>
                    <td>${index + 1}</td>
                    <td>${element.email}</td>
                    <td>${element.name}</td>
                    <td>${element.doc}</td>
                </tr>`;
    });
    document.getElementById("tableData").getElementsByTagName("tbody")[0].innerHTML = html;
}

//Create Data
document.onload = showData();

function addData() {
    if (validateForm() == true) {
        let email = document.getElementById("email").value;
        let name = document.getElementById("nombre").value;
        let doc = document.getElementById("documento").value;

        let listData;
        if (localStorage.getItem("listData") == null) {
            listData = [];
        }else {
            listData = JSON.parse(localStorage.getItem("listData"));
        }
        listData.push({
            email: email,
            name: name,
            doc: doc
        });
        localStorage.setItem("listData", JSON.stringify(listData));

        showData();
        
        document.getElementById("email").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("documento").value = "";        
    }

}

