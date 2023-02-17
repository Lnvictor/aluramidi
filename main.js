function playKey(keyId){
    var key = document.querySelector(keyId)
    key.play()
}

const keysList = document.querySelectorAll('.tecla')

keysList.forEach(key => {
	const sound = key.classList[1];
    const keyId = `#som_${sound}`;
    key.onclick = function () { playKey(keyId) }

    key.onkeydown = function (event) {
        if (event.code == "Enter")
         key.classList.add('ativa') 
    }

    key.onkeyup = function (event) { 
        if (event.code == "Enter")
            key.classList.remove('ativa') 
    }
});
