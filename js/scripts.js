
let messSec = document.querySelector('.get-in-touch_body');
let messBtn = document.createElement('button');

messBtn.innerText = 'Get Invovled';
messBtn.classList.add = 'button';

messSec.appendChild(messBtn);


formBtn.addEventListener('click', function() {
    var form = document.getElementById('form');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});



function loadEvents() {
    var mailString;
    function updateMailString() {
        mailString = '?subject=' + encodeURIComponent(document.getElementById('subject')) + '&body=' + encodeURIComponent(document.getElementById('message').nodeValue());
        document.getElementById('mail-link').setAttribute('href', 'mailto:mallory.hyneman@gmail.com' + mailString);

        document.querySelector('#subject').focusout(function() {updateMailString(); });
        document.querySelector('#message').focusout(function() { updateMailString(); });
        updateMailString();
    }
}
console.log('i work');