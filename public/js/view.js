document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM loaded!');

  // your code here...
  const form = document.getElementById('todo-form')

  const newTodoInput = document.querySelector('input.new-item')


  form.addEventListener('submit', e=>{
    e.preventDefault()
    
   const text = newTodoInput.value

   //post data to backend
  fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify({text}),
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(json)
    
  }).catch(err=>console.error(err))


  })
  //input 
  //form?


  //add listener
  //POST data to backend
});