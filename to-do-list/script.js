let input=document.querySelector("#input");
let add=document.querySelector("#plus");
let outer=document.querySelector(".list");
let clear=document.querySelector("#clear");
function create(value,id,done){
    let div=document.createElement("div");
    div.dataset.id=id;
    div.className="section";
    let li=document.createElement("p");
    let icon=document.createElement("i");
    icon.className="fa-regular fa-circle-xmark delete";
    li.innerText=value;
    div.appendChild(li);
    div.appendChild(icon);
    outer.appendChild(div);
    if(done){
      div.classList.add("done");
    }
}
window.addEventListener("DOMContentLoaded",()=>{
     const storage=JSON.parse(localStorage.getItem("list")) || [];
     storage.forEach(element => {
     create(element.text,element.id,element.done);
     });
})
add.addEventListener("click",()=>{
    const todo={
      text:input.value,
      id:Date.now(),
      done:false
    }
    create(todo.text,todo.id,todo.done);
    const storage=JSON.parse(localStorage.getItem("list")) || [];
    storage.push(todo);
    localStorage.setItem("list",JSON.stringify(storage));
    input.value="";
})
clear.addEventListener("click",()=>{
  localStorage.removeItem("list");
  outer.innerHTML="";
})
outer.addEventListener("click",(e)=>{
    const storage=JSON.parse(localStorage.getItem("list")) || [];
    const item=e.target.closest(".section");
    let id=Number(item.dataset.id);
    if(e.target.closest(".delete")){
      const newstorage=storage.filter(todo=>todo.id!=id);
      localStorage.setItem("list",JSON.stringify(newstorage));
      item.remove();
      return;
}
      item.classList.toggle("done");
      storage.forEach(todo=>{
        if(todo.id==id){
          todo.done= !todo.done;
        }
      })
      localStorage.setItem("list",JSON.stringify(storage));
})
