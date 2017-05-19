var formulario = $("#formExemplo");
var nome = document.querySelector("#textNome");
var email = document.querySelector("#inputEmail");
var mensagem = document.querySelector("#mensagem");

var erro = false;

function validarNome() {
	
	var validarNome = nome.value;

	if (validarNome == "") {
		
		nome.parentNode.classList.add("vermelho");
		erro = true;
	}else{

		nome.parentNode.classList.remove("vermelho");
		erro = false;
	}
	
}

function validarEmail() {
	
	var validarEmail = email.value;
	
	if (validarEmail == "") {
		
		email.parentNode.classList.add("vermelho");
		erro = true;
	}else{

		email.parentNode.classList.remove("vermelho");
		erro = false;
	}
	
}

function validarMensagem() {
	
	var validarMensagem = mensagem.value;
	
	if (validarMensagem == "") {
		
		mensagem.parentNode.classList.add("vermelho");
		erro = true;
	}else{

		mensagem.parentNode.classList.remove("vermelho");
		erro = false;
	}
	
}

function abrirModal(event) {
	event.preventDefault();
	validarNome();
	validarEmail();
	validarMensagem();
	if(erro == false) { 
		$('#modal').modal('show');
	}
}

formulario.submit(abrirModal);

var menuItems = document.querySelectorAll(".menu-item");

for(var i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener("click", function(event) {
		event.stopPropagation();
		$('html, body').animate({
	        scrollTop: $(event.srcElement.getAttribute("href")).offset().top - 175
	    }, 2000);
	})
}

