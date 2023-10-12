function calcularIMC() {
    let nombre = document.getElementById('nombre').value;
    let alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    let alturaEnMetros = alturaEnCentimetros / 100;
    let pesoEnKilos = parseInt(document.getElementById('peso').value);

    let imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = 'Estás muy delgado, procura alimentarte correctamente.';
    } else if (imc < 25) {
        clasificacion = 'Estás saludable. ¡Felicidades!';
    } else {
        clasificacion = 'Tienes sobrepeso, no te preocupes, ¡Vista a un especialista!';
    }

    let respuesta = 'Hola, tu IMC es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
}
