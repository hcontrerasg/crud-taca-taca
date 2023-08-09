
let listaParticipantes =[];
const objparticipante = {
    id:""
    ,nombre: ""
    ,puesto: ""
    ,pais: ""
};

let editando = false;

const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const puestoInput = document.querySelector("#puesto");
const paisInput = document.querySelector("#pais");
const btnAgregar = document.querySelector("#btnAgregar");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault();

    //resto del codigo de validación

    if (nombreInput.value ===""|| puestoInput.value === ""||paisInput.value===""){
        alert("Todos los campos son obligatorios.");
        return;
}

if (editando) {
    editarParticipante ();
    editando =false;
} else {
    objparticipante.id = Date.now();
    objparticipante.nombre = nombreInput.value;
    objparticipante.puesto = puestoInput.value;
    objparticipante.pais = paisInput.value;

    agregarParticipante();

    }
}

function agregarParticipante() {
    listaParticipantes.push({...objparticipante
    });

    mostrarParticipantes();

    formulario.reset();

    limpiarObjeto();
}

function limpiarObjeto() {
    objparticipante.id="";
    objparticipante.nombre="";
    objparticipante.puesto="";
    objparticipante.pais="";
}

function mostrarParticipantes() {
    limpiarHTML();

    const divParticipantes = document.querySelector(".div-participantes");

listaParticipantes.forEach(participante => {
    const {
        id, nombre, puesto,pais
    } = participante;

    const parrafo = document.createElement ("p");
    parrafo.textContent = `${id} - ${nombre} - ${puesto} - ${pais} -`; 
    parrafo.dataset.id =id;

    const editarBoton =document.createElement("button");
    editarBoton.onclick = () => cargarParticipante(participante);
    editarBoton.textContent ="Editar";
    editarBoton.classList.add("btn","btn-editar");
    parrafo.append(editarBoton);

    const eliminarBoton =document.createElement("button");
    editarBoton.onclick = () => cargarParticipante(participante);
    eliminarBoton.textContent ="Eliminar";
    eliminarBoton.classList.add("btn","btn-eliminar");
    parrafo.append(eliminarBoton);

    const hr = document.createElement("hr");

    divParticipantes.appendChild(parrafo);
    divParticipantes.appendChild(hr);

});
}


function cargarParticipante(participante){
const {id, nombre, puesto,pais} = participante;

nombreInput.value =nombre;
puestoInput.value =puesto;
pais.value=pais;

objEmpleado.id =id;

formulario.querySelector(`button[type="submit"]`).textContent = "actualizar";

editando = true;
}

function editarParticipante () {
    objparticipante.nombre=nombreInput.value;
    objparticipante.puesto=puestoInput.value;
    objparticipante.pais=paisInput.value;

    listaParticipantes.map( empleado => {
    
        if (participante.id===objparticipante.id){
            participante.id= objparticipante.id;
            participante.nombre =objparticipante.nombre;
            participante.puesto = objparticipante.puesto;
            participante.pais = objparticipante.pais;
        }
    })
}

    function limpiarHTML(){
    const divEmpleados = document.querySelector(".div-participantes");
    while(listaParticipantes.firstchild) {
        listaParticipantes.removeChild(divEmpleados.firstchild);

    }
}


