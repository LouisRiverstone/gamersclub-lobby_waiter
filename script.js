let interval = null
let created = false

function playSound() {
    if(!created){
        const sound = new Audio("https://www.myinstants.com/media/sounds/oooo-o-gas-oia-o-gas.mp3");
        sound.play();
    }
}

function clickButton(){
    if(!created){
        let inputs = document.getElementsByClassName('lobby-create-button-submit');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].click();
            console.log(`Partida Criada`);
            playSound();
            created = true
        }
    }
}

function intervaler(){
    return setInterval(()=>{
        if(!created){
            const lobbies = document.getElementById("countLobby").innerHTML.split('/')[1]
            console.log(`${lobbies} encontrados`);
            if(lobbies < 200 && !created){
               clickButton()
            }
        }
        else{
            clearInterval(interval)
        }
    },300)
}

function execute() {
    interval = intervaler()
}

execute();





