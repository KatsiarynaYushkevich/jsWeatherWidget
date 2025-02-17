/*По данному url расположена задача.
В html предусмотреть <div></div>
Достать с сервера заголовок задачи и отобразить его в div.
*/
const div = document.querySelector("div");

let connection = new XMLHttpRequest();
connection.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
connection.send();


connection.onload = function(){
   const responseObj = JSON.parse(connection.response);
    div.innerHTML = responseObj.title;
};

/*Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи.
*/
const ulElement = document.querySelector("ul");

let anotherConnection = new XMLHttpRequest();
anotherConnection.open('GET', 'https://jsonplaceholder.typicode.com/todos');
anotherConnection.send();

anotherConnection.onload = function(){
    const responseArray = JSON.parse(anotherConnection.response);
    const liElement = document.createElement("li");
    for(let i = 0; i < 20; i++){
        const liElement = document.createElement("li");
        liElement.innerHTML = responseArray[i].title;
        ulElement.appendChild(liElement);
    }
};