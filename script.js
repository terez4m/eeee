const tela = document.getElementById('container');
let nDiv = 10;

function random_01(){
    let num = Math.round(Math.random());
    return num;
}

function addCells(){

    let cell;
    for(let i=1; i<nDiv*nDiv; i++){
        cell = document.createElement('div');
        cell.className = 'cell';
        document.getElementById('container').appendChild(cell);
    }
    document.querySelectorAll('.cell').forEach(e =>{
        let color = random_01();
        if(color == 0){
            e.style.backgroundColor = "white";
        }else{
            e.style.backgroundColor = "black";        }
    })   
}

function apaga(){
    tela.innerHTML = '';
}

function muda(){
    apaga();
    addCells();
}

setInterval(muda, 600);