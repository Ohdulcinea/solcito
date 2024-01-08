/*Variables*/
let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

class Item {
    constructor(nuevaTarea) {
      this.crearDiv(nuevaTarea);
    }
  
    crearDiv(nuevaTarea) {
      
      let inputItem = document.createElement("input");
      inputItem.type = "text";
      inputItem.classList.add("item-input");
      inputItem.disabled = true;
      inputItem.value = nuevaTarea;

      let divItem = document.createElement("div");
      divItem.classlist = "item";
      divItem.appendChild(inputItem);
      container.appendChild(divItem);
      
/*----------------BOTONES*--------------------------------*/

      let botonEditar = document.createElement("button");
      botonEditar.innerHTML = "<i class='fas fa-lock'></i>"; 
      botonEditar.classList.add("boton-editar"); 
      divItem.appendChild(botonEditar);
  
      const comportamiento= () =>{
        if (inputItem.disabled=== true) {
          inputItem.disabled = false
          botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
        } else {
          inputItem.disabled = true
          botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        }
      }
      botonEditar.addEventListener ("click", comportamiento)
        
  
      let botonRemover = document.createElement("button");
      botonRemover.innerHTML = "<i class='fas fa-trash'></i>"; 
      botonRemover.classList.add("boton-remover");
      divItem.appendChild(botonRemover);

        botonRemover.addEventListener("click", () => {
          divItem.remove(); 
        });
    }
}

const chequearInput =()=>{
  let nuevaTarea = inputPrincipal.value;
  //*let item = new Item(nuevaTarea);//* si lo pongo aca me agrega tarea en blacco

  if (nuevaTarea !== " ") {
    inputPrincipal.value = " "; 
    new Item(nuevaTarea);
  } else{
    alert ("Debe introducir una tarea! Deje de procrastinar")
  }
}

botonAgregar.addEventListener("click", chequearInput);
    