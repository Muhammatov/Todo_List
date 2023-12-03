function add() {
     let newTodo = document.createElement("div")
     let javob = document.getElementById("result2")
     let TodoName = document.createElement("div")
     let buttons = document.createElement("div")
     // newTodo style start
     newTodo.style.width = "100%"
     newTodo.style.height = "50px"
     // newTodo.style.border = "1px solid red"
     newTodo.style.display = "flex"
     newTodo.style.justifyContent = "space-between"
     newTodo.style.alignItems = "center"
     newTodo.style.backgroundColor="#EEE"
     // NewTodo style finish
     // TodoName style strat
     TodoName.style.maxWidth = "150px"
     TodoName.style.width = "100%"
     TodoName.style.height = "45px"
     TodoName.style.display = "flex"
     
     // TodoName.style.justifyContent = "center"
     TodoName.style.paddingLeft = "10px"
     TodoName.style.alignItems = "center"
     // TodoName.style.border = "1px solid red"
     javob.appendChild(newTodo);
     newTodo.appendChild(TodoName)
     newTodo.appendChild(buttons)
     // buttons start
     buttons.style.width = "120px"
     buttons.style.height = "45px"
     buttons.style.display = "flex"
     buttons.style.alignItems = "center"
     buttons.style.justifyContent = "center"
     buttons.style.gap = "10px"
     // buttons.style.border = "1px solid green"
     // button1 style
     let button1 = document.createElement("button")
     button1.innerHTML = `<i class="fa-solid fa-check"></i>`
     button1.style.border="none"
     button1.style.color="#5B8CBF"
     buttons.appendChild(button1)
     // button1 style finish
     // Button2 style
     let button2 = document.createElement("button")
     button2.style.width = "50px"
     button2.style.height = "30px"
     button2.innerHTML = "Edit"
     button2.style.border="none"
     button2.style.textTransform="uppercase"
     button2.style.fontWeight="600"
     button2.style.color="#3E9D51"
     
     buttons.appendChild(button2)
     // Button2 style finish
     // Button3 style
     let button3 = document.createElement("button")
     button3.style.width = "50px"
     button3.style.height = "30px"
     button3.innerHTML = "x"
     button3.style.border="none"
     button3.style.textTransform="uppercase"
     button3.style.color="red"
     buttons.appendChild(button3)
     // Button3 style finish
     // button1.classList.add('salom')
     // buttons Finish
     // Todo Input 
     let TodoInput = document.getElementById('todoInput')
     localStorage.setItem("Input_name", TodoInput.value)
     let locName = localStorage.getItem('Input_name')
     
     TodoName.innerText = locName
     TodoInput.value = ""
     
     button1.addEventListener('click', ()=>{
         button1.innerHTML=`<i class="fa-solid fa-minus"></i>`
     })
     button2.addEventListener('click',()=>{
          
     })
    button3.addEventListener('click', ( )=>{
     javob.removeChild(newTodo)
    })

}

