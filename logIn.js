
//Email: gic@gmail.com
//Password: Gic123

const verify = getCookie("email");
if (verify == "gic@gmail.com") {
    document.getElementsByClassName("home")[0].style.visibility = 'visible';
    document.getElementsByClassName("log_in")[0].style.visibility = 'hidden';
} else {
    document.getElementsByClassName("home")[0].style.visibility = 'hidden';
    document.getElementsByClassName("log_in")[0].style.visibility = 'visible';
}

document.getElementById("btn_login").addEventListener("click", function(event) {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const em = email;


    if (email == "gic@gmail.com" && password == "Gic123") {
        setCookie(em);
        document.getElementsByClassName("log_in")[0].style.visibility = 'hidden';
        document.getElementsByClassName("home")[0].style.visibility = 'visible';

        document.getElementById("email").value = ""; //remove input
        document.getElementById("password").value = "";
    } else if (!email || !password) {
        alert("Input an email or password");
    } else {
        alert("Wrong password or email!");
    }
});

document.getElementById("btn_logout").addEventListener("click", function() {
    document.cookie = "email=gic@gmail.com; expires=Thu, 18 Dec 2013 12:00:00 UTC"; //remove cookie
    document.getElementsByClassName("home")[0].style.visibility = 'hidden';
    document.getElementsByClassName("log_in")[0].style.visibility = 'visible';
});

function setCookie(cname) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 30;
    now.setTime(expireTime);
    document.cookie = 'email=' + cname + ';expires=' + now.toUTCString() + ';path=/';
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}