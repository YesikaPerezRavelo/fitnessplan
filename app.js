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

class LetsWorkout {
  constructor(dias, precios) {
    this.dias = dias;
    this.precios = precios;
  }
}

let precios = [{ precios: "3200" }];

function cargarProducto() {
  let dias = prompt(`Elige un día para entrenar:
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
  alert("Valor por hora" + precios);
  const nuevoProducto = new LetsWorkout(dias, precios);
  arrayCarrito.push(nuevoProducto);
  alert("Has añadido día de entrenamiento a tu carrito");
}

function descuentoExclusivo() {
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
  const nuevoDescuento = new descuentoExclusivo();
  arrayCarrito.push(nuevoDescuento);
  alert("Descuento" + descuentoExclusivo);
}

function reservaHoraria() {
  class Agenda {
    constructor(time, day, disponibility) {
      this.time = time;
      this.day = day;
      this.propietario = disponibility;
    }
    estaDisponible(hora) {
      if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19)) {
        return true;
      }
      return false;
    }
  }
  const agenda1 = new Agenda(
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo"
  );
  for (let index = 0; index < 3; index++) {
    let entrada = parseInt(
      prompt(
        "Ingresa un horario que te gustria entrenar con nosotros y te diremos si tenemos disponibilidad horaria. Horario Militar, ejemplo 16"
      )
    );
    if (agenda1.estaDisponible(entrada)) {
      alert("Este horario esta disponible " + entrada);
    } else {
      alert("Este horario no esta disponible " + entrada);
    }
  }
  const nuevoHorario = new reservaHoraria();
  arrayCarrito.push(nuevoHorario);
  alert("Descuento" + reservaHoraria);
}

function verCarrito() {
  arrayCarrito.forEach((producto) => {
    alert(`Elegiste ${producto.dias} por un precio de ${producto.precios}`);
  });
}

function mostrarOferta() {
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

  const ofertas = precio.filter((libro) => libro.precio < 9000);
  for (const oferta of ofertas) {
    alert(
      `la oferta de hoy es: ${oferta.libro} a un valor de ${oferta.precio}`
    );
  }
}

function finalizarCompra() {
  const total = arrayCarrito.reduce((acc, el) => acc + el.precio, 0);
  alert(`gracias por su compra el total a pagar es de ${total}`);
}

let arrayCarrito = [];

let opcion = prompt(
  "Bienvenido a Yes Fitness \n 1: Elegir día de entrenamiento \n 2: Mostrar ofertas \n 3: Participar de descuentos exclusivos \n 4: Ver disponibilidad horaria \n 5: Ver carrito \n 6: Finalizar compra \n 7: Salir"
);

while (opcion !== "7") {
  if (opcion === "1") {
    cargarProducto(arrayCarrito);
  }
  if (opcion === "2") {
    mostrarOferta();
  }
  if (opcion === "3") {
    descuentoExclusivo();
  }
  if (opcion === "4") {
    reservaHoraria();
  }
  if (opcion === "5") {
    verCarrito();
  }
  if (opcion === "6") {
    finalizarCompra();
  }
  opcion = prompt(
    "Bienvenido a Yes Fitness \n 1: Elegir otro día de entrenamiento \n 2: Mostrar ofertas \n 3: Participar de descuentos exclusivos \n 4: Ver disponibilidad horaria \n 5: Ver carrito \n 6: Finalizar compra \n 7: Salir"
  );
}
alert("gracias por tu compra!");
