const personaje = document.getElementById('personaje')

const suelo = document.getElementById('suelo')
let valor = 0
let valor2 = 0

document.addEventListener("keyup", (event) => {
    if (event.key == "ArrowLeft"){

        personaje.classList.remove('personajeRunLeft')
        personaje.classList.remove('personajeRunRight')
        personaje.classList.remove('personajeStopRight')
        personaje.classList.add('personajeStopLeft')
        

    } else if (event.key == "ArrowUp"){

        personaje.classList.remove('personajeFlyRight')
        personaje.classList.remove('personajeFlyLeft')

    } else if (event.key == "ArrowRight"){

        personaje.classList.remove('personajeRunLeft')
        personaje.classList.remove('personajeRunRight')
        personaje.classList.remove('personajeStopLeft')
        personaje.classList.add('personajeStopRight')

    } else if (event.key == "ArrowDown"){
        console.log();("Down key");
    } else if (event.code == "Space"){
        
        if( personaje.classList.contains('personajeStopRight') || personaje.classList.contains('personajeRunRight')){
            personaje.classList.add('personajeJumpRight')
        }else {
            personaje.classList.add('personajeJumpLeft')
        }

        personaje.addEventListener('animationend', () => {
            personaje.classList.remove('personajeJumpRight')
            personaje.classList.remove('personajeJumpLeft')
        })
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowLeft"){

        personaje.classList.remove('personajeStopLeft')
        personaje.classList.remove('personajeStopRight')
        personaje.classList.remove('personajeRunRight')
        personaje.classList.add('personajeRunLeft')
        
        valor--

        suelo.style.marginLeft = valor  * -10 + 'px';

    } else if (event.key == "ArrowUp"){

        if(personaje.classList.contains('personajeStopRight') ||personaje.classList.contains('personajeRunRight')){
            setTimeout(personaje.classList.add('personajeFlyRight'),10000)
        }else{
            setTimeout(personaje.classList.add('personajeFlyLeft'),10000)
        }

    } else if (event.key == "ArrowRight"){

        personaje.classList.remove('personajeStopLeft')
        personaje.classList.remove('personajeStopRight')
        personaje.classList.remove('personajeRunLeft')
        personaje.classList.add('personajeRunRight')

        valor++

        suelo.style.marginLeft = valor  * -10 + 'px';

    } else if (event.key == "ArrowDown"){
        console.log();("Down key");
    } else if (event.code == "Space"){

        if( personaje.classList.contains('personajeStopRight') || personaje.classList.contains('personajeRunRight')){
            personaje.classList.add('personajeJumpRight')
        }else {
            personaje.classList.add('personajeJumpLeft')
        }

        personaje.addEventListener('animationend', () => {
            personaje.classList.remove('personajeJumpRight')
            personaje.classList.remove('personajeJumpLeft')
        })
    }

});

let velEcenario = 1280/3
let gameVel = 1

/* let desplazamiento = () => {
    console.log(velEcenario * deltaTime * gameVel); 
}
desplazamiento() */
console.log(deltaTime);