function playKey(keyId){
    var key = document.querySelector(keyId);

    if (!key || key.localName != "audio"){
        console.log("Elemento inválido");
        return ;
    }
    key.play();
}

const keysList = document.querySelectorAll(".tecla");

keysList.forEach(key => {
	const sound = key.classList[1];
    const keyId = `#som_${sound}`;
    key.onclick = function () { playKey(keyId) };

    key.onkeydown = function (event) {
        if (event.code == "Enter" || event.code == "Space")
         key.classList.add("ativa") ;
    };

    key.onkeyup = function (event) { 
        key.classList.remove("ativa");
    };
});
