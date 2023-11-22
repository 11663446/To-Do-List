// Sample data
const initialTasks = [
    { id: 1, text: 'Complete HTML section', completed: true },
    { id: 2, text: 'Style the application with CSS', completed: true },
    { id: 3, text: 'Implement JavaScript functionality', completed: false }
];

// Function to render tasks
function renderTasks(tasks) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task.text}</span>
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
        `;
        todoList.appendChild(li);
    });
}

// Callback function to toggle task completion
function toggleTask(id) {
    tasks = tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task));
    renderTasks(tasks);
}

// Function to add a new task
function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const newText = newTaskInput.value.trim();

    if (newText !== '') {
        const newTask = { id: tasks.length + 1, text: newText, completed: false };
        tasks.push(newTask);
        renderTasks(tasks);
        newTaskInput.value = '';
    }
}

// Simulate fetching initial tasks with a delay using a Promise
const fetchInitialTasks = new Promise((resolve) => {
    setTimeout(() => {
        resolve(initialTasks);
    }, 1000);
});

// Using Promise to fetch initial tasks and render them
let tasks = [];
fetchInitialTasks.then((data) => {
    tasks = data;
    renderTasks(tasks);
});
