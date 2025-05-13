
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('registerForm').addEventListener('submit', function (e) {
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
      })});

  

