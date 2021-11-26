
/// Write Your Javascript Code here
// Your task is to check
// whether an user is trying to add 
// an empty todo into the list
// Also add a search bar to search throygh the todo-list

// To Do App Process
// 1.Caching The Dom elements
const toDoUl = document.querySelector('.todo-list');
const formInput = document.querySelector('.todo-input');
const cngBtn = document.querySelector('.todo-button');
const para =document.querySelector('.para');
// 2.add event listener to the button
cngBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(formInput.value !== ""){
      const toDoDiv = document.createElement('div');
    toDoDiv.className ="todo";
    // 4.add "to-do" div to "to-do-list"
    toDoUl.appendChild(toDoDiv);
    // Create Li
    const toDoItem =document.createElement('li');
    // add li classname
    toDoItem.className = "todo-item";
    toDoItem.innerText = formInput.value;
   
    // Li value 
    //add li to 'to-do' div
    toDoDiv.appendChild(toDoItem);

    // Create Check Button add Class Name
   const checkBtn = document.createElement('button');
  
  toDoDiv.appendChild(checkBtn);
  checkBtn.className ="check"
  checkBtn.innerHTML = '<i class="fas fa-check"></i> ' ;
   const trashkBtn = document.createElement('button');

    // Create Trash Button add Class Name
  toDoDiv.appendChild(trashkBtn);
  trashkBtn.className ="trash"
  trashkBtn.innerHTML = '<i class="fas fa-trash"></i> ' ;

  // Create update Button
 const updateBtn = document.createElement('button');
  
  toDoDiv.appendChild(updateBtn);
  updateBtn.className ="edit"
  updateBtn.innerHTML = '<i class="fas fa-edit"></i> ' ;
 
 

   formInput.value ="";
    }else{
      alert("Please input Some Text");
    }
    // 3.create "to-do" div and add className
    check();
})

// Functional The buttons
// add event listener to do list
toDoUl.addEventListener('click', function(event){
  const clickedEkl = event.target;
  console.log(clickedEkl);

  //  cheking The conditions for button
  if(clickedEkl.className == 'check'){
    const toDoDiv = clickedEkl.parentElement;
    toDoDiv.classList.add("completed");
    toDoDiv.removeChild(clickedEkl);
    

    

    
  }else if(clickedEkl.className == 'trash'){
    const toDoDiv = clickedEkl.parentElement;
      toDoDiv.classList.add("drop-effect");
       clickedEkl.remove();
       toDoDiv.addEventListener('transitionend', () => {
  //  removing to Do Div Child
  toDoDiv.remove(); 
  check();
});
       

  }
  else if(clickedEkl.className == 'edit'){
    
    // Selecting Parent Elements
      const editParent = clickedEkl.parentElement;
      // Selecting Li element
      const listEl = editParent.children[0];
      const oldText=editParent.textContent;

      
    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.value = oldText;
    inputText.className= "input-text"

    editParent.insertBefore(inputText, listEl);
    listEl.remove();

    clickedEkl.className = 'save';
    clickedEkl.innerHTML = '<i class="fas fa-save"></i>';
    

     
  
  } else if(clickedEkl.className == "save"){
         const todoDiv = clickedEkl.parentElement;
                const firstChild = todoDiv.children[0];
                const list = document.createElement('li');
                list.innerText = firstChild.value; 
                list.className = 'todo-item';
                todoDiv.insertBefore(list,firstChild);
                firstChild.remove();
                clickedEkl.innerHTML = '<i class="far fa-edit"></i>';
                clickedEkl.className = 'edit';

  }
  

})
 
// if all the task completed you have to show a mes

// function check(){
//   if(toDoUl.children.length == 0){
//      const p =document.createElement('p');
//      p.innerText="Horray You have Completed Your Task";
//      toDoUl.appendChild(p);
//   }
// } 

// check();
function check(){
if (toDoUl.children.length == 0) {
        // create p element
    para.style.display ="block";

    }else{
       para.style.display ="none";
    }
}

check();



// Understanding  Travarsing On Dom--
// Task 
/* 1.Find The Children Element
  2. Find The Parent Element
  3.Find The GrandParent Element
  4.Parent to Children
  5.Children To Parent
  6. Children To Frand Parent
  7.Chacheing siblings
   */
//  const li = document.querySelector('.todo-item');
//  console.log(li);
//     const parent = document.querySelector('.todo');
//   // Get the Parent Element from Child
//   const grandpa = parent.parentElement;
//   // const grandParent = document.querySelector('.todo-list');
 

//   const grandpal = li.closest('.todo-list');
//   console.log(grandpal);
 

// Get the element by query selector
 

  // // Get the Children Element From Parent
  // const parent = grandParent.children;
  // console.log(parent);

  // lets Check Siblings
  

// const li = document.querySelector('.todo-item');
// const checkBtn = li.nextElementSibling;



// editing Part--
// edit button create and make functional
// const editbtn
