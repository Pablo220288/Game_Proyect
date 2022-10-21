//Loader
window.addEventListener('load',() =>{
    document.getElementById('loader').classList.toggle('loader-hide')
});

//Contadores
addEventListener('DOMContentLoaded',() => {
    const contadores = document.querySelectorAll('.caract-num');
    const velocidad = 1000;

    let animarContadores = () => {
        for(const contador of contadores){
            const actualizarContador = () => {
                let cantidadMax = +contador.dataset.cantidadTotal;
                let valorActual = +contador.innerText;
                let incremento = cantidadMax / velocidad;

                if(valorActual < cantidadMax){
                    contador.innerText = Math.ceil(valorActual + incremento)
                    setTimeout(actualizarContador,5)
                }else{
                    contador.innetText = cantidadMax
                }
            }
            actualizarContador()
        }
    }
    
    let mostrar = elementos => {
        elementos.forEach(elemento => {
           if(elemento.isIntersecting){
            setTimeout(animarContadores,300)
           }
        });
    }

    const observer = new IntersectionObserver(mostrar, {
        threshold: 0.75
    } )

    const elementosHTML = document.querySelectorAll('.caract-capacitacion')
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML)
        console.log(elementosHTML);
    })
})