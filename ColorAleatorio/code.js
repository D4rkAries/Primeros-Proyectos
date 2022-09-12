const botonGenerar = document.getElementById('generar-Color')
const nombreColor = document.getElementById('nombre-Color')
const fondoSecundario = document.getElementById('div-Fondo')

function generarColorExadecimal(){
    let color = (Math.random() * 0xffffff * 1000000).toString(16)

    return `#${color.slice(0 , 6)  }`
}


function iniciar(){
    let ColorCode = generarColorExadecimal()
    let ntcMatch  = ntc.name(ColorCode)
    nombreColor.innerHTML = ntcMatch[1]
    document.body.style.backgroundColor = ntcMatch[0]
    fondoSecundario.style.backgroundColor = ColorCode
}

botonGenerar.addEventListener('click', iniciar)

