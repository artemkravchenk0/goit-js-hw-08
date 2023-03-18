import throttle from 'lodash.throttle';

const refs = {
    formEl: document.querySelector('.feedback-form'),
    emailEl: document.querySelector('[name=email]'),
    messageEl: document.querySelector('[name=message]')

}
const onInputForm = (evt) => {
  
    const formData = {
        email: refs.emailEl.value,
        message: refs.messageEl.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

refs.formEl.addEventListener('input', throttle(onInputForm, 500));


let formData = localStorage.getItem('feedback-form-state');



if (formData !== null){
    formData = JSON.parse(formData)

    refs.emailEl.value = formData.email
    refs.messageEl.value = formData.message
}

refs.formEl.addEventListener('submit', (evt) =>{
    evt.preventDefault();
    let formData = localStorage.getItem('feedback-form-state');
    console.log(JSON.parse(formData));
    localStorage.removeItem('feedback-form-state')
    let form = refs.formEl
    form.reset()
})