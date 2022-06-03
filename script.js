
    var seg = 0
    var min = 0
    var hr = 0

    function doisdig(digito){
        if(digito < 10)
        return("0" + digito)

        else{
            return(digito)
        }
    }

    function iniciar() {
        relogio()
        intervalo = setInterval(relogio, 1000)
    }

    function pausar(){
        clearInterval(intervalo)
    }

    function resetar(){
        clearInterval(intervalo)
        seg=0
        min=0
        hr=0
document.getElementById("relogio").innerText = "00:00:00"

    }

    function relogio() {
        seg++
        if (seg == 60) {
            seg = 0
            min++
        }

        if (min == 60) {
            min = 0
            hr++
        }
        document.getElementById("relogio").innerText = doisdig(hr) + ":" + doisdig(min) + ":" + doisdig(seg);
    }




