let button=document.getElementById("button");
var numberInShape=1;
var oldValue=0;

button.onclick=()=>{
    let n=document.getElementById("number").value;
    const color=document.getElementById("color").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rect");
    const box=document.getElementById("box");

    n=Number(n)+Number(oldValue);
    for(let j=numberInShape;j<=n;j++){
        let shape=document.createElement("div");
        shape.innerHTML+=numberInShape;
        
        if(circle.checked){
            shape.classList.add("circle");
            
        }
        else if(square.checked){
            shape.classList.add("square");
        }
        else if(rectangle.checked){
            shape.classList.add("rectangle");

        }
        
        else{
            document.write("InvalidInput");
          
        }
        numberInShape++;

        box.appendChild(shape);
        oldValue=document.getElementById("box").lastElementChild.innerHTML;
    }
}