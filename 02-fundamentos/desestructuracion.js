const deadpool = {
	nombre: 'Wade',
	apellido: 'Winston',
	poder: 'Regeneración',
	getNombre() { return `${this.nombre} ${this.apellido} ${this.poder}` }
};

console.log(deadpool.getNombre());

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

const {nombre, apellido, poder, edad} = deadpool;
console.log(nombre, apellido, poder, edad);