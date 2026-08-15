const btn = document.getElementsByClassName("socialbtn")
const hoversound = document.getElementById("hoversound")
const clicksound = document.getElementById("clicksound")



function openmodal(){
    clicksound.play()
    const box1 = document.querySelector('.aboutme')
    const box = document.querySelector('.box')
    box.classList.toggle("open")
    if(box1.classList.contains("open")){
        box1.classList.remove("open")
        {document.getElementById('aboutme').innerHTML = "About Me"}
    }
    if(box.classList.contains("open")){
        document.getElementById('mysocial').innerHTML = "Close"
    }
    else{document.getElementById('mysocial').innerHTML = "See my social media"}

}

function openmodal1(){
    clicksound.play()
    const box = document.querySelector('.box')
    const box1 = document.querySelector('.aboutme')
    box1.classList.toggle("open")
    if(box.classList.contains("open")){
        box.classList.remove("open")
    {document.getElementById('mysocial').innerHTML = "See my social media"}
    }

    if(box1.classList.contains("open")){
        document.getElementById('aboutme').innerHTML = "Close"
    }
    else{document.getElementById('aboutme').innerHTML = "About Me"}

}