// Define una clase Persona con un constructor que inicializa sus propiedades.
class Persona {
  constructor(
    foto,
    nombre,
    apellido,
    fechaNacimiento,
    descripcion,
    telefono,
    mail,
    link,
    educacion,
    experiencia,
    habilidades,
    especializacion
  ) {
    // Asigna los valores pasados como argumentos a las propiedades de la instancia de Persona.
    this.foto = foto;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.descripcion = descripcion;
    this.telefono = telefono;
    this.mail = mail;
    this.link = link;
    // Inicializa educacion, experiencia y habilidades como arrays vacíos si no se proporcionan.
    this.educacion = educacion || [];
    this.experiencia = experiencia || [];
    // Convierte habilidades en un array si no lo es.
    this.habilidades = Array.isArray(habilidades) ? habilidades : [];
    this.especializacion = especializacion;
  }
}

// Espera a que el contenido de la página HTML esté completamente cargado.
document.addEventListener("DOMContentLoaded", function () {
  // Obtiene una referencia al formulario con el id "personaForm".
  const formulario = document.getElementById("personaForm");
  // Obtiene una referencia al elemento de entrada de tipo archivo con el id "foto".
  const foto = document.getElementById("foto");

  // Agrega un evento change al elemento de entrada de tipo archivo para manejar la selección de una imagen.
  foto.addEventListener("change", function () {
    const selectedFile = foto.files[0];
    if (selectedFile) {
      // Crea un lector de archivos para cargar la imagen seleccionada.
      const reader = new FileReader();
      reader.onload = function (event) {
        // Muestra la imagen cargada en un elemento con id "foto".
        const imgUrl = event.target.result;
        document.getElementById('foto').src = imgUrl; 
      };
      reader.readAsDataURL(selectedFile);
    }
  });

  // Agrega un evento submit al formulario para manejar el envío del formulario.
  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Previene el envío del formulario por defecto.

    // Obtiene los valores de los campos del formulario.
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const link = document.getElementById("link").value.trim();
    const educacionInput = document.getElementById("educacion").value.trim();
    const experienciaInput = document.getElementById("experiencia").value.trim();
    const habilidadesInput = document.getElementById("habilidades").value.trim();
    const especializacion = document.getElementById("especializacion").value.trim();

    // Realiza validaciones de los campos obligatorios.
    if (!nombre || !apellido || !fechaNacimiento || !mail) {
      alert("Por favor, complete los campos obligatorios.");
      return;
    }

    // Valida que la dirección de correo electrónico tenga un formato válido.
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(mail)) {
      alert("Por favor, ingrese una dirección de correo electrónico válida.");
      return;
    }

    // Divide las cadenas de educación, experiencia y habilidades en arrays separados.
    const educacion = educacionInput ? educacionInput.split('\n').filter(item => item.trim() !== '') : [];
    const experiencia = experienciaInput ? experienciaInput.split('\n').filter(item => item.trim() !== '') : [];
    const habilidades = habilidadesInput ? habilidadesInput.split('\n').filter(item => item.trim() !== '') : [];

    // Crea una instancia de la clase Persona con los datos del formulario.
    const persona = new Persona(
      foto.src,
      nombre,
      apellido,
      fechaNacimiento,
      descripcion,
      telefono,
      mail,
      link,
      educacion,
      experiencia,
      habilidades,
      especializacion
    );

    try {
      // Almacena la instancia de Persona en el almacenamiento local (localStorage).
      localStorage.setItem('personaDato', JSON.stringify(persona));
      console.log("Objeto Persona:", persona);
      // Redirige a otra página llamada "selector.html" después de guardar los datos.
      window.location.href = "selector.html";
    } catch (error) {
      console.error("Error al guardar los datos en localStorage:", error);
      alert('Error en la creación del currículum');
    }
  });
});