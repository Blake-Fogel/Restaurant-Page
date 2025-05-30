export default function loadContact() {
    let container = document.createElement('div');
    container.style.display = 'flex';
    container.style.fontSize = '1.5em';
    container.style.gap = '10px';
    container.style.height='30%';
    container.style.flexDirection = 'column';
    let nameInput = document.createElement('input');
    nameInput.style.fontSize = '1em';
    nameInput.type = 'text';
    nameInput.placeholder = 'Name';
    let commentInput = document.createElement('textarea');
    commentInput.style.fontSize = '1em';
    commentInput.style.flexGrow = '2';
    commentInput.placeholder = 'Input your comment/feedback here.';
    let submitButton = document.createElement('button');
    submitButton.style.fontSize = '1em';
    submitButton.innerText = 'Submit';
    submitButton.addEventListener('click',(event) => {
        nameInput.value = '';
        commentInput.value = '';
        console.log('gay')
    });
    container.appendChild(nameInput);
    container.appendChild(commentInput);
    container.appendChild(submitButton);
    this.appendChild(container);
}