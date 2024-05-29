const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const form = document.getElementById("formContainer");


form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (isNaN(valor1.value) || isNaN(valor2.value)) {
        alert('erro voce não digitou um numero');
    }
    else{
        if (parseInt(valor1.value) > parseInt(valor2.value)) {
            document.querySelector(".message-erro").style.display = "block";
            document.querySelector(".message-sucess").style.display = "none";
        }
        else {
            document.querySelector(".message-sucess").style.display = "block";
            document.querySelector(".message-erro").style.display = "none";
        }
    }
    
});
