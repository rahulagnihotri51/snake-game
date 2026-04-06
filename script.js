const blocks=[];
const snake=[{
    x:1,y:2
},{
    x:1,y:3
},{
    x:1,y:4
}];
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
    const rows = Math.floor(rect.height / blockHeight);
    const cols = Math.floor(rect.width / blockWidth);

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