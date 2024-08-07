const themeToggleSwitch = document.getElementById('themeToggleSwitch');
const addTaskButton = document.getElementById('addTaskButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

themeToggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    if (taskInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = taskInput.value;

        const button = document.createElement('button');
        button.textContent = 'Delete';
        button.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(button);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}
