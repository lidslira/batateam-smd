const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
  //   console.log("dragOver");
}

function dragEnter() {
  console.log("dragEnter");
}

function dragLeave() {
  console.log("dragLeave");
}

function dragDrop() {
  this.appendChild(draggableTodo);
  console.log("dropped");
}

/* modal */
const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

/* create todo  */
const todo_submit = document.getElementById("todo_submit");

todo_submit.addEventListener("click", createTodo);

function createTodo() {
  const todo_div1 = document.createElement("div");
  const input_val1 = document.getElementById("todo_input").value;
  const txt1 = document.createTextNode(input_val1);

  const todo_div2 = document.createElement("div");
  const input_val2 = document.getElementById("todo_input").value;
  const txt2 = document.createTextNode(input_val2);

  todo_div1.appendChild(txt1);
  todo_div1.classList.add("todo");
  todo_div1.setAttribute("draggable", "true");

  todo_div2.appendChild(txt2);
  todo_div2.classList.add("todo");
  todo_div2.setAttribute("draggable", "true");

  
  /* create span */
  const span1 = document.createElement("span1");
  const span_txt1 = document.createTextNode("\u00D7");
  span1.classList.add("close");
  span1.appendChild(span_txt1);

  const span2 = document.createElement("span2");
  const span_txt2 = document.createTextNode("\u00D7");
  span2.classList.add("close");
  span2.appendChild(span_txt2);

  todo_div1.appendChild(span1);

  no_status.appendChild(todo_div1);

  todo_div2.appendChild(span2);

  no_status.appendChild(todo_div2);

  span1.addEventListener("click", () => {
    span1.parentElement.style.display = "none";
    span2.parentElement.style.display = "none";
    

    
  });

  span2.addEventListener("click", () => {
    span1.parentElement.style.display = "none";
    span2.parentElement.style.display = "none";
    

    
  });
  //   console.log(todo_div);

  todo_div1.addEventListener("dragstart", dragStart);
  todo_div1.addEventListener("dragend", dragEnd);

  todo_div2.addEventListener("dragstart", dragStart);
  todo_div2.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});