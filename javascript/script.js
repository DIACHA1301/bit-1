'use strict';
const imagenes =[

    {src: 'assets/foto1.jpg', categoria: "pantalon", nombre: 'Pantalon', precio: '$ 150.000'},
    {src: 'assets/foto2.png', categoria: "pantalon", nombre: 'Pantalon', precio: '$ 150.000'},
    {src: 'assets/foto3.jpg', categoria: "pantalon", nombre: 'Pantalon', precio: '$ 150.000'},
    {src: 'assets/foto4.jpg', categoria: "pantalon", nombre: 'Pantalon', precio: '$ 150.000'},

    {src: '/assets/shirt1.jpg', categoria: "blusa", nombre: 'Blusa', precio: '$ 102.000'},
    {src: '/assets/shirt2.jpg', categoria: "blusa", nombre: 'Blusa', precio: '$ 102.000'},
    {src: '/assets/shirt3.jpg', categoria: "blusa", nombre: 'Blusa', precio: '$ 102.000'},

    {src: '/assets/dress1.jpg', categoria: "vestido", nombre: 'Vestido', precio: '$ 140.000'},
    {src: '/assets/dress2.jpg', categoria: "vestido", nombre: 'Vestido', precio: '$ 140.000'}  
];
/*
const galeria = document.getElementById("galeria");

function mostrarImagenes(){
    galeria.innerHTML=''
    imagenes.forEach((img)=>{
        const image = document.createElement('img')
        image.src = img.src
        galeria.appendChild(image)
    }
)
}

function filtrar(categoria){
     galeria.innerHTML=''
    const imagenesFiltradas = imagenes.filter((img)=> img.categoria === categoria);
    imagenesFiltradas.forEach((img)=>{
        const image = document.createElement('img')
        image.src = img.src
        galeria.appendChild(image)
    });
}

mostrarImagenes();
*/
/*
function mostrarImagenes() {
    galeria.innerHTML = '';
    imagenes.forEach(img => {
        galeria.innerHTML += generarCard(img);
    });
}

function filtrar(categoria) {
    galeria.innerHTML = '';
    const imagenesFiltradas = imagenes.filter(img => img.categoria === categoria);
    imagenesFiltradas.forEach(img => {
        galeria.innerHTML += generarCard(img);
    });
}

function generarCard(img) {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="${img.src}" class="card-img-top" alt="${img.nombre}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between">
            <span>${img.nombre}</span>
            <span>${img.precio}</span>
          </h5>
          <p class="card-text text-muted">Calificación: ★★★★☆</p>
        </div>
      </div>
    </div>
    `;
}
*/

function mostrarImagenes() {
    galeria.innerHTML = ''; // Limpiar el contenido de la galería
    imagenes.forEach(img => {
        galeria.innerHTML += generarCard(img); // Añadir cada imagen a la galería
    });
}

function filtrar(categoria) {
    galeria.innerHTML = ''; // Limpiar la galería
    const imagenesFiltradas = imagenes.filter(img => img.categoria === categoria); // Filtrar por categoría
    imagenesFiltradas.forEach(img => {
        galeria.innerHTML += generarCard(img); // Añadir imágenes filtradas a la galería
    });
}

function generarCard(img) {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="${img.src}" class="card-img-top" alt="${img.nombre}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between">
            <span>${img.nombre}</span>
            <span>${img.precio}</span>
          </h5>
          <p class="card-text text-muted">Calificación: ★★★★☆</p>
        </div>
      </div>
    </div>
    `;
}

// Llamar a mostrarImagenes al cargar la página
window.onload = mostrarImagenes;

function formRegistro() {
  // Cambia la URL al formulario real
  window.location.href = "registro.html";
} 
  

document.getElementById('registerBtn').addEventListener('click', function () {
  document.getElementById('registerForm').requestSubmit(); // Simula envío
});

  // Botón que simula el envío del formulario
  document.getElementById('registerBtn').addEventListener('click', function () {
    document.getElementById('registerForm').requestSubmit();
  });

  // Evento submit del formulario
  document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Limpia errores anteriores
    document.getElementById('errorNombre').textContent = '';
    document.getElementById('errorEmail').textContent = '';
    document.getElementById('errorPassword').textContent = '';

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let valid = true;

    if (nombre === '') {
      document.getElementById('errorNombre').textContent = 'El nombre es obligatorio.';
      valid = false;
    }

    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      document.getElementById('errorEmail').textContent = 'Correo inválido.';
      valid = false;
    }

    if (password.length < 6) {
      document.getElementById('errorPassword').textContent = 'Mínimo 6 caracteres.';
      valid = false;
    }

    if (valid) {
      alert('¡Registro exitoso!\nBienvenido, ' + nombre + ' 👋');
      console.log('📥 Datos del formulario:');
      console.log('Nombre:', nombre);
      console.log('Email:', email);
      console.log('Contraseña:', password);
    }
  });
  document.getElementById('registerBtn').addEventListener('click', function () {
    window.location.href = 'registro.html'; // Cambia el nombre si tu archivo se llama distinto
  });
