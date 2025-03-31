let currentListId = 'myDayList'; // 默认显示"我的一天"

const addTaskBtn = document.querySelector('.add-task-form .btn-add')
const addTaskForm = document.querySelector('.add-task-form')
const addTaskInput = document.querySelector('.add-task-form .input')

const tasks = document.querySelectorAll('.task')


tasks.forEach(task => {
    const checkEl = task.querySelector('.fa-check')
    checkEl.addEventListener('click', () => (
        // console.log(task)
        task.classList.toggle('done')
    ))
})

// console.log(addTaskBtn)

addTaskBtn.addEventListener('click', addNewTask)
addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    addNewTask()
})

function addNewTask(taskName) {
    let taskTitle = addTaskInput.value.trim()

    if (taskName) {
        taskTitle = taskName
    }

    if (!taskTitle) return //空任务名不添加

    console.log(taskTitle)

    const newTask = {
        id: 'task-' + Date.now(),
        title: title,
        completed: false,
        important: false,
        dueDate: null,
        listIds: [currentListId, 'taskList'], // 添加到当前列表和总任务列表
        createdAt: new Date().toISOString(),
        completedAt: null
  };
}