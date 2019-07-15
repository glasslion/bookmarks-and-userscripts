var text = window.prompt('Enter the message to push, or leave empty and push the current url.');
if (text=="") {
    text=window.location.href
}
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.pushover.net/1/messages.json');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    token: 'APP_TOKEN',
    user: 'USER_KEY',
    message: text,
    priority:-1
}));
