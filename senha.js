function valSenha() {
    const senha = document.getElementById('inp_senha').value
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/
    // A senha deverá possuir:
    // digitos >= 8, 1 caractere especial, 1 dígito
    // 1 letra maiúscula e 1 letra minúscula

    if (senha == '') {
        return false
    }

    if (regex.test(senha)) {
        return true
    } else {
        return false
    }
}