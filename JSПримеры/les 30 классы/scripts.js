class Note{
    #data;

    constructor(){
        this.#data = null;
    }

    get data(){
        return this.#data;
    }

    set data(data){
        if (data.title) this.#data = data;
    }

    edit(data){
        Object.assign(this.#data, data);
    }
}

class Notes{
    constructor(){
        this.notes = [];
    }

    add(data){
        if (!Object.title) return;

        let note = new Note();
        note.data = data;
        let id = this.getRandomId()
        note.edit({id});
        this.notes.push(note);
    }

    getRandomId(){
        let id = Math.floor(Math.random() * 100);
        if (this.notes.length === 0) return id;

        let flag = this.notes.some(note => note.data.id === id);
        if (flag){
            return this.getRandomId();
        }else{
            return id;
        }
    }

    edit(id, data){
        this.notes.forEach(note => {
            if (note.data.id === id){
                note.edit(data);
            }
        });
    }

    remove(id){
        this.notes = this.notes.filter(note => note.data.id !== id);
    }
}

class NoteUI extends Notes{
    constructor(selector){
        super();
        this.container = null;
        this.noteContainer = null;
        this.init(selector);
    }

    init(selector){
        
    }
}


