class lapiz{
    #marca
    constructor({
        color="#06EC6B",
        dimension=20,
        borrador=true,
        material="Madera",
        marca="Golden"}) 
        {

        this.color=color;
        this.dimension=dimension;
        this.borrador=borrador;
        this.material=material;
        this.#marca=marca;
    }
}

let obj = new lapiz({material:"Goma"});
let color = document.querySelector(`[name="color"]`);

window.addEventListener("load", function(e){
    obj = new lapiz({})
    color.value = obj.color
})

let inputRange = document.getElementById("dimension");
let spanNumber = document.getElementById("number");

inputRange.addEventListener("input", function () {
    let valor = inputRange.value;
    spanNumber.innerHTML = valor;
});