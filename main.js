const usuario = {
    nombre: "María",
    apellido: "Gómez",
    edad: 26,
    direccion: { calle: "80", ciudad: "Bogotá", pais: "Colombia" },
}
    function  presentarse() {
    return "Hola, soy" + this.nombre;
}

const { nombre: apellido, edad, direccion: { calle, ciudad, pais } } = usuario;
console.log(nombre, apellido, valor);


