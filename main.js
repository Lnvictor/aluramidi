function playTecla(tecla_name){
    tecla_name = `#som_tecla_${tecla_name}`
    console.log(tecla_name)
    var pom = document.querySelector(tecla_name)
    pom.play()
}