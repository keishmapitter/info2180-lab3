window.onload= function(){
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const start = document.getElementsByClassName("btn")[0];
    const TTB= board.querySelectorAll('div');
    let playone='X';
    let poslst = ['', '', '', '', '', '', '', '', ''];
    const winnCon = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for(let a=0; a<=8; a++){
        TTB[a].setAttribute("class","square");
        TTB[a].innerHTML="";

        
    }
    TTB.forEach( (TTBP, index) => {
        TTBP.addEventListener('click', () => Gameplay(TTBP, index));
        TTBP.addEventListener('mouseover', function(){
            TTBP.classList.add('hover');
        });
        TTBP.addEventListener('mouseout', function(){
            TTBP.classList.remove('hover');
        });
    });

    function checkWin(){
        for(let i=0; i<=7; i++){
            const win = winnCon[i];
 
            const winningplay1= poslst[win[0]];
            const winningplay2 = poslst[win[1]];
            const winningplay3= poslst[win[2]];
            if (winningplay1 === ''|| winningplay2 === ''|| winningplay3===''){
                continue;
            }  
            if (winningplay1=== winningplay2 && winningplay2 === winningplay3){
                status.innerHTML= 'Congratulations!' + winningplay1 +' is the winner';
                status.classList.add('you-won');
                break;
            }     
        }
    }
    const Gameplay= (TTBP,index) =>{
        console.log(TTBP.innerText)
        if((TTBP.innerText !== 'X' || TTBP.innerText !== 'O')&&TTBP.innerHTML===""){
            TTBP.innerText= playone;
            TTBP.classList.add(playone);
            poslst[index]=playone;
            console.log(poslst);
            if(playone === 'X'){
                playone='O';

            }else{
                playone='X';
            }
            checkWin();
        }

    }

    start.addEventListener('click', ()=>{
            let remove = document.getElementById('board').children;
            for(let NG = 0; NG <= 8; NG++){
                remove[NG].textContent = '';
                remove[NG].setAttribute('class', 'square');
                console.log('New Game has started');
                TTB[NG].innerHTML="";
            };
    
    })

}

