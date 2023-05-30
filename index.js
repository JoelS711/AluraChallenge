/*const encriptar = document.getElementById('encriptar')
const desencriptar = document.getElementById('desencriptar')
const textArea = document.getElementById('textEncryp')

let arrayFrase = []


encriptar.addEventListener('click',()=>{
    document.getElementById('figure').classList.add('hide')
    for(letra of textArea.value){
        switch(letra){
            case 'a':
                arrayFrase.push('ai')
                break;
            case 'e':
                arrayFrase.push('enter')
                break;
            case 'i':
                arrayFrase.push('imes')
                break;
            case 'o':
                arrayFrase.push('ober')
                break;
            case 'u':
                arrayFrase.push('ufat')
                break;
            default:
                arrayFrase.push(letra)
                break;

        }
    }
    let palabraEncriptada = arrayFrase.join().replace(/,/g,'')
    document.getElementById('answer').innerText = palabraEncriptada

    
})


desencriptar.addEventListener('click',()=>{
    document.getElementById('figure').classList.add('hide')
    for(letra of textArea.value){
        switch(letra){
            case 'ai':
                arrayFrase.push('a')
                break;
            case 'enter':
                arrayFrase.push('e')
                break;
            case 'imes':
                arrayFrase.push('i')
                break;
            case 'ober':
                arrayFrase.push('o')
                break;
            case 'ufat':
                arrayFrase.push('u')
                break;
            default:
                arrayFrase.push(letra)
                break;

        }
    }
    let palabraDesencriptada = arrayFrase.join().replace(/,/g,'')
    document.getElementById('answer').innerText = palabraDesencriptada

    
})*/

//senterrgimesoberventernenterzufatenterlai



const encrip = document.getElementById('encriptar')
const desencrip = document.getElementById('desencriptar')
const copy = document.getElementById('copiar')
const answer = document.getElementById('answer')
const textArea = document.getElementById('textEncryp')
const mostrar = document.getElementById('mostrar')


encrip.addEventListener("click", ()=>{
    const textEncryp = encriptar(textArea.value)
    mostrar.value = textEncryp
    textArea.value = "";
    mostrar.innerText = textEncryp
    answer.style.justifyContent = "space-between"
    copy.style.visibility = "visible"
    console.log(textEncryp)
} );




function encriptar(stringEncriptado){
    let letter = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i=0; i < letter.length; i++){
        if(stringEncriptado.includes(letter[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(letter[i][0], letter[i][1])
        }
    }
    return stringEncriptado;
}


desencrip.addEventListener("click", ()=>{
    const textDesencryp = desencriptar(textArea.value)
    mostrar.value = textDesencryp
    textArea.value = "";
    mostrar.innerText = textDesencryp
    answer.style.justifyContent = "space-between"
    copy.style.visibility = "visible"
    console.log(textDesencryp)
} );




function desencriptar(stringDesencriptado){
    let letter = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i=0; i < letter.length; i++){
        if(stringDesencriptado.includes(letter[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(letter[i][1], letter[i][0])
        }
    }
    return stringDesencriptado;
}


copy.addEventListener("click", () => {
    const texto = mostrar.value;
    
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log("Texto copiado: " + texto);
      })
      .catch((error) => {
        console.error("Error al copiar el texto: " + error);
      });
  });