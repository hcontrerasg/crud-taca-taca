
let listaParticipantes =[];
const objparticipante = {
    id:""
    ,nombre: ""
    ,puesto: ""
    ,pais: ""
};

let editando = false;

const formulario = document.querySelector ("#formulario");
const nombreInput = document.querySelector ("#nombre");
const puestoInput = document.querySelector ("#puesto");
const paisInput = document.querySelector ("#pais");
const btnAgregar = document.querySelector ("#btnAgregar");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario (e) {
    e.preventDefault();

    //resto del codigo de validación

    if (nombreInput.value ===""|| puestoInput.value === ""||paisInput.value===""){
        alert("Todos los campos son obligatorios.");
        return;
}

if (editando) {
    //editarParticipante ();
    editando =false;
} else {
    objparticipante.id = Date.now();
    objParticipante.nombre = nombreInput.value;
    objParticipante.puesto = puestoInput.value;
    objParticipante.pais = paisInput.value;

    agregarParticipante();

    }
}

function agregarParticipante() {
    listaParticipantes.push({...objParticipante
    });

    mostrarParticipantes();
}

function mostrarParticipantes() {
    const divParticipantes = document.querySelector(".div-participantes")

listaParticipantes.forEach (participante => {
    const {
        id, nombre, puesto,pais
    } = participante;

    const parrafo = document.createElement ("p");
    parrafo.textContent = `${id} - ${nombre} - ${puesto} - ${pais} -`; 
    parrafo.dataset.id =id;

    const editarBoton =document.createElement("button");
    //editarBoton.onclick = () => cargarParticipante(participante);
    editarBoton.textContent ="Editar";
    editarBoton.classList.add("btn","btn-editar");
    parrafo.appendChild(editarBoton);

    const eliminarBoton =document.createElement("button");
    //editarBoton.onclick = () => cargarParticipante(participante);
    eliminarBoton.textContent ="Eliminar";
    eliminarBoton.classList.add("btn","btn-eliminar");
    parrafo.appendChild(eliminarBoton);

    const hr = document.createElement("hr");

    divParticipantes.appendChild(parrafo);
    divParticipantes.appendChild(hr);

});
}