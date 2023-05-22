let html = document.querySelector('html');
html.setAttribute('lang', 'en');
let title = document.createElement('title');
title.innerHTML = 'Document';
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
let link = document.createElement('link');
link.setAttribute('rel', 'stylesheet')
link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:ital,wght@0,700;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
document.head.appendChild(title);
document.head.appendChild(metaUtf8);
document.head.appendChild(link);

let divHead = document.createElement('div');
divHead.classList.add('divHead');
document.body.appendChild(divHead);

let h1 = document.createElement('h1');
h1.innerHTML = 'Choose Your Option';
divHead.appendChild(h1);
let h2 = document.createElement('h2');
h2.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
divHead.appendChild(h2);

let div1 = document.createElement('div');
div1.classList.add('blocks');
document.body.appendChild(div1);
let block1 = document.createElement('div');
block1.classList.add('block1');
div1.appendChild(block1);

let div1h3 = document.createElement('h3');
div1h3.innerHTML = 'FREELANCER';
block1.appendChild(div1h3);
let div1h4 = document.createElement('h4');
div1h4.innerHTML = 'Initially designed to';
block1.appendChild(div1h4);
let div1h5 = document.createElement('h5');
div1h5.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
block1.appendChild(div1h5);
let button1 = document.createElement('button');
button1.innerHTML = 'START HERE';
block1.appendChild(button1);

let block2 = document.createElement('div');
block2.classList.add('block2');
div1.appendChild(block2);

let div2h3 = document.createElement('h3');
div2h3.innerHTML = 'STUDIO';
block2.appendChild(div2h3);
let div2h4 = document.createElement('h4');
div2h4.innerHTML = 'Initially designed to';
block2.appendChild(div2h4);
let div2h5 = document.createElement('h5');
div2h5.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
block2.appendChild(div2h5);
let button2 = document.createElement('button');
button2.innerHTML = 'START HERE';
block2.appendChild(button2);

let style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
    }

    .divHead{
        text-align: center;
        width: 464px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 122px;
    }

    h1{
        font-family: 'Arvo';
        font-weight: 400;
        font-size: 36px;
        line-height: 48px;
        text-align: center;
        color: #212121;
        }

    h2{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        color: #9FA3A7;
        margin-top: 10px;
    }

    .blocks{
        display: flex;
        margin-left: auto;
        margin-right: auto;
        margin-top: 55px;
        margin-bottom: 139px;
        width: 800px;
        border: 1px solid #E8E9ED;
        border-radius: 6px;
    }

    .block1{
        width: 400px;
        height: 480px;
    }

    .block2{
        width: 400px;
        height: 480px;
        background-color: #8F75BE;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border-radius: 0 6px 6px 0;
    }

    h3{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
    }

    h4{
        font-family: 'Arvo';
        font-weight: 400;
        font-size: 36px;
        line-height: 46px;
        text-align: center;
        width: 210px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 19px;
    }

    h5{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        width: 210px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25px;
    }

    button{
        font-family: 'Montserrat';
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 2.4px;
        width: 147px;
        height: 46px;
        border: 3px solid #FFC80A;
        border-radius: 30px;
        margin-left: 125px;
        cursor: pointer;
    }

    .block1 h3{
        color: #9FA3A7;
        margin-top: 81px;
    }

    .block2 h3{
        color: #FFC80A;
        margin-top: 83px;
    }

    .block1 h4{
        color: #212121;
    }

    .block2 h4,
    .block2 h5{
        color: #FFFFFF;
    }

    .block1 h5{
        color: #9FA3A7;
    }

    .block1 button{
        background-color: #fff;
        color: #212121;
        margin-top: 52px;
    }

    .block2 button{
        background-color: #8F75BE;
        color: #FFFFFF;
        margin-top: 58px;

    }
`;

document.head.appendChild(style);







