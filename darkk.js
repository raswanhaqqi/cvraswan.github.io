let body = document.getElementById('body');
function darkMode() {
    if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode')
    } else {
        body.classList.add("dark-mode")
    }
}

window.onbeforeunload = () =>{
    for(const from of document.getElementsByTagName("form")){
        from.reset();
    }
};