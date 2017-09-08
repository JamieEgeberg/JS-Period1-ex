import _ from "lodash";
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'

function Person(fn, ln, s) {
  this.firstName = fn;
  this.lastName = ln;
  this.favoriteSport = s;
}

const persons = [
  new Person("Kurt", "Wonnegut", "Socker"),
  new Person("Jan", "Peterson", "Hockey"),
  new Person("Jane", "Peterson", "Skating"),
  new Person("John", "Hansen", "Socker"),
]

function makeTable(data) {
  let table = document.createElement('table');
  table.classList.add('table');
  let thead = table.createTHead();
  let keys = [];
  if (data.length > 0) keys = Object.keys(data[0]);
  else return undefined;

  let theadRow = thead.insertRow();
  keys.forEach(key => theadRow.insertCell().innerHTML = key);

  let tbody = table.createTBody();
  data.forEach(d => {
    let row = tbody.insertRow();
    keys.forEach(key => row.insertCell().innerHTML = d[key]);
  });

  return table;
}

// You must implement the makeTable(..) function, used below:
const table = makeTable(persons);
document.getElementById('my-table').appendChild(table);


/* import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  var element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack', 'Pindis!','\n'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  const name = 'Pindis!';
  setTimeout(() => alert(`Hello there from ${name}`), 1000);

  return element;
}

document.body.appendChild(component()); */