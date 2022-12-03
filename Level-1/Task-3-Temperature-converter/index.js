
function convert() {
    let btn = document.getElementById("btn")
    var value = document.getElementById("input").value
    let celcius = document.getElementById("cel")
    let faranheit = document.getElementById("faran")
    let out = document.getElementById("output")
    
    if (celcius.checked == true) {
        value = (value - 32) * 5/9
        document.getElementById("output").innerHTML = value + " C"
    } 
    else if (faranheit.checked == true){
        value = (value * 9/5)  + 32
        document.getElementById("output").innerHTML = value + " F"
    }

}