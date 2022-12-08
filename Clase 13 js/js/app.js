/*Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicándole nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

    • aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar mas contactos indicar por pantalla.
    • existeContacto(Conctacto): indica si el contacto pasado existe o no.
    • listarContactos(): Lista toda la agenda
    • buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
    • eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
    • agendaLlena(): indica si la agenda está llena.
    • huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades. */
class schedule{
  constructor(){
    this.agenda = [];
  }
  addContact(){
    if (this.agenda.length <= 9) {
      const newContact = {
        contacto: prompt('Ingresa nombre y apellido'),
        numero: prompt('Ingrese su numero de telefono')
      };
      this.agenda.push(newContact);
    } else {
      alert('La agenda esta llena, elimina contactos para poder seguir agregando');
    }
  }
  isExist(){
    const userInput = prompt('Ingresa un numero o un nombre').toLowerCase();
    let existFlag = true;
    if (userInput !== null || userInput !== '') {
      for (let i = 0; i < this.agenda.length; i++) {
        if (this.agenda[i].contacto.toLowerCase() == userInput || this.agenda[i].numero == userInput) {
          alert("El contacto SI existe.");
          existFlag = false;
        }
      }
      existFlag && alert('El contacto no existe');
      // if (existFlag) {
      //   alert('El contacto no existe');
      // }
    } else {
      alert('No ingresaste nada');
    }
  }
  listSchedule(){
    this.agenda.map((contact, key) => {
      console.group(key + 1);
      console.log(`Nombre: ${contact.contacto}`);
      console.log(`Numero: ${contact.numero}`);
      console.groupEnd();
    })
  }
  findByName(){
    const userInput = prompt('Ingresa un nombre').toLowerCase();
    const result = this.agenda.filter(contact => contact.contacto.toLowerCase() == userInput);
    if (result.length !== 0) {
      console.log(`Se ha encontrado una coincidencia. Nombre: ${result[0].contacto}, Numero: ${result[0].numero}`);
    } else {
      alert('No se encontro la persona');
    }
  }
  deleteContact(){
    const userInput = prompt('Ingresa un nombre').toLowerCase();
    let existFlag = true;
    for (let i = 0; i < this.agenda.length; i++) {
      if (this.agenda[i].contacto.toLowerCase() == userInput || this.agenda[i].numero == userInput) {
        alert(`El siguiente contacto se va a eliminar.\n
          Nombre: ${this.agenda[i].contacto}. \n
          Numero: ${this.agenda[i].numero}. \n
        `);
        this.agenda.splice([i], 1);
        existFlag = false;
      }
    }
    existFlag && alert('El contacto no existe');
  }
  fullContacs(){
    if (this.agenda.length == 10) {
      alert('No hay mas espacio en la agenda');
    } else {
      alert('Tienes espacio disponible');
    }
  }
  remainingContact(){
    let emptySpaces = 10 - this.agenda.length;
    alert(`Tienes ${emptySpaces} espacios vacios`);
  }
}

const agendaPersonal = new schedule();

