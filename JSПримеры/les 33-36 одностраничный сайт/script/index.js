import header from "./components/header.js";
import main from "./components/main.js";
import footer from "./components/footer.js";

const root = document.getElementById('root');
root.append(header(), main(), footer());