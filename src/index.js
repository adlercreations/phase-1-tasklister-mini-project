document.addEventListener("DOMContentLoaded", () => {
//   const taskInput = document.getElementById("taskInput");
//   const submitButton = document.getElementById("submit");
//   const taskList = document.getElementById("taskList")

//   const addTodo = () => {
//     const taskText = taskInput.ariaValueMax. trim();
//     if (taskText !== "") {
//       const listItem = document.createElement("li");
//       listItem.textContent = taskText;
//       taskList.appendChild(listItem);
//       taskInput.value = "";
//     }
//   }
//   submitButton.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//       addTodo();
//     }
//   })
// });
    const createTaskForm = document.getElementById(`create-task-form`)

    createTaskForm.addEventListener(`submit`, (event) => {
      event.preventDefault()

      const taskList = document.getElementById(`tasks`)

      const taskLi = document.createElement(`li`)

      const newTaskDescriptionElement = document.getElementById(`new-task-description`)
      // console.log(newTaskDescriptionElement)
      // console.log(newTaskDescriptionElement.value)

      taskLi.append(newTaskDescriptionElement.value + " ")

      const deleteTaskButton = document.createElement(`button`)

      deleteTaskButton.textContent = "X"

      deleteTaskButton.setAttribute(`data-description`, newTaskDescriptionElement.value)

      deleteTaskButton.addEventListener(`click`, () => {
        // taskLi.remove()
        taskLi.remove()
        
      })

      taskLi.append(deleteTaskButton)

      taskList.append(deleteTaskButton)

      // taskLi.append("hello", document.createElement(`h1`))
      taskList.appendChild(taskLi)

      createTaskForm.reset()
    })
  })