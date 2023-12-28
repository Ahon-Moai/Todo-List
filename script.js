let container = document.getElementById("list");
let Button = document.getElementById("Button");
let inputField = document.getElementById("inputField");



    Button.addEventListener('click', function(){
        if(inputField.value === ""){
            alert("You have to write something!")
        }else{
            
                let li = document.createElement("li");
                li.innerText = inputField.value;
                container.appendChild(li);
                inputField.value ="";
        }
    
    })
    li.addEventListener('click', ()=>{
     container.removeChild(li)
    })
   