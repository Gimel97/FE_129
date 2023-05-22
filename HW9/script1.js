function toDo(selector){
    let containerToDo = document.querySelector(selector);
    if (!containerToDo) return;

    let formToDo = containerToDo.querySelector(`${selector}_form`);
    if (!formToDo) return;

    let input = formToDo.querySelector('input');
    if (!input) return;

    let toDoList = containerToDo.querySelector(`${selector}_list`);
    if (!toDoList) return;

    let clearToDo = containerToDo.querySelector('.clear');
    if (!clearToDo) return;

    clearToDo.addEventListener('click', () => {
        toDoList.innerHTML = '';
    });

    formToDo.addEventListener('submit', function(event){
        event.preventDefault();
        if (!input.value) return;
        toDoList.append(createItem(input.value));
        input.value = '';
    });

    toDoList.addEventListener('click', event => {
        let target = event.target;
        if (target.tagName !== 'SPAN') return;
        target.classList.toggle('done');
        let check = target.previousElementSibling;
        if (target.classList.contains('done')){
            check.checked = true;
        }else{
            check.checked = false;
        }
    })

    const createItem = (toDoText) => {
        let item = document.createElement('li');
        item.classList.add('item');

        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');

        let text = document.createElement('span');
        text.classList.add('text');
        text.innerText = toDoText;

        let buttons = document.createElement('div');
        buttons.classList.add('item_buttons');

        let edit = document.createElement('button');
        edit.classList.add('item_buttons');
        edit.classList.add('edit');
        edit.innerHTML = 'Edit';

        let reset = document.createElement('button');
        reset.classList.add('item_buttons');
        reset.classList.add('reset');
        reset.innerHTML = 'Reset';

        reset.addEventListener('click', () => {
            item.remove();
        });

        edit.addEventListener('click', function(e){
            text.contentEditable = true;
            text.focus();
        });

        text.addEventListener('keydown', event => {
            if (event.altKey && event.code === 'Enter'){
                text.contentEditable = false;
            }
        });

        buttons.append(edit, reset);
        item.append(check, text, buttons);

        return item;
    }
}

toDo('.container');