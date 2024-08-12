let btnRef = document.querySelectorAll('.button-option');
let popupRef = document.querySelector('.popup');
let newGame = document.getElementById('new-game');
let restartBtn = document.getElementById('restart');
let messageRef = document.getElementById('message');
let xturn = true;
let cnt=0;

let winningPattern=[
    [0,1,2],
    [0,3,6],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6]
]




const newBtn=()=>{
    newGame.addEventListener('click', ()=>{
        popupRef.classList.add("hide");
        btnRef.forEach((element)=>{
            element.innerHTML = '';
            element.disabled = false;
        })
        messageRef.innerHTML = '';
        xturn = true;
    })
}

const restartFunction= ()=>{
    restartBtn.addEventListener('click', ()=>{
        popupRef.classList.add("hide");
        btnRef.forEach((element)=>{
            element.innerHTML = '';
            element.disabled = false;
        })
        messageRef.innerHTML = '';
        xturn = true;
    })
}

const disableBtn=()=>{
    btnRef.forEach((element)=>{
        element.disabled = true;
    })
    popupRef.classList.remove("hide")
    
}

const drawfunction=()=>{
    disableBtn();
    newBtn();
    messageRef.innerHTML=`😓 it's Drawing`;
}

const winFunction=(letter)=>{
    disableBtn();
    newBtn();
    if(letter=='X'){
        messageRef.innerHTML = `🎉 <br/> Player 'X' wins!`;

    }
    else{
        messageRef.innerHTML = `🎉 <br/> Player 'O' wins!`;
    }
}


const winCheck =()=>{
    for(let i of winningPattern){
        let [element1 , element2 , element3]=[
            btnRef[i[0]].innerHTML, 
            btnRef[i[1]].innerHTML, 
            btnRef[i[2]].innerHTML, 
        ]
        if(element1!='' && element2!='' && element3!=''){
            if(element1===element2 && element2===element3){
                winFunction(element1);
            }
        }
    }
}



btnRef.forEach((element)=>{
    element.addEventListener('click', ()=>{
        if(xturn){
            element.innerHTML ='X';
            xturn = false;
            element.disabled = true;
        }
        else{
            element.innerHTML ='O';
            xturn = true;
            element.disabled = true;
        }
        cnt+=1
        if(cnt==9){
            drawfunction()
        }
        winCheck();
        
        restartFunction();
    })
    
})

