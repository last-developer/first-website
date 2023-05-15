const popupButton = document.getElementsByClassName('popup-button')
const popup = document.getElementById('popup')
const removepopup = document.getElementById('removepopup')
const overlay = document.getElementById('overlay')
const submit = document.getElementById('submit')
const websiteBody = document.querySelector('body');

for (let index = 0; index < popupButton.length; index++) {
    popupButton[index].addEventListener('click', () => {
        popup.classList.add('active')
        overlay.classList.add('active')
        websiteBody.classList.add('modalopen');
    })
}

removepopup.addEventListener('click', () => {
    popup.classList.remove('active')
    overlay.classList.remove('active')
    websiteBody.classList.remove('modalopen');
})

myForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let body = 'Name: ' + name + '<br/> Email: ' + email + '<br/> Number: ' + number + '<br/> Message: ' + message;

    Email.send({
        SecureToken: "9909bbf5-376c-4d96-831c-dae683e5ec18",
        To: 'bridgetomohit@gmail.com',
        From: 'bridgetomohit@gmail.com',
        Subject: "Enqiry",
        Body: body

    }).then(
        alert("Message sent successfully"),
        document.getElementById("myForm").reset(),
        popup.classList.remove('active'),
        overlay.classList.remove('active'),
        websiteBody.classList.remove('modalopen')
    )

})


