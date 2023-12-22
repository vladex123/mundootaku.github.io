const productos = [
    {
        ID: 1,
        nombre: "luffy",
        precio: 35.00,
    },
    {
        ID: 2,
        nombre: "goku",
        precio: 30,
    },
    {
        ID: 3,
        nombre: "zororonoa",
        precio: 40,
    },
    {
        ID: 4,
        nombre: "krilyn",
        precio: 15,
    },
    {
        ID: 5,
        nombre: "pulsera",
        precio: 12,
    },
    {
        ID: 6,
        nombre: "ropaotaku",
        precio: 17,
    },
    // ... (otros productos)
];

let contadorCarrito = 0;
const carrito = [];

const productoCatalogoHtml = (producto) => {
    return `
    <div class="col">
        <div class="card">
            <img 
            src="https://loremflickr.com/100/100/${producto.nombre}" 
            class="card-img-top" 
            alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: S/ ${producto.precio.toFixed(2)}</p>
                <button id="btn-catalogo-${producto.ID}" 
                class="btn btn-success" onclick="agregarAlCarrito(${producto.ID})">Agregar</button>
            </div>
        </div>
    </div>`;
};

const productoCarritoHtml = (producto) => {
    return `
    <div class="col">
        <div class="card">
            <img 
            src="https://loremflickr.com/100/100/${producto.nombre}" 
            class="card-img-top" 
            alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Precio: S/ ${producto.precio.toFixed(2)}</p>
                <button id="btn-carrito-${producto.IDCompra}" 
                class="btn btn-danger" onclick="removerDelCarrito(${producto.ID})">Quitar</button>
            </div>
        </div>
    </div>`;
};

const mostrarCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";
    for (const producto of productos) {
        catalogoHTML += productoCatalogoHtml(producto);
    }
    catalogoNodo.innerHTML = catalogoHTML;
};

const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    let carritoHTML = "";
    let total = 0;

    for (const producto of carrito) {
        carritoHTML += productoCarritoHtml(producto);
        total += producto.precio;
    }

    carritoNodo.innerHTML = carritoHTML;

    const totalElement = document.getElementById("total");
    if (totalElement) {
        totalElement.innerText = `Total: S/ ${total.toFixed(2)}`;
    }

    console.log("Carrito:", carrito); // Para depuración
    console.log("Total:", total); // Para depuración
};

function agregarAlCarrito(productoID) {
    const productoSeleccionado = productos.find(producto => producto.ID === productoID);
    if (productoSeleccionado) {
        contadorCarrito++;
        productoSeleccionado.IDCompra = contadorCarrito;
        carrito.push(productoSeleccionado);
        mostrarCarrito();
    }
}

const removerDelCarrito = (productoID) => {
    const index = carrito.findIndex(producto => producto.ID === productoID);
    if (index !== -1) {
        carrito.splice(index, 1);
        mostrarCarrito();
    }
};

mostrarCatalogo();
mostrarCarrito();
const carritoNodo = document.getElementById("carrito");
const totalElement = document.getElementById("total");

console.log("carritoNodo:", carritoNodo);
console.log("totalElement:", totalElement);

if (!carritoNodo || !totalElement) {
    console.error("Elementos no encontrados (carrito o total)");
   
}
