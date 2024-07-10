const inputElement = document.querySelector('#input-field');
const btnElement = document.querySelector('.btn');
const listItem = document.querySelector('.list-item');

btnElement.addEventListener('click', function() {
    if(inputElement === '') {
        alert('Please enter your task first')
    } else {
        let listElem = document.createElement('li');
        listElem.textContent = inputElement.value;
        listItem.appendChild(listElem);
        let crossEle = document.createElement('span');
        crossEle.textContent = '\u00d7';
        // let crossIcon = document.createElement('img');
        // crossIcon.src = './images/times-circle.svg'
        listElem.appendChild(crossEle);
    }
    inputElement.value = "";
    saveLi();
})
listItem.addEventListener('click', function(e) {
  if ( e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
        saveLi();
    } else if(e.target.tagName == 'SPAN') {
        e.target.parentElement.remove();
        saveLi();
    }

})

function saveLi() {
    localStorage.setItem("task", listItem.innerHTML);
}
function getElem() {
    listItem.innerHTML = localStorage.getItem('task');
}

getElem();