const root = document.getElementById('root');
const mainContainer = document.createElement('div');
mainContainer.className = 'main__container';
root.append(mainContainer);
const headerContainer = document.createElement('div');
headerContainer.className = 'header__container';
mainContainer.append(headerContainer);
const deleteAllButtonContainer = document.createElement('div');
deleteAllButtonContainer.className = 'delete__all-button-container';
headerContainer.append(deleteAllButtonContainer);
const deleteAllButton = document.createElement('button');
deleteAllButton.className = 'delete__all-button'
deleteAllButton.innerHTML = 'Delete All';
deleteAllButtonContainer.append(deleteAllButton);
const deleteLastButtonContainer = document.createElement('div');
deleteLastButtonContainer.className = 'delete__last-button-container';
headerContainer.append(deleteLastButtonContainer);
const deleteLastButton = document.createElement('button');
deleteLastButton.className = 'delete__last-button';
deleteLastButton.innerHTML = 'Delete Last';
deleteLastButtonContainer.append(deleteLastButton);
const enterTodoInputContainer = document.createElement('div');
enterTodoInputContainer.className = 'enter__todo-input-container';
headerContainer.append(enterTodoInputContainer);
const enterTodoInput = document.createElement('input');
enterTodoInput.className = 'enter__todo-input';
enterTodoInput.placeholder = 'Enter todo ...';
enterTodoInputContainer.append(enterTodoInput);
const addButtonContainer = document.createElement('div');
addButtonContainer.className = 'add__button-container';
headerContainer.append(addButtonContainer);
const addButton = document.createElement('button');
addButton.className = 'add__button';
addButton.innerHTML = 'Add';
addButtonContainer.append(addButton);
const buttonsMainContainer = document.createElement('div');
buttonsMainContainer.className = 'buttons__main-container'
mainContainer.append(buttonsMainContainer);
const allTodosContainer = document.createElement('div');
allTodosContainer.className = 'all__todos-container';
buttonsMainContainer.append(allTodosContainer);
const allTodosText = document.createElement('p');
allTodosText.className = 'all__todos-text';
allTodosText.innerHTML = 'All: 0';
allTodosContainer.append(allTodosText);
const completedContainer = document.createElement('div');
completedContainer.className = 'competed__container';
buttonsMainContainer.append(completedContainer);
const completedText = document.createElement('p');
completedText.className = 'completed__text';
completedText.innerHTML = 'Completed: 0';
completedContainer.append(completedText);
const showAllButtonContainer = document.createElement('div');
showAllButtonContainer.className = 'show__all-button-container';
buttonsMainContainer.append(showAllButtonContainer);
const showAllButton = document.createElement('button');
showAllButton.className = 'show__all-button';
showAllButton.innerHTML = 'Show All';
showAllButtonContainer.append(showAllButton);
const showCompletedButtonContainer = document.createElement('div');
showCompletedButtonContainer.className = 'show__completed-button-container';
buttonsMainContainer.append(showCompletedButtonContainer);
const showCompletedButton = document.createElement('button');
showCompletedButton.className = 'show__completed-button';
showCompletedButton.innerHTML = 'Show Completed';
showCompletedButtonContainer.append(showCompletedButton);
const searchInputContainer = document.createElement('div');
searchInputContainer.className = 'search__input-container';
buttonsMainContainer.append(searchInputContainer);

const addBtn = document.querySelector('.add__button');
let cardCounter = 0;
let cardsArray = [];

addBtn.addEventListener('click', () => {
    cardCounter++;
    allTodosText.innerHTML = `All: ${cardCounter}`;
    const todoInputText = document.querySelector('.enter__todo-input').value;
    const date = new Date().toJSON().slice(0, 10);
    cardsArray.push({cardCounter, todoInputText, date});
});

const showAllBtn = document.querySelector('.show__all-button');
let startPosition = 0;

function updateDisplay(container) {
    for (let i = startPosition; i < cardCounter; i++) {
        container.className = 'task__card-container';
        mainContainer.append(container);
        const taskCard = document.createElement('div');
        taskCard.className = 'task__card';
        taskCard.id = `task__card-${cardsArray[i].cardCounter}`;
        taskCardContainer.append(taskCard);
        const completedButtonContainer = document.createElement('div');
        completedButtonContainer.className = 'completed__button-container';
        taskCard.append(completedButtonContainer);
        const completedButton = document.createElement('button');
        completedButton.className = 'completed__button';
        completedButton.dataset.value = cardsArray[i].cardCounter;
        completedButton.innerHTML = 'Complete';
        completedButtonContainer.append(completedButton);
        const todoTextContainer = document.createElement('div');
        todoTextContainer.className = 'todo__text-container';
        taskCard.append(todoTextContainer);
        const todoInputText = document.querySelector('.enter__todo-input');
        const todoText = document.createElement('p');
        todoText.className = 'todo__text';
        todoText.innerHTML = cardsArray[i].todoInputText;
        todoTextContainer.append(todoText);
        const dateCloseContainer = document.createElement('div');
        dateCloseContainer.className = 'date__close-container';
        taskCard.append(dateCloseContainer);
        const closeButtonContainer = document.createElement('div');
        closeButtonContainer.className = 'close__button-container';
        dateCloseContainer.append(closeButtonContainer);
        const closeButton = document.createElement('button');
        closeButton.className = 'close__button';
        closeButton.dataset.value = cardsArray[i].cardCounter;
        closeButton.innerHTML = 'Close';
        closeButtonContainer.append(closeButton);
        const dateContainer = document.createElement('div');
        dateContainer.className = 'date__container';
        dateCloseContainer.append(dateContainer);
        const dateText = document.createElement('p');
        dateText.innerHTML = cardsArray[i].date;
        dateText.className = 'date__text';
        dateContainer.append(dateText);
        startPosition++;
    }
}
const taskCardContainer = document.createElement('div');
showAllBtn.addEventListener('click', () => {
    updateDisplay(taskCardContainer);
});

let completedArray = [];
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('completed__button')) {
        const cardNumber = event.target.dataset.value;
        completedArray.push(cardNumber);
        const taskCard = document.querySelector(`#task__card-${cardNumber}`);
        const todoText = taskCard.querySelector('.todo__text');
        todoText.style.textDecoration = 'line-through';
        todoText.style.color = 'red';
        event.target.disabled = true;
        const completedText = document.querySelector('.completed__text');
        completedText.innerHTML = `Completed: ${document.querySelectorAll('.completed__button:disabled').length}`;
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close__button')) {
        const cardNumber = event.target.dataset.value;
        cardsArray.splice(cardNumber - 1, 1);
        const taskCard = document.querySelector(`#task__card-${cardNumber}`);
        taskCard.remove();
        const allTodosText = document.querySelector('.all__todos-text');
        allTodosText.innerHTML = `All: ${--cardCounter}`;
        const completedText = document.querySelector('.completed__text');
        completedText.innerHTML = `Completed: ${document.querySelectorAll('.completed__button:disabled').length}`;
    }
});

const deleteAllBtn = document.querySelector('.delete__all-button');
deleteAllBtn.addEventListener('click', () => {
    taskCardContainer.innerHTML = '';
    updateDisplay(taskCardContainer);
    for (let i = 0; i <= cardsArray.length + 1; i++) {
        cardsArray.pop();
    }
    cardCounter = 0;
    allTodosText.innerHTML = `All: ${cardCounter}`;
});

const deleteLastBtn = document.querySelector('.delete__last-button');
deleteLastBtn.addEventListener('click', () => {
    cardCounter--;
    allTodosText.innerHTML = `All: ${cardCounter}`;
    const lastCard = cardsArray.pop();
    const taskCardToRemove = document.getElementById(`task__card-${lastCard.cardCounter}`);
    taskCardToRemove.remove();
});

function update(value, container) {
    container.innerHTML = `${cardsArray[value - 1].todoInputText}, ${cardsArray[value - 1].date}`;
    mainContainer.append(container);
}

const showCompletedBtn = document.querySelector('.show__completed-button');
showCompletedBtn.addEventListener('click', () => {
    const completedTasks = document.createElement('div');
    completedArray.forEach((value) => {
        update(value, completedTasks);
    });
});