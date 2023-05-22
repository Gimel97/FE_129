//куки
(_ => {

window.addEventListener('load', _ => {
    
    const authInfo = {
        login: 'admin',
        password: 'nimba'
    };

    const getCookie = function(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }

    const auth = function(){
        let form = this.closest('.form'),
            inputLogin = form.querySelector('input[name="login"]').value,
            inputPass = form.querySelector('input[name="password"]').value;

            if(inputLogin === authInfo.login && 
                inputPass === authInfo.password) {
                    document.cookie = 'auth=true';
                    document.cookie = 'authLogin=' + inputLogin;
                    window.location = 'app.html';
                } 
            else {
                alert('Login or password is incorrect');
            } 
    };

    const logout = function(){
        if (!getCookie('auth') || !getCookie('authLogin')) return;

        document.cookie = 'auth=; max-age=-1';
        document.cookie = 'authLogin=; max-age=-1';

        if (!getCookie('auth')) window.location.reload();
    }

    if(window.location.pathname == '/app.html' && !getCookie('auth')) 
    window.location = '/index.html';

    if(window.location.pathname == '/index.html' && getCookie('auth') === 'true') 
        window.location = '/app.html';

    let buttonSignin = document.querySelector('.form .signin'),
        buttonLogout = document.querySelector('.contacts .logout');
    if (buttonSignin) buttonSignin.addEventListener('click', auth);
    if (buttonLogout) buttonLogout.addEventListener('click', logout);

        /*sessionStorage && localStorage*/
    
    let contactsData = [];
  
    const contactsUpdate = function(){

        let localContactsData = localStorage.getItem('contactsData');
        if (localContactsData.length > 0) contactsData = JSON.parse(localContactsData);

        let contactsList = document.querySelector('.contacts__list ul');
        contactsList.innerHTML = '';
        contactsData.forEach(function(contact, id){
        let elemContact = document.createElement('li');
        elemContact.innerHTML = `
            <div class="id">${id + 1}</div>
            <div class="name">${contact.name}</div>
            <div class="phone">${contact.phone}</div>
            `;
        contactsList.appendChild(elemContact);
    });
    };

    const contactAdd = function(){
        let form = this.closest('.form__add'),
            inputName = form.querySelector('input[name="name"]').value,
            inputPhone = form.querySelector('input[name="phone"]').value;

        if(inputName.length == 0 || 
            inputName == ' ' || 
            inputPhone.length == 0 || 
            inputPhone == ' ') return;

        let contact = {
            name: inputName,
            phone: inputPhone
        };

        contactsData.push(contact);
        localStorage.setItem('contactsData', JSON.stringify(contactsData));

        contactsUpdate();

    };

    const contactSave = function(){
        let form = this.closest('.form__add'),
            inputName = form.querySelector('input[name="name"]').value,
            inputPhone = form.querySelector('input[name="phone"]').value;

        if(inputName.length == 0 || 
            inputName == ' ' || 
            inputPhone.length == 0 || 
            inputPhone == ' ') return;
        
        sessionStorage.setItem('contactInputName', inputName);
        sessionStorage.setItem('contactInputPhone', inputPhone);
    };
    
    let buttonAdd = document.querySelector('.form__add .add'),
        buttonSave = document.querySelector('.form__add .save');

    if(buttonAdd) buttonAdd.addEventListener('click', contactAdd);
    if(buttonSave) buttonSave.addEventListener('click', contactSave);

    if(window.location.pathname == '/app.html') {
        contactsUpdate();

        sessionStorage.removeItem('contactInputName');
        sessionStorage.removeItem('contactInputPhone');

        let contactInputName = sessionStorage.getItem('contactInputName'),
            contactInputPhone = sessionStorage.getItem('contactInputPhone');

        if (contactInputName && 
            contactInputName.length > 0 && 
            contactInputPhone && 
            contactInputPhone.length > 0){
            let form = document.querySelector('.form__add'),
                inputName = form.querySelector('input[name="name"]'),
                inputPhone = form.querySelector('input[name="phone"]');

                inputName.value = contactInputName;
                inputPhone.value = contactInputPhone;
            };
    };

    

    /*document.cookie = 'user=Alex';
    document.cookie = 'login=user-alex';

    document.cookie = 'user=Bob';
    document.cookie = 'login=user-bob';
    document.cookie = 'info=' + encodeURIComponent('Далеко-далеко за словесными горами');

    console.log(decodeURIComponent('%D0%94%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE-%D0%B4%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE%20%D0%B7%D0%B0%20%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D1%81%D0%BD%D1%8B%D0%BC%D0%B8%20%D0%B3%D0%BE%D1%80%D0%B0%D0%BC%D0%B8'));

    document.cookie = 'user2=Peter; path=news/post/post1';
    document.cookie = 'user3=Mike; domain=127.0.0.1';

    let date = new Date(Date.now() + 20000);
    date = date.toUTCString();

    document.cookie = 'user4=Bill; expires=' + date;

    document.cookie = 'user5=Gates; max-age=20';

    document.cookie = 'user6=Alex; secure'

    console.log(document.cookie);*/
});

})();


//JSON

let courses = ['html', 'css', 'js'];

let student = {
    name: 'Bob',
    age: 30,
    courses: courses
};

let jsonCourses = JSON.stringify(courses),
    jsonStudent = JSON.stringify(student);

let arrCourses = JSON.parse(jsonCourses),
    objStudent = JSON.parse(jsonStudent);

let jsonUsers = '{"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}],"support":{"url":"https://reqres.in/#support-heading","text":"To keep ReqRes free, contributions towards server costs are appreciated!"}}'

console.log(jsonUsers, typeof jsonUsers);

let dataUsers = JSON.parse(jsonUsers);

console.log(dataUsers, typeof dataUsers);

console.log(dataUsers.data);

dataUsers.data.forEach(function(user){
    console.log(user.first_name);
});

let jsonContacts = `
[
    {
      "_id": "6432f387fd2ea49d104c48fe",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Lavonne Hammond",
      "gender": "female",
      "company": "ENOMEN",
      "email": "lavonnehammond@enomen.com",
      "phone": "+1 (821) 410-3878"
    },
    {
      "_id": "6432f3874ebd9005ffe59f7d",
      "picture": "http://placehold.it/32x32",
      "age": 20,
      "name": "Cooper Rodriguez",
      "gender": "male",
      "company": "OVOLO",
      "email": "cooperrodriguez@ovolo.com",
      "phone": "+1 (832) 543-2865"
    },
    {
      "_id": "6432f387edab6d7a8d264351",
      "picture": "http://placehold.it/32x32",
      "age": 35,
      "name": "Latoya Clements",
      "gender": "female",
      "company": "COSMETEX",
      "email": "latoyaclements@cosmetex.com",
      "phone": "+1 (800) 501-2267"
    },
    {
      "_id": "6432f387707d9235a9863c58",
      "picture": "http://placehold.it/32x32",
      "age": 28,
      "name": "Karyn Leach",
      "gender": "female",
      "company": "SUPPORTAL",
      "email": "karynleach@supportal.com",
      "phone": "+1 (958) 560-2979"
    },
    {
      "_id": "6432f387f4790ad59636d8cf",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Hull Michael",
      "gender": "male",
      "company": "COMVEY",
      "email": "hullmichael@comvey.com",
      "phone": "+1 (987) 423-2354"
    },
    {
      "_id": "6432f38789780cbca3d3e70f",
      "picture": "http://placehold.it/32x32",
      "age": 31,
      "name": "Hazel Rosa",
      "gender": "female",
      "company": "GOGOL",
      "email": "hazelrosa@gogol.com",
      "phone": "+1 (967) 564-3686"
    },
    {
      "_id": "6432f387e89607ec63c95bb5",
      "picture": "http://placehold.it/32x32",
      "age": 25,
      "name": "Estela Carter",
      "gender": "female",
      "company": "DIGIRANG",
      "email": "estelacarter@digirang.com",
      "phone": "+1 (953) 553-3909"
    },
    {
      "_id": "6432f387081588a0a703fa3b",
      "picture": "http://placehold.it/32x32",
      "age": 26,
      "name": "Stout Hawkins",
      "gender": "male",
      "company": "MINGA",
      "email": "stouthawkins@minga.com",
      "phone": "+1 (977) 482-3632"
    },
    {
      "_id": "6432f3877d746bff97384ebd",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "name": "Margarita Lynch",
      "gender": "female",
      "company": "REALYSIS",
      "email": "margaritalynch@realysis.com",
      "phone": "+1 (961) 599-2334"
    },
    {
      "_id": "6432f38731c6651cac0f8dae",
      "picture": "http://placehold.it/32x32",
      "age": 27,
      "name": "Nguyen Wilcox",
      "gender": "male",
      "company": "KOG",
      "email": "nguyenwilcox@kog.com",
      "phone": "+1 (825) 570-2623"
    }
  ];
`
console.log(jsonContacts, typeof jsonContacts);

let dataContacts = JSON.parse(jsonContacts);

console.log(dataContacts, typeof dataContacts);