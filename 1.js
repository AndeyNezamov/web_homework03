function temperature(cel){
    far = (9 / 5) * cel + 32;
    return `Цельсий:${cel}, Фарингейт:${far}`
}
const cel = parseFloat(prompt('Введите температуру в градусах цельсий и я переведу ее в фарингейт=)'));
alert(temperature(cel))
