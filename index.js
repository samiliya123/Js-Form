 const myForm = document.querySelector("#my-form");
 const msg = document.querySelector(".msg");
 const nameInput = document.querySelector("#name");
 const emailInput = document.querySelector("#email");
 const userList = document.querySelector('#users')

 

myForm.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'fill the form';
        msg.classList.add('error');
        setTimeout(() => msg.remove(), 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = ''
    }

    
}

 
 