function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

function setArrayCookie(name, array, days) {
    setCookie(name, JSON.stringify(array), days);
}

function getArrayCookie(name) {
    var cookie = getCookie(name);
    return cookie ? JSON.parse(cookie) : [];
}

function appendToArrayCookie(name, obj, days) {
    console.log("sdasdfs");
    console.log(name);
    console.log(obj);
    var array = getArrayCookie(name);
    array.push(obj);
    setArrayCookie(name, array, days);
}

function updateArrayCookie(name, obj, index, days) {
    var array = getArrayCookie(name);
    if (index >= 0 && index < array.length) {
        array[index] = obj;
        setArrayCookie(name, array, days);
    }
}

function deleteFromArrayCookie(name, index, days) {
    var array = getArrayCookie(name);
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
        setArrayCookie(name, array, days);
    }
}

