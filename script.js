document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("text_input");
  const addTaskButton = document.getElementById("add_task_btn");
  const taskList = document.getElementById("task_list");
  const tenorGifContainer = document.getElementById("tenor_gif_container");

  addTaskButton.addEventListener("click", addTask);
  updateGifVisibility();

  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      const err = document.querySelector("#err");
      err.play();
      alert("Enter Task Please");
      return;
    }

    const add_task_btn_aud = document.querySelector("#add_task_btn_aud");
    add_task_btn_aud.play();

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const delItem = document.createElement("button");
    delItem.textContent = "Hogya";
    delItem.id = "del_itm";

    delItem.addEventListener("click", () => {
      taskList.removeChild(taskItem);
      updateGifVisibility();
      const delete_btn_aud = document.querySelector("#delete_btn_aud");
      delete_btn_aud.play();
    });

    taskItem.addEventListener("click", () => {
      taskItem.classList.toggle("Completed");
    });

    taskItem.appendChild(delItem);
    taskList.appendChild(taskItem);
    taskInput.value = "";

    updateGifVisibility();
  }

  function updateGifVisibility() {
    if (taskList.children.length === 0) {
      tenorGifContainer.style.display = "block";
    } else {
      tenorGifContainer.style.display = "none";
    }
  }
});
