class lapiz{

    #marca
    constructor({
        color="#198754",
        dimension=15,
        borrador="true",
        material="Madera",
        marca="Mongo"}) 
        {
        this.color=color;
        this.dimension=dimension;
        this.borrador=borrador;
        this.material=material;
        this.#marca=marca;
    }

    getColor(){
        return this.color
    }
    getDimension(){
        return this.dimension
    }
    getBorrador(){
        return this.borrador
    }
    getMaterial(){
        return this.material
    }
    getMarca(){
        return this.#marca
    }


}

let bodyTable = document.querySelector("#bodyTable");

addEventListener("DOMContentLoaded", function(e){   
    let obj = new lapiz({material:"Madera"});
    this.document.querySelector("#txtColor").value=obj.getColor()
    this.document.querySelector("#txtDimension").value=obj.getDimension()
    this.document.querySelector("#number").innerHTML=obj.getDimension()
    this.document.querySelector("#selectMarca").value=obj.getMarca();
    setRadio("borrador",obj.borrador);
    setRadio("material",obj.material);

    bodyTable.insertAdjacentHTML('beforeend',`
    <tr>
    <td style="background-color: ${obj.getColor()}"></td>
        <td>${obj.getDimension()}</td>
        <td>${obj.getMarca()}</td>
        <td>${obj.getBorrador()}</td>
        <td>${obj.getMaterial()}</td>
    </tr>`)

})

function setRadio(name,value){
    document.querySelectorAll(`input[name="${name}"]`).forEach(element =>{
        if(element.value ==value){
            element.checked=true;
        }
    });
}

let formulario = document.querySelector("#formData");

formulario.addEventListener('submit', (e) =>{            
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target))
    let myLapiz = new lapiz({
        color:data.color,
        dimension:data.dimension,
        borrador:data.borrador,
        material:data.material,
        marca:data.marca
    });
    bodyTable.insertAdjacentHTML('beforeend',`
    <tr>
        <td style="background-color: ${myLapiz.getColor()}"></td>
        <td>${myLapiz.getDimension()}</td>
        <td>${myLapiz.getMarca()}</td>
        <td>${myLapiz.getBorrador()}</td>
        <td>${myLapiz.getMaterial()}</td>
    </tr>`)
})

let inputRange = document.getElementById("txtDimension");
let spanNumber = document.getElementById("number");

inputRange.addEventListener("input", function () {
    let valor = inputRange.value;
    spanNumber.innerHTML = valor;
});

