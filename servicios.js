    // Obtener referencia a los botones
    const masajesBtn = document.getElementById('masajes-btn');
    const corteBtn = document.getElementById('corte-btn');
    const citaForm = document.getElementById('cita-form');

    // Agregar event listeners a los botones
    masajesBtn.addEventListener('click', () => {
        mostrarFormularioCita('Masajes relajantes');
    });

    corteBtn.addEventListener('click', () => {
        mostrarFormularioCita('Corte y peinado');
    });

    // Función para mostrar el formulario de cita
    function mostrarFormularioCita(servicio) {
        // Ocultar los botones de solicitud
        masajesBtn.style.display = 'none';
        corteBtn.style.display = 'none';

        // Mostrar el formulario de cita
        citaForm.style.display = 'block';
        // Puedes preconfigurar algunos campos del formulario aquí, como el nombre del servicio
        document.getElementById('comentarios').value = `Quiero reservar una cita para el servicio de ${servicio}.`;
    }

    // Escuchar el envío del formulario
    document.getElementById('cita-formulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Aquí puedes enviar los datos del formulario a tu servidor usando AJAX o Fetch
        // Por ahora, solo mostraremos los datos en la consola
        const formData = new FormData(this);
        console.log('Datos del formulario:', Object.fromEntries(formData.entries()));

        // Aquí podrías agregar código para enviar los datos a tu servidor y manejar la respuesta
        // Por ejemplo, mostrar un mensaje de confirmación al usuario
        alert('¡Tu cita ha sido agendada!');

        // Limpiar el formulario después del envío
        this.reset();

        // Mostrar nuevamente los botones de solicitud
        masajesBtn.style.display = 'inline-block';
        corteBtn.style.display = 'inline-block';

        // Ocultar el formulario de cita
        citaForm.style.display = 'none';
    });