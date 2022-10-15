window.onload= function(){
    const status = document.getElementById("status");
    const board = document.getElementById("board");
    const controls= document.getElementsByClassName("controls");
    const start = document.getElementsByClassName("btn")[0];
   

    const TTB= board.querySelectorAll('div');
    let play='X';
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
 
            const pos1= poslst[win[0]];
            const pos2 = poslst[win[1]];
            const pos3 = poslst[win[2]];
            if (pos1 === ''|| pos2 === ''|| pos3===''){
                continue;
            }  
            if (pos1=== pos2 && pos2 === pos3){
                status.innerHTML= 'Congratulations!' + pos1 +' is the winner';
                status.classList.add('you-won');
                break;
            }     
        }
    }
    const Gameplay= (TTBP,index) =>{
        console.log(TTBP.innerText)
        if(TTBP.innerText !== 'X' || TTBP.innerText !== 'O'){
            TTBP.innerText= play;
            TTBP.classList.add(play);
            poslst[index]=play;
            console.log(poslst);
            checkWin();
            if(play === 'X'){
                play='O';

            }else{
                play='X';
            }
        }

    }

    start.addEventListener('click', ()=>{
        let rest = controls;
        let childrest = rest[0].addEventListener('click', function(){
            let remove_att = document.getElementById('board').children;
            for(let rm = 0; rm <= 8; rm++){
                remove_att[rm].textContent = '';
                remove_att[rm].setAttribute('class', 'square');
                console.log('New Game');
            };
        })
    })

}

