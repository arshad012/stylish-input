
document.getElementById('submit').addEventListener('click', getInformation);
const error_message = document.querySelector('.error-message');

const allInputBox = document.querySelectorAll('.input-box');

allInputBox.forEach((inputBox) => {
    inputBox.addEventListener('click', () => {
        error_message.classList.remove('error-message-show');

        const label = inputBox.querySelector(`input + .input-label`);
        const input = inputBox.querySelector(`input`);
        input.focus();

        input.addEventListener('input', (e) => {
            if(e.target.value != '') {
                label.classList.add('filled-input-label');
                input.classList.add('filled-input');
            } else {
                label.classList.remove('filled-input-label');
                input.classList.remove('filled-input');
            }
        })

    })
})

function getInformation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    if(name != '' && email != '' && age != '') {
        const message = `Heyy I know about you! You are ${name} and you ${age} years old and you use ${email} as your email id.. Ok OK don't cry I won't hack your system..`;
        alert(`Heyy I know about you! You are ${name}`);
        alert(`And you are just ${age} years old`);
        alert(`And you use ${email} as your email id..`);
        alert(`Ok OK don't cry I won't hack your system..`);
        alert('Enjoy!!!');
        window.location.reload();
    }
    else {
        error_message.classList.add('error-message-show');
    }
}