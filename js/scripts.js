
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
