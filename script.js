const blocks=[];
const snake=[{
    x:1,y:2
}];
let direction='down';
let intervalId=null;
let rows=0;
let cols=0;
document.addEventListener('DOMContentLoaded', () => { //this wait until the entire html page is loaded
    const board = document.querySelector('.board');
    const blockHeight = 50;
    const blockWidth = 50;

    if (!board) {
        console.error('Board element not found');
        return;
    }
    board.innerHTML = ''; //this line has removed the white lines at the bottom of board. it cleans allt he things
    const rect = board.getBoundingClientRect(); //gets the actual pixel size of the board
    rows = Math.floor(rect.height / blockHeight);
    cols = Math.floor(rect.width / blockWidth);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const block = document.createElement('div');
            block.classList.add('blocks');
            board.appendChild(block);
            blocks[`${row}-${col}`]=block;
        }
    }
});
function render(){
    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`].classList.add("fill");
    });
}
intervalId = setInterval(()=>{
    let head=null;
    if(direction === "left"){
        head={x:snake[0].x, y:snake[0].y-1};
    }
    else if(direction === "right"){
        head={x:snake[0].x, y:snake[0].y+1};
    }
    else if(direction === "up"){
        head={x:snake[0].x-1,y:snake[0].y};
    }
    else if(direction==="down"){
        head={x:snake[0].x+1, y:snake[0].y};
    }
    if(head.x<0 || head.x>=rows || head.y<0 || head.y>=cols){
        alert("Game Over");
        clearInterval(intervalId);
    }
    snake.forEach(segment=>{
        blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    })
    snake.unshift(head);
    snake.pop();
    render();
},400);

addEventListener("keydown",(event)=>{
    if(event.key==="ArrowUp"){
        direction="up";
    }
    else if(event.key==="ArrowDown"){
        direction="down";
    }
    else if(event.key==="ArrowLeft"){
        direction="left";
    }
    else if(event.key==="ArrowRight"){
        direction="right";
    }
})