# To-Do-List
1.	HTML Structure:
•	The HTML file (index.html) defines the basic structure of the web page.
•	It includes a title, a container div, an unordered list (<ul>) to display tasks, an input field for adding new tasks, and a button to trigger the addition of a new task.
•	The script is linked at the end of the body to ensure it runs after the HTML has been loaded.
2.	CSS Styling:
•	The CSS file (styles.css) provides basic styling to the application, such as setting the font, background color, and styling for the task list.
3.	JavaScript Logic (script.js):
•	Sample Data:
•	Initial tasks are represented as objects in the initialTasks array.
•	Rendering Tasks:
•	The renderTasks function takes an array of tasks as an argument and dynamically creates list items (<li>) for each task.
•	It then appends these list items to the unordered list (<ul>).
•	Toggle Task Completion:
•	The toggleTask function is a callback function that toggles the completion status of a task when a checkbox is clicked.
•	It uses the id of the task to locate and update the corresponding task in the tasks array.
•	After updating the task, it re-renders the tasks using the renderTasks function.
•	Adding a New Task:
•	The addTask function is called when the "Add Task" button is clicked.
•	It gets the value from the input field, creates a new task object, and adds it to the tasks array.
•	The task list is then re-rendered using the renderTasks function.
•	Fetching Initial Tasks with a Promise:
•	A Promise (fetchInitialTasks) is used to simulate fetching initial tasks with a delay of 1 second.
•	The fetchInitialTasks Promise is resolved with the initialTasks array.
•	After resolving, the then callback is executed, setting the tasks array and rendering the initial tasks.
4.	Application Initialization:
•	The application starts by declaring the initial tasks array and defining the functions for rendering, toggling, and adding tasks.
•	It then uses a Promise to simulate the asynchronous fetching of initial tasks.
•	Once the initial tasks are fetched, the then callback is triggered, setting the tasks array and rendering the tasks on the page.
5.	User Interaction:
•	Users can interact with the application by checking/unchecking the checkboxes to toggle task completion and adding new tasks using the input field and "Add Task" button.
