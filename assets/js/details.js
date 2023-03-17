// SE LLAMA A LA API
const UrlApi = 'https://mindhub-xj03.onrender.com/api/amazing'
let fichas = [];

async function traerDatos() {
try{
  const response = await fetch(UrlApi)
  const data = await response.json()
  fichas = data.events;
  // SE VINCULAN DINÁMICAMENTE LOS BOTONES CON LOS ID MEDIANTE PARAMS
    const id = new URLSearchParams(location.search).get("_id")
    const evento = fichas.find(elemento => elemento._id == id)
    console.log(evento)

    function mostrarTarjeta(idContainer){ 
        const container = document.getElementById(idContainer)
        let tarjeta = document.createElement('div');
                tarjeta.innerHTML = `<div class="card mb-3" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-4">
                                            <img src="${evento.image}" class="card-img-top" alt="${evento.name}" style="width: 100; height: 30vw; object-fit: cover">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                            <h5 class="card-title">${evento.name}</h5>
                                            <p class="card-text mt-1" style="text-align: center"><big>${evento.description}</big></p>
                                            <p class="card-text mb-0"><small class="text-muted">Date: ${evento.date}</small></p>
                                            <p class="card-text mb-0"><small class="text-muted">Category: ${evento.category}</small></p>
                                            <p class="card-text mb-0"><small class="text-muted">Place: ${evento.place}</small></p>
                                            <p class="card-text mb-0"><small class="text-muted">${evento.assistance > 0 ? "Attendance: " + evento.assistance + " people." : ""}</small></p>
                                            <p class="card-text mb-0"><small class="text-muted">${evento.estimate > 0 ? "Estimate: " + evento.estimate + " people." : ""}</small></p>
                                            <p class="card-text mb-0"><small class="text-muted">${evento.capacity > 0 ? "Capacity: " + evento.capacity + " people." : ""}</small></p>
                                            <p class="card-text mb-0"><small class="text-muted">Price: $${evento.price}</small></p>
                                        </div>
                                        <div class="btn-holder">
                                             <input type="button"  class="btn btn-danger me-5 position-relative mb-3" value="Back" onclick="history.back()" style="float:right; bottom: 0">
                                         </div>
                                        </div>
                                    </div>
                                </div>`
    container.appendChild(tarjeta)
    console.log(container)
}
mostrarTarjeta("detalle")
}
catch(err){
    cuerpo.innerHTML =  '<div class="w-100"><h5> Server error, please reload.</h5></div>' 
}
}

traerDatos();