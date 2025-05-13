
import { Picture } from './picture.js';
import { attachImageEvents } from './events.js';

const app = document.getElementById('app');

app.innerHTML = Picture(1, "Jhon") + Picture(2, "Jane");

attachImageEvents("app");
