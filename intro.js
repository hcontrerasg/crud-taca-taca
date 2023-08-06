
let listaParticipantes =[];

const objparticipante ={
    id:"",
    nombre: "",
    puesto: "",
    pais:""
}

let editando = false;

const formulario = document.querySelector ("#formulario");
const nombreInput = document.querySelector ("#nombre");
const equipoInput = document.querySelector ("#equipo");
const paisInput = document.querySelector ("#pais");
const btnAgregar = document.querySelector ("#btnAgregar");

formulario.addEventListener("submit", validarFormulario);

function validarFormaulario (e){
    e.preventdefault();

    if (nombreInput.value ===""|| equipoInput.value === ""||paisInput.value===""){
        alert("Todos los campos son obligatorios.");
        return;
}

if (editando){
    //editarParticipante ();
    editando =false;
} else {
    objparticipante.id = date.now();
    objParticipante.nombre = nombreInput.value;
    objParticipante.equipo = equipoInput.value;
    objParticipante.pais = paisInput.value;

    agregarParticipante();

}
}

function agregarParticipante (){
    listaParticipantes.push({...objParticipante});

    mostrarParticipantes ();
}

function mostrarParticipantes (){
    const divParticipantes = document.querySelector(".div-participantes")

listaParticipantes.forEach (participante =>{
    const {id, nombre, equipo,pais} = participante;

    const parrafo = document.createElement ("p");
    parrafo.textContent = "${id} - ${nombre} - ${equipo} - ${pais} - "; 
    parrafo.dataset =id;

    const editarBoton =document.createElement("button");
    //editarBoton.onclick = () => cargarParticipante(participante);
    editarBoton.textContent ="Editar";
    editarBoton.classList.add("btn","btn-editar");
    parrafo.append(editarBoton);

    const eliminarBoton =document.createElement("button");
    //editarBoton.onclick = () => cargarParticipante(participante);
    eliminarBoton.textContent ="Eliminar";
    eliminarBoton.classList.add("btn","btn-eliminar");
    parrafo.append(eliminarBoton);

    const hr = document.createElement("hr");

    divParticipantes.appendChild(parrafo);
    divParticipantes.appendChild(hr);

}) ;