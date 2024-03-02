let button = document.querySelector("#addTaskBtn")
let input= document.querySelector('.input')
let ul = document.querySelector('#taskList')


button.addEventListener('click',function(event){
    let li=document.createElement('li')
    li.id="list"
   ul.appendChild(li)
   
    let check= document.createElement("input");
    check.type="checkbox"
    check.id="id"
    let label = document.createElement("label")
   label.htmlFor="id"
    let span = document.createElement("span")
    span.id='cross';
    span.innerHTML='\u00d7'  
    let span1 = document.createElement("img")
    span1.id='edit';
    span1.src="edit.svg.png"
    label.innerHTML= input.value
    input.value=" "
   
    
    li.appendChild(check);
    li.appendChild(label)
    li.appendChild(span)
    li.appendChild(span1)
  

    span.addEventListener('click',function(e){
        if(e.target.id==='cross'){
          let task=this.parentElement;
           task.remove()
        }
    })
    span1.addEventListener('click',function(e){
        let taskText = label.innerText; 
        let newText = prompt("Edit Task", taskText); 
        if (newText !== null) {
            label.innerText = newText;
          
        }
    })
    
    
   
})
