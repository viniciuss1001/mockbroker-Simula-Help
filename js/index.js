//declaração da quantidade de simulados feitos e quantos ainda faltam
let qttSas = 0
let totSas = 5

let qttBernoulli = 0
let totBernoulli = 5

let qttPoliedro = 0
let totPoliedro = 2

let qttSomos = 0
let totSomos = 3

let qttEnem = 0
let totEnem = 20


//funções para a contagem dos simulados já feitos


    function addSas(){
        const cardSas = document.getElementById("cardSas")
        const cardSasImg = document.getElementById("cardSasImg")
        const linkSas = document.getElementById("sas")
        qttSas += 1

        if(qttSas == totSas){
            cardSasImg.style.display = "none"
            cardSas.innerHTML = `Parabéns, você fez todos os simulados!`
            cardSas.style.color = "white"
            cardSas.style.background = "#023E73"
            cardSas.style.cursor = "default"
            linkSas.remove("link")
        }console.log(qttSas)
    }
    function addBernoulli(){
        const cardBernoulli = document.getElementById("cardBernoulli")
        const cardBerImg = document.getElementById("bernImg")
        const linkBernoulli = document.getElementById("bernoulli")

        qttBernoulli +=1

        if(qttBernoulli == totBernoulli){
            cardBerImg.style.display = "none"
            linkBernoulli.remove
            cardBernoulli.innerHTML = `Parabéns, você concluíu todos os simulados`
            cardBernoulli.style.color = "white"
            cardBernoulli.style.background = "#12A68B"
        }
        console.log(qttBernoulli)
    }
    function addPoliedro(){
        const cardPoliedro = document.getElementById("cardPoliedro")
        const imgPoliedro = document.getElementById("poliedroImg")
        const linkPoliedro = document.getElementById("linkPoliedro")

        qttPoliedro +=1

        if(qttPoliedro == totPoliedro){
            cardPoliedro.innerHTML = `Parabéns, você concluíu todos os simulados!`
            cardPoliedro.style.color = "#ffff"
            cardPoliedro.style.background = "#F2275D"
            linkPoliedro.remove
            imgPoliedro.style.display = "none"
        }
        console.log(qttPoliedro)
    }
    function addSomos(){
        const cardSomos = document.getElementById("cardSomos")
        const linkSomos = document.getElementById("linkSomos")
        const imgSomos = document.getElementById("imgSomos")

        qttSomos +=1
        if(qttSomos == totSomos){
            cardSomos.innerHTML = `Parabéns, você concluiu todos os simulados!`
            cardSomos.style.color = "#ffff"
            cardSomos.style.background = "#F2308B"
            linkSomos.remove
            imgSomos.remove
        }
        console.log(qttSomos)
    }
    function addEnem(){
        const cardEnem = document.getElementById("cardEnem")
        const linkEnem = document.getElementById("linkEnem")
        const imgEnem = document.getElementById("imgEnem")

        qttEnem +=1

        if(qttEnem == totEnem){
            cardEnem.innerHTML = `Parabéns, você realizou todas as provas anteriores!`
            cardEnem.style.background = "#F2B90C"
            cardEnem.style.color = "#ffff"
            linkEnem.remove
            imgEnem.remove
        }
        console.log(qttEnem)
    }

    