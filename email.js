function valEmail() {
    const email = document.getElementById('inp_email').value
    const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
    // Validando se tem digitos antes e depois do ' @ ' e do ' . ' 

    if (email == '') {
        return false
    }

    // Validando email se os caracteres do email é válido
    if (regex.test(email)) {
        return true
    } else {
        return false
    }
}