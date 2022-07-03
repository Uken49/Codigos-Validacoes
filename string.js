function valString() {
    const string = document.getElementById('inp_string').value
    const regex = /^[a-z].* {1,}[a-z]{1,}/gi
    // Validando se a string tem apenas letras e é uma palavra composta

    if (string == '') {
        return false
    }
    
    if (regex.test(string)) {
        return true
    } else {
        return false
    }
}