function calcularIMC() {
    let nombre = document.getElementById('nombre').value;
    let alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    let alturaEnMetros = alturaEnCentimetros / 100;
    let pesoEnKilos = parseInt(document.getElementById('peso').value);

    let imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    let clasificacion;

    if (imc < 18.5) {
        clasificacion = ' estás muy delgado, procura alimentarte correctamente.';
    } else if (imc < 25) {
        clasificacion = ' estás saludable. ¡Felicidades!';
    } else {
        clasificacion = ' tienes sobrepeso, no te preocupes, ¡Visita a un especialista!';
    }

    let respuesta = ('Hola ' + nombre + ' tu IMC es ' + imc  + clasificacion)
    alert(respuesta);
};
