let inputCPF = document.getElementById("cpfUsuario");
let inputCpfTitular = document.getElementById("cpfTitular");
let inputCep = document.getElementById("cep");

// let inputSenha = document.getElementById("senha");



// callback é quando passamos uma funcao como parametro dentro de outra funcao.
inputCPF.addEventListener("keyup", (event) => {


    if (isNaN(inputCPF.value)){
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length -1));
    } 
    if (inputCPF.value.length >= 11){
    inputCPF.value = inputCPF.value.substring(0, 11);
    }
   
})

inputCpfTitular.addEventListener("keyup", (event) => {


    if (isNaN(inputCpfTitular.value)){
        inputCpfTitular.value = inputCpfTitular.value.substring(0, (inputCpfTitular.value.length -1));

    } 
    if (inputCpfTitular.value.length >= 11)
    inputCpfTitular.value = inputCpfTitular.value.substring(0, 11);
   
})


inputCep.addEventListener("keyup", (event) => {

    if (isNaN(inputCep.value)){
        inputCep.value = inputCep.value.substring(0, (inputCep.value.length -1));

    } 
    if (inputCep.value.length >= 8)
    inputCep.value = inputCep.value.substring(0, 8);
    
   
})

function buscarCep(cep){
    
    alert("Vou buscar o cep " + cep);

}


    fetch("https://viacep.com.br/ws/$(cep)/json/", config)
    .then(response => response.json())
    .then(dados =>){
        if (dados.erro){
            return inputCep.setAttribute("class", "form-group is-invalid")
        }
        inputCep.setAttribute("class", "form-group")
    }



// let password = document.getElementById("senha")
// let confirm_password = document.getElementById("confirmar_senha");

// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     alert("Senhas diferentes!");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;


let novaSenha = document.getElementById("senha");
let cNovaSenha = document.getElementById("confirmar_senha");

cNovaSenha.addEventListener("keyup", (e) => {


    if (cNovaSenha.value != novaSenha.value){
        cNovaSenha.setAttribute("class", "form-control is-invalid");

    } else {
        cNovaSenha.setAttribute("class", "form-control is-valid");
    }

});

novaSenha.addEventListener("keyup", (e) => {


    if (novaSenha.value != cNovaSenha.value){
         // cNovaSenha.setAttribute("class", "form-control is-invalid");

    } else {
        cNovaSenha.setAttribute("class", "form-control is-valid");
    }

});













