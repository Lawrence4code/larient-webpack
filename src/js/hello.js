import '../css/hello.css'

const hello = () => {
  console.log('hello');
}

const button = document.createElement('button');

button.innerText = 'click';

const foundation = document.getElementById('foundation');
console.log(foundation);

foundation.appendChild(button);




hello();


export default hello;