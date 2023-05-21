class zapatillas {
  constructor(marca, precio, talle) {
    this.marca = marca;
    this.precio = precio;
    this.talle = talle;
  }
}

let precios = [
  { marca: "Nike", precio: "25000" },
  { marca: "Adidas", precio: "45000" },
  { marca: "Puma", precio: "20000" },
  { marca: "Reebook", precio: "35000" },
];

function cargarProducto() {
  let marca = prompt("ingrese la marca de zapa elegida");
  let precio = parseInt(prompt("Ingrese el precio"));
  let talle = prompt("cuanto calzas?");
  const nuevaZapa = new zapatillas(marca, precio, talle);
  arrayCarrito.push(nuevaZapa);
  alert("Producto añadido al carrito");
}

function verCarrito() {
  arrayCarrito.forEach((producto) => {
    alert(
      `usted eligio zapas ${producto.marca} por un precio de ${producto.precio} en talle ${producto.talle}`
    );
  });
}

function mostrarOferta() {
  const ofertas = precios.filter((zapa) => zapa.precio < 25000);
  for (const oferta of ofertas) {
    alert(
      `la oferta de hoy es: zapatillas ${oferta.marca} a un valor de ${oferta.precio}`
    );
  }
}
function finalizarCompra() {
  const total = arrayCarrito.reduce((acc, el) => acc + el.precio, 0);
  alert(`gracias por su compra el total a pagar es de ${total}`);
}

let arrayCarrito = [];

let opcion = prompt(
  "ingrese una opcion: \n 1: Seguir comprando \n 2: Mostrar oferta \n 3: Ver carrito \n 4: Finalizar compra \n 5: Salir"
);

while (opcion !== "5") {
  if (opcion === "1") {
    cargarProducto(arrayCarrito);
  }
  if (opcion === "2") {
    mostrarOferta();
  }
  if (opcion === "3") {
    verCarrito();
  }
  if (opcion === "4") {
    finalizarCompra();
  }
  opcion = prompt(
    "vuelve a ingresar una opcion: \n 1: Seguir comprando \n 2: Mostrar oferta \n 3: Ver carrito \n 4: Finalizar compra \n 5: Salir"
  );
}
alert("gracias por tu compra!");
