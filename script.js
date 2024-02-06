const servicios = [
  { id: 1, nombre: "Logotipo", precio: 157900, tiempoEntrega: 10 },
  { id: 2, nombre: "Slogan", precio: 42800, tiempoEntrega: 4 },
  { id: 3, nombre: "Claim", precio: 42800, tiempoEntrega: 6 },
  { id: 4, nombre: "Tarjetas personales", precio: 27200, tiempoEntrega: 2 },
  { id: 5, nombre: "Hojas membreteadas", precio: 27200, tiempoEntrega: 3 },
  { id: 6, nombre: "Carpeta empresarial", precio: 59800, tiempoEntrega: 5 },
  { id: 7, nombre: "Postal", precio: 46800, tiempoEntrega: 2 },
  { id: 8, nombre: "Volante", precio: 41600, tiempoEntrega: 4 },
  { id: 9, nombre: "Díptico", precio: 89400, tiempoEntrega: 8 },
];

class Pedido {
  constructor() {
    this.servicios = [];
    this.totalCompra = 0;
    this.descuento = 2;
  }

  agregarServicio(id) {
    let servicio = servicios.find((serv) => serv.id === id);
    if (servicio) {
      this.servicios.push(servicio);
      console.log("Agregaste el servicio " + id + " a tu proyecto");
    } else {
      console.log("No agregaste productos a tu proyecto");
    }
  }

  totalServicios() {
    return this.servicios.length;
  }

  totalSumatoriaServicios() {
    let total = 0;
    this.servicios.forEach((item) => {
      total += item.precio;
    });

    return total;
  }

  aplicarDescuento() {
    if (this.totalServicios() >= this.descuento) {
      return Math.round((this.totalPedido() * this.descuento) / 100);
    }
  }

  totalPedido() {
    let total = 0;

    this.servicios.forEach((item) => {
      total += item.precio;
    });

    return total;
  }
}

function listarPedido() {
  let lista = "";
  servicios.forEach((item) => {
    lista +=
      item.id +
      ". " +
      item.nombre +
      " $" +
      item.precio +
      " con entrega para " +
      item.tiempoEntrega +
      " días" +
      "\n";
  });
  return lista;
}

const pedido = new Pedido();
let servicioSeleccionado = 10;

while (servicioSeleccionado != 0) {
  servicioSeleccionado = parseInt(
    prompt( "Selecciona el servicio que desees (Coloca 0 para finalizar)\n\n" + listarPedido()
    )
  );

  if (servicioSeleccionado == 0) {
    break;
  }

  pedido.agregarServicio(servicioSeleccionado);
}

let totalPedido = pedido.totalSumatoriaServicios();
let descuento = pedido.aplicarDescuento();
let valorFinal = totalPedido - descuento;
alert("El total de tu proyecto es $" + valorFinal);
