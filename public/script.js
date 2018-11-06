class ToDoList {
    constructor() {
        this.taskList = document.querySelector('.todo-list__list');
        this.tasks = [];
        this.creationForm = new ToDoListCreationForm(this.handleSubmit.bind(this));
    }

    addTask(task) {
        const li = document.createElement('li');
        const removeButton = document.createElement('button');

        this.tasks.unshift(new Task(task));

        li.textContent = task.name;
        removeButton.textContent = 'Delete';

        li.append(removeButton);
        this.taskList.append(li);
    }

    handleSubmit(event) {
        event.preventDefault();

        const taskNameElement = event.target.querySelector('[name="name"');
        const taskName = taskNameElement.value;

        this.addTask({
            name: taskName
        });

        taskNameElement.value = '';
    }
}

class ToDoListCreationForm {
    constructor(handleSubmit) {
        this.creationForm = document.querySelector('.todo-list__form');
        this.creationForm.addEventListener('submit', handleSubmit);
    }
}

class Task {
    constructor({ name, done }) {
        this.id = Date.now();
        this.name = name;
        this.done = done;
    }

    onRemoveTask() {

    }
}

const taskList = new ToDoList();