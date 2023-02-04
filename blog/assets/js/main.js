let open = document.getElementById("open");
let links = document.getElementById("links");
let follow = document.getElementById("follow");
let subscribe = document.getElementById("subscribe");

open.onclick = () => {
    links.classList.toggle('none');
}

follow.onclick = () => {
    if(follow.innerHTML == "Follow") {
        follow.innerHTML = "unFollow"
    }else {
        follow.innerHTML = "Follow"
    }
}

subscribe.onclick = () => {
    if(subscribe.innerHTML == "Subscribe") {
        subscribe.innerHTML = "unSubscribe"
    }else {
        subscribe.innerHTML = "Subscribe"
    }
}