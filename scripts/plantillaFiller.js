class plantillaFiller {
  constructor() {
      // En el constructor de la clase plantillaFiller

      // Se intenta recuperar datos de la persona almacenados en el localStorage
      this.personaDato = JSON.parse(localStorage.getItem('personaDato'));

      // Si se encontraron datos de la persona en el localStorage
      if (this.personaDato) {
          // Llama al método mostrarDatosPersona y le pasa los datos de la persona
          this.mostrarDatosPersona(this.personaDato);
      } else {
          // Si no se encontraron datos de la persona, muestra un mensaje de error en la consola
          console.error('No se encontraron datos de la persona.');
      }

   // Obtiene una referencia al botón con el ID 'btnPrint'
   const btnPrint = document.getElementById('btnPrint');

   // Si se encontró el botón
   if (btnPrint) {
       // Agrega un evento 'click' al botón que llama a la función imprimirPDF() cuando se hace clic en él
       btnPrint.addEventListener('click', () => {
           this.imprimirPDF();
       });
   }
}

  // Método para mostrar los datos de la persona en la página web
  mostrarDatosPersona(personaDato) {
      // Obtiene una referencia al elemento con el ID 'foto'
      const fotoElement = document.getElementById('foto');

      // Si hay una URL de foto en los datos de la persona y se encontró el elemento 'foto'
      if (personaDato.foto && fotoElement) {
          // Establece la fuente de la imagen 'foto' con la URL de la foto
          fotoElement.src = personaDato.foto;
      }

      // Obtiene referencias a elementos HTML y actualiza su contenido con los datos de la persona
      document.getElementById('nombreApellido').textContent = `${personaDato.nombre} ${personaDato.apellido}`;
      document.getElementById('especializacion').textContent = personaDato.especializacion;
      document.getElementById('fechaNacimiento').textContent = `Fecha de Nacimiento: ${personaDato.fechaNacimiento}`;
      document.getElementById('descripcion').textContent = personaDato.descripcion;
      document.getElementById('telefono').textContent = `Teléfono: ${personaDato.telefono}`;
      document.getElementById('mail').textContent = `Correo Electrónico: ${personaDato.mail}`;
      document.getElementById('link').href = personaDato.link;

      // Obtiene referencias a listas y agrega elementos de la educación, experiencia y habilidades de la persona
      const educacionList = document.getElementById('educacionList');
      educacionList.innerHTML = ''; // Borra el contenido existente
  
      const experienciaContainer = document.getElementById('experienciaContainer');
      experienciaContainer.innerHTML = ''; // Borra el contenido existente
  
      const habilidadesList = document.getElementById('habilidadesList');
      habilidadesList.innerHTML = ''; 
     
    // Agrega elementos de educación a la lista
    for (const educacionItem of personaDato.educacion) {
      const listItem = document.createElement('li');
      listItem.textContent = educacionItem;
      educacionList.appendChild(listItem);
    }

    // Agrega elementos de experiencia a la lista
    for (const experienciaItem of personaDato.experiencia) {
      const listItem = document.createElement('li');
      listItem.textContent = experienciaItem;
      experienciaContainer.appendChild(listItem);
    }

    // Agrega elementos de habilidades a la lista
    for (const habilidadesItem of personaDato.habilidades) {
      const listItem = document.createElement('li');
      listItem.textContent = habilidadesItem;
      habilidadesList.appendChild(listItem);
    }
  }
  imprimirPDF() {
    jQuery('#content').printThis();
  }
  }


// Crear una instancia de la clase plantillaFiller cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
  new plantillaFiller();
});
  
  document.addEventListener('DOMContentLoaded', () => {
    new plantillaFiller();
  });