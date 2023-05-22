let Automobile = function(){
   this.power = prompt('Введите объем двигателя');
};

let Chrysler = function(power){
    Automobile.apply(this, arguments);

    this.newElem = function(tag){
        let body = document.querySelector('body')
        let elem = document.createElement(tag);
        body.appendChild(elem);
    }

    this.attr = function(tag, attribute, value){
        if(!tag) return;
        let elem = document.querySelector(tag);
        elem.setAttribute(attribute, value);
    }

    this.html =  function(tag, text){
        if(!tag) return;
        let elem = document.querySelector(tag);
        elem.innerHTML = text;
    }

    this.addClass = function(tag, className){
        if(!tag) return;
        let elem = document.querySelector(tag);
        elem.classList.add(className)
    }

    this.removeClass = function(tag, className){
        if(!tag) return;
        let elem = document.querySelector(tag);
        if(!elem.classList.contains(className)) return;
        elem.classList.remove(className)
    }

    this.toggleClass = function(tag, className){
        if(!tag) return;
        let elem = document.querySelector(tag);
        elem.classList.toggle(className);
    }

    this.hasClass = function(tag, className){
        if(!tag) return;
        let elem = document.querySelector(tag);
        if (!elem.classList.contains(className)){
            return false, console.log('false');
        }else{
            return true, console.log("true");
        }
    }
};

let chrysler = new Chrysler();
console.log(chrysler);

    chrysler.newElem('h1');
    chrysler.attr('h1', 'href', '#');
    chrysler.html('h1', 'Chrysler');
    chrysler.addClass('h1', 'title');
    chrysler.addClass('h1', 'titleH1');
    chrysler.removeClass('h1', 'title');
    chrysler.toggleClass('h1', 'rem');
    chrysler.hasClass('h1', 'rem');
    console.log(chrysler);






