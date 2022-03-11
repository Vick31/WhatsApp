
function mostrar() {
    document.getElementById('chat-person').style.right = '0';   
    document.getElementById('main-container').style.right = '100%'
}

function quitar() {
    document.getElementById('chat-person').style.right = '100%';
    document.getElementById('main-container').style.right = '0'
}

function mostrar_temas() {
    document.getElementById('temas').style.display = 'block';
}

function tema_claro() {
    document.getElementById('nav').style.background = '#008069';
    document.getElementById('nav-chat').style.background = '#008069';
    document.getElementById('main-container').style.background = '#ffffff';
    document.getElementById('main-container').style.color = '#000';
    
    var a = document.getElementsByClassName('men-1');
    for (var i = 0; i < a.length; i++) a[i].style.backgroundColor = '#ffffff';
    var b = document.getElementsByClassName('men-2');
    for (var i = 0; i < b.length; i++) b[i].style.backgroundColor = '#d9fdd3';
    var c = document.getElementsByClassName('mensaje-chat');
    for (var i = 0; i < c.length; i++) c[i].style.backgroundColor = '#ffffff';


    document.getElementById('menssage').style.color = '#000';
    document.getElementById('fondo').style.background = '#dcdcdc';
    document.getElementById('responder').style.background = '#dcdcdc'
    document.getElementById('responder').style.color = '#000'
    document.getElementById('temas').style.display = 'none';
}

function tema_oscuro() {
    document.getElementById('nav').style.background = '#202c33';
    document.getElementById('nav-chat').style.background = '#202c33';
    document.getElementById('main-container').style.background = '#111b21';
    document.getElementById('main-container').style.color = '#ffffff';

    var a = document.getElementsByClassName('men-1');
    for (var i = 0; i < a.length; i++) a[i].style.backgroundColor = '#202c33';
    var b = document.getElementsByClassName('men-2');
    for (var i = 0; i < b.length; i++) b[i].style.backgroundColor = '#005c4b';
    var c = document.getElementsByClassName('mensaje-chat');
    for (var i = 0; i < c.length; i++) c[i].style.backgroundColor = '#202c33';


    document.getElementById('menssage').style.color = '#ffffff';
    document.getElementById('fondo').style.background = '#111b21';
    document.getElementById('responder').style.background = '#171f24'
    document.getElementById('responder').style.background = '#ffffff'
    document.getElementById('temas').style.display = 'none';
}


tema_claro();