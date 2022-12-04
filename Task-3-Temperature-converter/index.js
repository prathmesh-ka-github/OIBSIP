
function convert() {
    var value = document.getElementById("input").value
    let celcius = document.getElementById("cel")
    let faranheit = document.getElementById("faran")
    
    if (celcius.checked == true) {
        value = (value - 32) * 5/9
        document.getElementById("output").innerHTML = value + " °C"
    } 
    else if (faranheit.checked == true){
        value = (value * 9/5)  + 32
        document.getElementById("output").innerHTML = value + " °F"
    }
}