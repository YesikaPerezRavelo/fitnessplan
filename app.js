function crearCliente(nombre, apellido) {
  this.nombre = nombre = prompt("Ingresa tu nombre");
  this.apellido = apellido = prompt("Ingresa tu apellido");
  this.saludarCliente = function () {
    return `¡Hola ${this.nombre}, ${this.apellido}!`;
  };
}
const cliente1 = new crearCliente();
alert(cliente1.saludarCliente());

let edad = prompt("Ingresa tu edad");
if (edad >= 18) {
  alert("Eres mayor de edad puedes continuar");
} else {
  alert("para continuar necesitas un adulto mayor");
  edad = prompt("Ingrese la edad del responsable");
  while (edad <= 18) {
    edad = prompt(
      "La persona responsable, debe ser mayor de edad, escribir OK"
    );
  }
}

alert("¿Que día se te complica entrenar? Apreta ENTER para seguir");
let dias = prompt(`
1:Lunes
2:Martes
3:Miercoles
4:Jueves
5:Viernes
6:Sabado
7:Domingo`);

switch (dias) {
  case "1":
    alert("Lunes");
    break;

  case "2":
    alert("Martes");
    break;

  case "3":
    alert("Miercoles");
    break;

  case "4":
    alert("Jueves");
    break;

  case "5":
    alert("Viernes");
    break;

  case "6":
    alert("Sabado");
    break;

  case "7":
    alert("Domingo");
    break;

  default:
    alert("Opción invalidad");

    break;
}

let dia = prompt(`Ingresa día de entrenamiento`);
let dia2 = prompt(`Ingresa otro día de entrenamiento`);
let dia3 = prompt(`Agrega otro día de entrenamiento o sino coloca un "0"`);

if (dia != "" && dia2 != "" && dia3 != "") {
  let entrenar = "1) " + dia + " " + "2) " + dia2 + " " + "3) " + dia3;

  console.log(entrenar);
} else {
  console.log("Opción invalidad falta cargar los días de entrenamiento");
}

alert(
  "Ingresa la cantidad de días que deseas entrenar y participa por un descuento exclusivo"
);

let primerProducto = Number(
  prompt("¿Cuantas veces por MES te gustaria entrenar de manera presencial?")
);
let segundoProducto = Number(
  prompt("¿Cuantas clases por MES en linea te gustaria tomar?")
);
let suma = primerProducto + segundoProducto;

if (suma >= 1 && suma <= 11) {
  alert("Descuento aplica para más cantidad de clases");
} else if (suma >= 12 && suma <= 26) {
  alert("Tendras un 15% de descuento sobre el valor total de tus clases");
} else {
  alert("Opción invalidad");
}

function datosIMC() {
  let peso = prompt(`Ingresa tu peso`);
  let altura = prompt(`Ingresa tu estatura en metros EJEMPLO: 1.63`);
  let alCuadrado = altura * altura;

  let IMC = peso / alCuadrado;

  alert("Calcularemos tu índice de Masa Corporal, escribe OK para continuar");

  if (IMC < 18.5) {
    alert("Estás por debajo del peso apropiado");
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    alert("Sos saludable");
  } else if (IMC >= 25 && IMC <= 29.9) {
    alert("Tenés sobrepeso");
  } else if (IMC >= 30 && IMC <= 34.9) {
    alert("Tenés obesidad tipo 1");
  } else if (IMC >= 35 && IMC <= 39.9) {
    alert("Tenés obesidad tipo 2");
  } else if (IMC > 40) {
    alert("Tenés obesidad tipo 3");
  } else {
    alert("Puede que no ingresaste un dato, o ingresaste un dato inválido");
  }
}
datosIMC();

let email = prompt(`Ingresa un email`);
let newPassword = prompt(`Ingresa un password`);

if (email != "" && newPassword != "") {
  let confirmation = "1) " + email + " " + "2) " + newPassword + " ";

  console.log(confirmation);
} else {
  alert("Opción invalidad falta cargar datos");
}

function registro() {
  let repeatPassword = prompt(`Confirma el password`);
  if (newPassword == repeatPassword) {
    alert("Password correcto");
  } else {
    alert("Password incorrecto");
  }

  for (let i = 0; i < 0; i++) {
    registro();
  }
}

registro();

alert("Te presentamos nuestro produtos");

const { libro, precio, disponible } = producto;

function producto(nombre, precio) {
  (this.libro = nombre), (this.precio = precio), (this.disponible = true);
}

const libro1 = new producto("Abdomen de hierro", 8000);
const libro2 = new producto("Tren superior para la postura", 9000);
const libro3 = new producto(
  "Mas de 100 entrenamientos para hacer desde casa",
  10000
);
const libro4 = new producto(
  "Los mejores entrenamientos para armar una linda cola y piernas sexy",
  15000
);

alert(libro1.libro + " " + libro1.precio);
alert(libro2.libro + " " + libro2.precio);
alert(libro3.libro + " " + libro3.precio);
alert(libro4.libro + " " + libro4.precio);

const produtos = [prompt("Ingresa que días queres entrenar")];

for (let i = 0; i < 7; i++) {
  console.log();
}
