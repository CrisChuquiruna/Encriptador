const input_a_encriptar = document.getElementById("texto-principal");
const input_encriptado = document.getElementById("texto-encriptado");

var boton_copiar = document.getElementById("copiar");

function encriptar(){
    texto = input_a_encriptar.value.toLocaleLowerCase()
    var texto_encriptado = "";
    for(var letra = 0; letra < texto.length; letra++){	

        texto_encriptado +=  texto[letra];

        if (texto[letra] == "e"){
            texto_encriptado += "nter";
        }
        if (texto[letra] == "i"){
            texto_encriptado += "mes";
        }
        if (texto[letra] == "a"){
            texto_encriptado += "i";
        }
        if (texto[letra] == "o"){
            texto_encriptado += "ber";
        }
        if (texto[letra] == "u"){
            texto_encriptado += "fat";
        }
    }			

    input_encriptado.value = "";
    input_encriptado.value += texto_encriptado.toLocaleLowerCase();
    input_encriptado.style.backgroundImage = "none";
    boton_copiar.style.display = "inline";
}
function desencriptar(){
    texto_encriptado = input_a_encriptar.value.toLocaleLowerCase()
    var texto_desencriptado = "";
    for(var letra = 0; letra < texto_encriptado.length; letra++){

        texto_desencriptado += texto_encriptado[letra];

        if (texto_encriptado[letra] == "e"){
            letra += 4;
        }
        if (texto_encriptado[letra] == "i"){
            letra += 3;
        }
        if (texto_encriptado[letra] == "a"){
            letra += 1;
        }
        if (texto_encriptado[letra] == "o"){
            letra += 3;
        }
        if (texto_encriptado[letra] == "u"){
            letra += 3;
        }
    }
    input_encriptado.value = "";
    input_encriptado.value += texto_desencriptado.toLocaleLowerCase();
    input_encriptado.style.backgroundImage = "none";
}

var boton_encriptar = document.getElementById("boton-encriptar");		
boton_encriptar.onclick = encriptar;

var boton_desencriptar = document.getElementById("boton-desencriptar");
boton_desencriptar.onclick = desencriptar;

function copiar(){
    /* Select the text field */
    input_encriptado.select();
    input_encriptado.setSelectionRange(0, 99999); /* For mobile devices */

    document.execCommand('copy');
}

boton_copiar.onclick = copiar;
