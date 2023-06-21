let settingMenu = document.querySelector(".settings-menu")
let darkbtn = document.getElementById("dark-btn")

function settingMenuToggle(){
    settingMenu.classList.toggle("settings-menu-height")
   
}


darkbtn.onclick = function(){
    darkbtn.classList.toggle("dark-btn-on")
    document.body.classList.toggle("dark-theme")

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark")
    }
    else{
        localStorage.setItem("theme", "light")
        
    }
}


if(localStorage.getItem("theme") == "light"){
    darkbtn.classList.remove("dark-btn-on")
    document.body.classList.remove("dark-theme")
}
else if(localStorage.getItem("theme") == "dark"){
    darkbtn.classList.add("dark-btn-on")
    document.body.classList.add("dark-theme")
}
else{
    localStorage.setItem("theme", "light")
}



// how to use localStorage

// we add two values 
// #name of theme
// #value of dark

// localStorage.setItem("theme", "dark")
// localStorage.getItem("theme")