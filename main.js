let dataLocal = []
class lapiz{
    constructor({
        color="#BA4A00",
        dimension=20,
        borrador=false,
        material="Madera",
        marca="Big"}) 
        {

        this.color=color;
        this.dimension=dimension;
        this.borrador=borrador;
        this.material=material;
        this.marca=marca;
    }


}

window.addEventListener("load", function(e){
    let obj = new lapiz({material:"Goma"});
    console.log(obj);
    this.document.querySelector("#txtColor").value=obj.color  
    this.document.querySelector("#txtDimension").value=obj.dimension
    this.document.querySelector("#number").innerHTML=obj.dimension
    this.document.querySelector("#selectMarca").value=obj.marca;

    document.querySelector('input[name="borrador"]').values="true"

    this.document.querySelector("#number").innerHTML=obj.dimension
    this.document.querySelector("#number").innerHTML=obj.dimension
    
})

let inputRange = document.getElementById("txtDimension");
let spanNumber = document.getElementById("number");

inputRange.addEventListener("input", function () {
    let valor = inputRange.value;
    spanNumber.innerHTML = valor;
});



let formulario = document.querySelector("#formData");

formulario.addEventListener('submit', (e) =>{            
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    let myLapiz = new lapiz({
        color:data.color,
        dimension:data.dimension,
        borrador:data.borrador,
        material:data.madera,
        marca:data.marca
    });
    dataLocal.unshift(data)
    console.log(myLapiz);
})


function cargaData(data){  
    tabla = document.querySelector("#number")
    tabla_egresos.innerHTML="";
    tabla_ingresos.innerHTML="";
    data.forEach((val,id)=>{
        if(val.operacion== "+"){
            tabla_ingresos.insertAdjacentHTML('beforeend',`
            <tr>
                <td class="dato">${val.descripcion}</td>
                <td class="valor">$${val.valor}</td>
                <td><button class="buttonDrop" value="${id}" id=${id}><i class="fa-solid fa-trash"></i></button></td>
            </tr>`)
            
        }else{
            let porcentaje = ((val.valor*100)/ingresosValor)
            tabla_egresos.insertAdjacentHTML('beforeend',`
            <tr>
                <td class="dato">${val.descripcion}</td>
                <td class="valor">$${val.valor}</td>
                <td><span class="porcentaje">${porcentaje.toFixed(1)}%</span></td>
                <td><button class="buttonDrop" value="${id}" id="${id}"><i class="fa-solid fa-trash"></i></button></td>
            </tr>`)
        }
    })
    presupuesto_Disponible=ingresosValor-egresosValor;
    let valorr=presupuesto_Disponible
    const precioConFormato = valorr.toLocaleString('es-CO', {style: 'currency', currency: 'COP'});
    document.querySelector("#presuDispo").innerHTML = `${precioConFormato}`
    document.querySelector("#ingresosValor").innerHTML = `$ ${ingresosValor}` 
    document.querySelector("#egresosValor").innerHTML = `$ ${egresosValor}` 
    let porcentajeEgreso=0;

    if(ingresosValor>0){
    porcentajeEgreso = ((egresosValor*100)/ingresosValor);
    document.querySelector("#porcentajeEgreso").innerHTML= `${porcentajeEgreso.toFixed(1)}%`
    }else{
        document.querySelector("#porcentajeEgreso").innerHTML= 0;
    }
    
}