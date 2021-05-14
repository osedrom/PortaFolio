
expresion = /\w+@\\w+\.+[a-z]/;
function validar (){
    var name, email;
    name = document.getElementById("name").value;
    email =document.getElementById("email").value;
    if(name ==="" || email === ""){
        alert("Todos os campos são obrigatórios");
        return false;
    }
     if(name.length > 18) {
        alert("nome muito longo");
        return false;
    }
    