const entrada = document.querySelector(".entrada_texto");
const mensagem = document.querySelector(".saida_texto");
const btnCopiar = document.querySelector(".copiar");
const imagemGato = document.querySelector(".gato");
const placeholderTitulo = document.querySelector(".placeholder_titulo");
const placeholderSub = document.querySelector(".placeholder_sub");

// Ocultar o botão de copiar inicialmente
document.addEventListener("DOMContentLoaded", function() {
    btnCopiar.classList.add("hidden");
});

//botão de criptografar.
function btnCriptografar(){
    const textoCriptografado = criptografar(entrada.value);
    mensagem.textContent = textoCriptografado;
    entrada.value = "";
    atualizarVisibilidade(true);
}

function criptografar(stringCriptografada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringCriptografada.includes(codigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(codigo[i][0], codigo[i][1]);
        }
    }

    return stringCriptografada;
}

//botão de descriptografar.
function btnDescriptografar(){
    const textoDescriptografado = descriptografar(entrada.value);
    mensagem.textContent = textoDescriptografado;
    entrada.value = "";
    atualizarVisibilidade(true);
}

function descriptografar(stringDescriptografada){
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i = 0; i < codigo.length; i++){
        if(stringDescriptografada.includes(codigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(codigo[i][1], codigo[i][0]);
        }
    }

    return stringDescriptografada;
}

//atualizar a visibilidade da caixa de saida.
function atualizarVisibilidade(mensagemGerada = false) {
    if (mensagemGerada && mensagem.textContent.trim() !== "") {
        
        // Quando há texto, oculta imagem e placeholder.
        imagemGato.classList.add("hidden");
        placeholderTitulo.classList.add("hidden");
        placeholderSub.classList.add("hidden");
        btnCopiar.classList.remove("hidden");
    } else {
        
        // Quando não há texto, mostra imagem e placeholder.
        imagemGato.classList.remove("hidden");
        placeholderTitulo.classList.remove("hidden");
        placeholderSub.classList.remove("hidden");
        btnCopiar.classList.add("hidden");
    }
}

//mostrar toast.
function mostrarToast() {
    const toast = document.getElementById("toast");
    toast.className = "toast show";
    setTimeout(function() {
        toast.className = toast.className.replace("show", "");
    }, 3000); //3s.
}

//botão de copiar.
btnCopiar.addEventListener("click", function() {
    const textoParaCopiar = mensagem.textContent;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        mostrarToast();
        mensagem.textContent = "";
        atualizarVisibilidade(false);
    }).catch(function(err) {
        console.error("Erro ao copiar o texto: ", err);
    });
});
