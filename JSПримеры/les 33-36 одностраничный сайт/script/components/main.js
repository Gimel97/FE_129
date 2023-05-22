/*import home from '../pages/home.js';
import catalog from '../pages/catalog.js';
import about from '../pages/about.js';
import contacts from '../pages/contacts.js';*/
import router from "./router.js"

export default function main(){
    const main = document.createElement('main');
    main.classList.add('main');

    const render = async () => {
        main.innerHTML = '';
        let [module, id] = await router();
        main.append(module(id));
    }    

    window.addEventListener('load', render)
    window.addEventListener('hashchange', render);
    return main;
}