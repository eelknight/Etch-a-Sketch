const grid = document.querySelector('#grid');

function gridMaker(quantity) {
    for(let i=0;i<quantity;i++){
       let column=document.createElement('div');
       column.setAttribute('id','column');
        for(let x=0;x<quantity;x++){
            let cell=document.createElement('div');
            cell.setAttribute('id','cell');
            column.appendChild(cell); 
             

            cell.addEventListener("mouseover",(e)=>{
                e.target.style.backgroundColor="rgb(120, 120, 120)";
            }) 
        }
        grid.appendChild(column);
    }
}
gridMaker(16);


const enter = document.querySelector("#enter");
const size = document.querySelector("#size");
const shake= document.querySelector("#shake");
const randomized=document.querySelector("#randomized")
const black= document.querySelector("#black")

enter.addEventListener("click",()=>{
    if(size.value>100){
        alert("Larger than 100, please pick again.")
        size.value=""
    }else{
    const reset = document.querySelectorAll("#column");
    reset.forEach(element => {
        element.remove();
    });
    gridMaker(size.value);
    size.value=""
}
});

shake.addEventListener("click",()=>{
    let cells =document.querySelectorAll("#cell")
    cells.forEach(element => {
        element.setAttribute('style','background-color: white;')
    });
})

randomized.addEventListener("click",()=>{
    let cells =document.querySelectorAll("#cell")
    cells.forEach(element => {
        element.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor= randomColor()
        }) 
    });
})

function randomColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
}


black.addEventListener("click",()=>{
    let cells =document.querySelectorAll("#cell")
    cells.forEach(element =>{
        element.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor= "rgb(120, 120, 120)";
        })
    })
})


