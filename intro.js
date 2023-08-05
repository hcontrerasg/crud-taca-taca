
let listaParticipantes =[];

const objparticipante ={
    id:"",
    nombre: "",
    puesto: ""
}

let editando = false;

const formulario = document.querySelector ("#formulario");
const nombreImput = document.querySelector ("#nombre")
const equipoImput = document.querySelector ("#equipo")
const paisImput = document.querySelector ("#pais")
const btnAgregar = document.querySelector ("#btnAgregar")

formulario.addEventListener("submit", validarFormulario)

function validarFormaulario (e){
    e.preventdefault();

    if (nombreImput.value ===""|| puestoImput.value === ""){
        alert("Todos los campos son obligatorios.");
        return;
}

if (editando){
    editarParticipando
    editando =false;
} else {
    objparticipante.id = date.now();
    objParticipante.nombre = nombreImput.value;
    objParticipante.equipo = equipoImput.value;
    objParticipante.pais = paisImput.value;

    agregarParticipante();

}
}

function agregarParticipante (){
    listaParticipantes.push({...objParticipante});

    mostrarParticipantes ();
}

function mostrarParticipantes ();
const divParticipantes = document.querySelector(".div-participantes")

listaParticipantes.forEach (participante =>{
    const { id, nombre, equipos,pais} = participante;

    const parrafo = document.createElement ("p");
    parrafo.textContent = "${id} - ${nombre} - ${equipo} - ${pais} - "; 

});
