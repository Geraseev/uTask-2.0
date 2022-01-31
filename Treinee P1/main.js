const listas = document.querySelectorAll('ul')
const todoCard = document.querySelector('#todo')
const doingCard = document.querySelector('#doing')
const doneCard = document.querySelector('#done')
const inputToDo = document.querySelector('#tarefa')

//Função para adicionar elemento

function add ()  {
  if (inputToDo.value) {
    CardToDo(inputToDo.value + ' ')
    inputToDo.value = ''
  }
  else{
      alert('Adicione uma tarefa')
  }
}

// Função do card To-do

function CardToDo (task) {
  const li = document.createElement('li')
  const btNext = document.createElement('i')
  const button = document.createElement('button')
  const btn = document.createElement('button')
  const btExclude = document.createElement('i')
  btNext.id = 'next'
  btExclude.id = 'del1'
  btNext.classList.add("next");


  btNext.setAttribute('class', 'fas fa-chevron-circle-right')
  btExclude.setAttribute('class', 'fas fa-minus-circle')

  button.appendChild(btNext)
  

  button.onclick = () => CardDoing(li, task)

  btn.appendChild(btExclude)


    btn.addEventListener("click", () => {

      li.remove();
        
    });

  inputToDo.textContent = task

  

  li.append(task, button, btn)

  todoCard.appendChild(li)
}

// Função do card Doing

function CardDoing (item, tsk) {
  const li = document.createElement('li')
  const btDone = document.createElement('i')
  const button = document.createElement('button')
  const btn = document.createElement('button')
  const btExclude = document.createElement('i')
  btDone.id = 'doneBtn'
  btExclude.id = 'del2'

  todoCard.removeChild(item)

  btDone.setAttribute('class', 'fas fa-check-circle')
  btExclude.setAttribute('class', 'fas fa-minus-circle')

  button.appendChild(btDone)
  button.onclick = () => CardDone(li, tsk)


  btn.appendChild(btExclude)


  btn.addEventListener("click", () => {

    li.remove();
      
  });
  

  li.append(tsk, button,btn)

  doingCard.appendChild(li)
}

// Função de excluir do card Done

function excluirItem (eItem) {
  doneCard.removeChild(eItem)
}

// Função do card Done

function CardDone (dItem, t) {
  const li = document.createElement('li')
  const btExclude = document.createElement('i')
  const button = document.createElement('button')
  const btRedo = document.createElement('i')
  const btn = document.createElement('button')
  btRedo.id = 'redo'
  btExclude.id = 'del3'

  doingCard.removeChild(dItem)

  btRedo.setAttribute('class', 'fas fa-undo-alt')
  btExclude.setAttribute('class', 'fas fa-minus-circle')

  btn.appendChild(btRedo)
  btn.addEventListener("click", () =>{
    CardToDo(t)
    li.remove();
  })

  button.appendChild(btExclude)
  button.onclick = () => excluirItem(li)


  li.append(t, btn, button)

  doneCard.appendChild(li)
}



// modal

function showModal(){
  var element = document.getElementById("modal");
  element.classList.add("show-modal");
}

function hiddenModal(){
  var element = document.getElementById("modal");
  element.classList.remove("show-modal");
}

function addImg ()  {
  const planF = document.getElementById("planF");
  const valorInput = planF.value;
  planF.value = "";

    
  if(valorInput == ""){
    alert("Adicione uma imagem");
  }
}

function Limpar() {
  planF.value = ""
}
