function encriptar() {
    let txtEncriptado = ''
    let texto = document.getElementById('inputTxt').value.toLowerCase()
    let imagen = document.getElementById('muneco')
    let textoIni = document.getElementById('frame5')
    let resultado = document.getElementById('resultado')
    let btnCopiar = document.getElementById('copiar')
    let cantidadCaracteres = texto.length
    for (let i = 0; i < cantidadCaracteres; i++) {
        if (texto[i] == "e") {
            txtEncriptado = txtEncriptado + 'enter';
        } else if (texto[i] == "i") {
            txtEncriptado = txtEncriptado + 'imes';
        } else if (texto[i] == "a") {
            txtEncriptado = txtEncriptado + 'ai';
        } else if (texto[i] == "o") {
            txtEncriptado = txtEncriptado + 'ober';
        }
        else if (texto[i] == "u") {
            txtEncriptado = txtEncriptado + 'ufat';
        }
        else {
            txtEncriptado = txtEncriptado + texto[i];
        }
    }
    imagen.hidden = true
    textoIni.hidden = true
    resultado.hidden = false
    btnCopiar.hidden = false
    resultado.innerHTML = txtEncriptado

}
function desencriptar() {
    let texto = document.getElementById('inputTxt').value.toLowerCase()
    let imagen = document.getElementById('muneco')
    let textoIni = document.getElementById('frame5')
    let resultado = document.getElementById('resultado')
    let btnCopiar = document.getElementById('copiar')

    let textoDesencriptado = texto.replaceAll('enter', 'e');
    textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i')
    textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a')
    textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o')
    textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u')

    imagen.hidden = true
    textoIni.hidden = true
    resultado.hidden = false
    btnCopiar.hidden = false
    resultado.innerHTML = textoDesencriptado

}
function check(e) {
    tecla = (document.all) ? e.keyCode : e.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patrón de entrada, en este caso solo acepta numeros y letras
    patron = /[A-Za-z0-9]/;
    tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function copiarTexto() {
    let resultado = document.getElementById('resultado')
    navigator.clipboard.writeText(resultado.textContent)
        .then(() => {
            console.log('Texto copiado al portapapeles')
        })
        .catch(err => {
            console.error('Error al copiar al portapapeles:', err)
        })
}


// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"