/* <div class="task-item" data-task-id="1">
   <div class="task-item__main-container">
       <div class="task-item__main-content">
           <form class="checkbox-form">
               <input class="checkbox-form__checkbox" type="checkbox" id="task-1">
               <label for="task-1"></label>
           </form>
           <span class="task-item__text">Посмотреть новый урок по JavaScript</span>
       </div>
       <button class="task-item__delete-button default-button 
        delete-button" data-delete-task-id="5">Удалить</button>
   </div>
</div> */

const tasks = [
    {
        id: '1138465078061',
        completed: false,
        text: 'Посмотреть новый урок по JavaScript',
    },
    {
        id: '1138465078062',
        completed: false,
        text: 'Выполнить тест после урока',
    },
    {
        id: '1138465078063',
        completed: false,
        text: 'Выполнить ДЗ после урока',
    },
]



const task_container = (taskId, taskText) => {
    const task_item = document.createElement('div');
    task_item.className = 'task-item';
    task_item.dataset = `data-task-id=${taskId}`;

    const task_item_main_container = document.createElement('div');
    task_item_main_container.className = 'task-item__main-container';

    const task_item_main_content = document.createElement('div');
    task_item_main_content.className = 'task-item__main-content';

    const checkbox_form = document.createElement('form');
    checkbox_form.className = 'checkbox-form';

    const inputElement = document.createElement('input');
    inputElement.className = 'checkbox-form__checkbox"';
    inputElement.type = 'checkbox';
    inputElement.id = taskId;

    const labelElement = document.createElement('label');
    labelElement.htmlFor = taskId;

    const text_container = document.createElement('span');
    text_container.className = 'task-item__text';
    text_container.innerText = taskText;

    const button_container = document.createElement('button');
    button_container.className = 'task-item__delete-button default-button delete-button';
    button_container.dataset = `data-delete-task-id=5`;
    button_container.innerText = 'Удалить';

    checkbox_form.append(inputElement, labelElement);
    task_item_main_content.append(checkbox_form, labelElement, text_container);
    task_item_main_container.append(task_item_main_content, button_container);
    task_item.append(task_item_main_container);

    return task_item;
}

const tasks_list = document.querySelector('.tasks-list');
tasks.forEach((task) => {
    const taskItem = task_container(task.id, task.text);
    tasks_list.append(taskItem);
});