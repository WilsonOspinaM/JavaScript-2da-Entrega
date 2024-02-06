const servicios = [
    {id:1, nombre:"Logotipo", precio:157900, tiempoEntrega:10},
    {id:2, nombre:"Slogan", precio:42800, tiempoEntrega:4},
    {id:3, nombre:"Claim", precio:42800, tiempoEntrega:6},
    {id:4, nombre:"Tarjetas personales", precio:27200, tiempoEntrega:2},
    {id:5, nombre:"Hojas membreteadas", precio:27200, tiempoEntrega:3},
    {id:6, nombre:"Carpeta empresarial", precio:59800, tiempoEntrega:5},
    {id:7, nombre:"Postal", precio:46800, tiempoEntrega:2},
    {id:8, nombre:"Volante", precio:41600, tiempoEntrega:4},
    {id:9, nombre:"Díptico", precio:89400, tiempoEntrega:8},
]

let Categoria = prompt('Cuantos empleados tiene tu empresa')

console.log(servicios[2]);

class Pedido {
    constructor(){
        this.servicios = [];
        this.totalCompra = 0;
        this.CategoriaA = 35;

    }

    agregarServicio(id){
let servicio = servicios.find(serv => serv.id === id);
if (servicio) {
    this.servicios.push(servicio);
    console.log("Agregaste el servicio " + id + " a tu proyecto");
} else {
    console.log("No agregaste productos a tu proyecto");
}

    }

    listarPedido(){
this.servicios.forEach(item => {
    console.log(item.id + ". " + item.nombre + " $" + item.precio + " con entrega para " + item.tiempoEntrega + " días");
})
    }

    totalServicios(){
        return this.servicios.length;
    }

    totalSumatoriaServicios(){
    let total = 0;
        this.servicios.forEach(item => {
            total += item.precio;
        });

        return total;
    }

    aplicarCategoria(){
        if (this.Categoria()=="A") {
            return Math.round(this.totalCompra + ((this.totalCompra * this.CategoriaA) / 100));
        } 
    }

    totalPedido(){
        this.servicios.forEach(item => {
            this.totalCompra += item.precio;
        });

        return this.totalCompra;
    }
}
 
const pedido = new Pedido();
pedido.agregarServicio(1);
pedido.agregarServicio(3);
pedido.agregarServicio(6);
pedido.agregarServicio(7);
pedido.listarPedido();

console.log("Total servicios del proyecto: " + pedido.totalServicios());
let totalProyecto = totalSumatoriaServicios();
console.log("Total para tu proyecto es de $" + totalProyecto);

const tipoCliente = [
    {id:1, tipo:"A", percent:35},
    {id:2, tipo:"B", percent:30},
]