class Note {
    constructor() {
        this._data = null;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        if (data.title) this._data = data
    }

    edit(data) {
        Object.assign(this._data, data);
    }
}

class Notes {
    constructor() {
        this.notes = [];
    }

    add(data) {
        if (!data.title) return;

        let note = new Note();
        note.data = data;
        let id = this.getRandomId()
        note.edit({ id });
        this.notes.push(note);
    }

    getRandomId() {
        let id = Math.floor(Math.random() * 100);
        if (this.notes.length === 0) return id;

        let flag = this.notes.some(note => note.data.id === id);
        if (flag) {
            return this.getRandomId();
        } else {
            return id;
        }
    }

    edit(id, data) {
        this.notes.forEach(note => {
            if (note.data.id === id) {
                note.edit(data);
            }
        });
    }

    remove(id) {
        this.notes = this.notes.filter(note => note.data.id !== id);
    }

    set store(data) {
        let json = JSON.stringify(data);
        localStorage.setItem('notes', json);
        this.cookie = 10;
    }

    get store() {
        if (!localStorage.getItem('notes')) return false;

        if (!this.cookie) {
            localStorage.removeItem('notes');
            return false;
        }

        let data = localStorage.getItem('notes');
        data = JSON.parse(data);
        return data;
    }

    get cookie() {
        let name = 'note';
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches || false;
    }

    set cookie(time) {
        let name = 'note';
        let value = 'note';
        let options = {
            path: '/',
            secure: true,
            'max-age': time
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }
}

class NoteUI extends Notes {
    constructor(selector) {
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    }

    init(selector) {
        this.container = this.search(null, selector);

        let formContainer = document.createElement('form');
        formContainer.classList.add('form');

        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('placeholder', 'Введите название заметки');

        let contentInput = document.createElement('input');
        contentInput.setAttribute('type', 'text');
        contentInput.setAttribute('placeholder', 'Введите текст заметки');

        let buttonAdd = document.createElement('button');
        buttonAdd.setAttribute('type', 'submit');
        buttonAdd.innerText = 'Добавить заметку';

        this.noteContainer = document.createElement('div');
        this.noteContainer.classList.add('note__container');

        formContainer.addEventListener('submit', event => {
            event.preventDefault();

            let title = titleInput.value;
            let content = contentInput.value;

            this.add({ title, content });

            titleInput.value = '';
            contentInput.value = '';
            this.render();
            this.store = this.notes;
        });

        formContainer.append(titleInput, contentInput, buttonAdd);
        this.container.append(formContainer, this.noteContainer);

        if (this.store) {
            let data = this.store;
            data.forEach(note => {
                Object.keys(note).forEach(key => this.add(note[key]));
            });
            this.render();
        }
    }

    search(target, selector) {
        target = target || document;
        return target.querySelector(selector);
    }

    render() {
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let flag = true;
            let noteContainer = document.createElement('div');
            noteContainer.classList.add('note__element');

            let h2 = document.createElement('h2');
            h2.classList.add('title');
            h2.innerText = note.data.title;

            let p = document.createElement('p');
            p.classList.add('content');
            p.innerText = note.data.content;

            let del = document.createElement('button');
            del.classList.add('del');
            del.innerText = 'Удалить заметку';
            del.addEventListener('click', () => {
                this.remove(note.data.id);
            });

            let edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerText = 'Редактировать заметку';
            edit.addEventListener('click', () => {
                if (flag) {
                    h2.contentEditable = true;
                    p.contentEditable = true;
                    edit.innerText = 'Сохранить изменения';
                    flag = !flag;
                } else {
                    let data = {
                        title: h2.innerText,
                        content: p.innerText,
                    }

                    h2.contentEditable = false;
                    p.contentEditable = false;

                    super.edit(note.data.id, data);
                    edit.innerText = 'Редактировать заметку';
                    flag = !flag;
                    this.store = this.notes;
                }

            });

            noteContainer.append(h2, p, edit, del);
            this.noteContainer.append(noteContainer);
        });
    }

    saveEdit(e, id, title, content) {
        if (e.altKey && e.code === 'Enter') {
            let data = {
                title: title.innerText,
                content: content.innerText
            }
            title.contentEditable = false;
            content.contentEditable = false;
            super.edit(id, data);
            console.log(this.notes);
        }
    }

    remove(id) {
        super.remove(id);
        this.render();
    }
}

new NoteUI('.container')
