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

   
    
    li.appendChild(check);
    li.appendChild(label)
    
   
   label.innerHTML= input.value
   
})