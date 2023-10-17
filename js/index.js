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

//parte para pegar o valor do select da edição e do dia do simulado
//edição do simulado
    var simuEdition = document.getElementById("simuEdition");
    var simuEditionSelected = simuEdition.options[simuEdition.selectedIndex].value; //esse trecho mostra somente a parte que já vem selecionada por padrão no js

    simuEdition.addEventListener("change", function(){
        console.log(simuEdition.value)
        
    })

    //dia do simulado
            //var simuDaySelected = simuDay.options[simuDay.selectedIndex].value;
    let numberQuestion = 0
        let simuSkills = []
        let simuComp = []
        let simuResp = []
//verificação se o aluno está em natureza ou matemática
        //a função abaixo mostra no console o valor da seleção em tempo real
        var simuDay = document.getElementById("simuDay")
        
        let daySelected = simuDay.addEventListener("change", function () {
            //console.log(simuDay.value);
            const sDSelected = simuDay.value
            console.log(sDSelected)

            if(sDSelected == "1dia"){
                console.log("você está no primeiro dia")
            }else{
                console.log("você esta no segundo dia")
            }


        })

    
    function sendResp(){

        const qQuest = document.getElementById("questionNumb")
        const qResp = document.getElementById("questionResp")
        const qHab = document.getElementById("hQuestion")
        const qComp = document.getElementById("qComp")
        const textAlert = document.getElementById("respAlert")
        //gabarito do enem
        const requeriment = [
            "A", "B", "C", "D", "E",
            "a", "b", "c", "d", "e"
        ]
        const gabEnem = requeriment.map((item) => item)
        console.log(gabEnem)
        //tratamento de dados das informações coletadas pelo input
        let questNumber = qQuest.value
        var respValue = qResp.value
        let habValue = qHab.value;
        let compValue = qComp.value;
        console.log(questNumber, respValue, habValue, compValue, requeriment)
            //verificação de resposta
            

            //verificação se está no primeiro ou segundo dia
            const pday = "1dia"
            const sday = '2dia'
        if(sDSelected = pday){

        }
            
        }
