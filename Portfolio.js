//----------------------------------------
var root=document.querySelector(':root');
const cs=getComputedStyle(root);

const primaryColor=cs.getPropertyValue("--primary-color");
const secondaryColor=cs.getPropertyValue("--secondary-color");
const tertiaryColor=cs.getPropertyValue("--tertiary-color");
const quaternaryColor=cs.getPropertyValue("--quaternary-color");

const primaryColorBis=cs.getPropertyValue("--primary-color-bis");
const secondaryColorBis=cs.getPropertyValue("--secondary-color-bis");
const tertiaryColorBis=cs.getPropertyValue("--tertiary-color-bis");
const quaternaryColorBis=cs.getPropertyValue("--quaternary-color-bis");

//----------------------------------------
function showArea(id){
    toggleArea(id);
}


var currentarea=""
function toggleArea(id){
    id='#'+id;
    if(currentarea!=""){
        $(currentarea).css("display","none")
        if(currentarea==id){
            $(id).css("display","none")
        }
    }
    
    $(id).css("display","block")
    currentarea=id;
}

function menuHover(icon,value){
    if(value=="true"){
        $(icon).css("border-style","solid");
        $(icon).css("border-color",cs.getPropertyValue('--primary-color'));
        $(icon).css("border-radius","0.25em 0.50em ");
        $(icon).css("border-width",'2px');
        $(icon).css("padding",'0.5rem');
        $(icon).css("cursor","pointer")
    }else{
        $(icon).css("border-style","none");
        $(icon).css("border-color","none");
        $(icon).css("border-radius","0");
        $(icon).css("border-width",'0');
        $(icon).css("padding",'0rem');
        $(icon).css("cursor","default")
    }
}

function toggleMenu(value){
    let menu =$("#option-menu")
    if(value=="true"){
        menu.css("display","block")
        menu.css("width","15%")
        menu.css("background-color",cs.getPropertyValue('--secondary-color'))
        menu.css("border-radius","0em 0.5em 0.5em 0em")
        menu.css("border","0.15rem solid"+cs.getPropertyValue('--tertiary-color'))
    }else{
        menu.css("display","none")
        
    }
}

function buttonHover(button,value){
    if(value=="true"){
        $(button).css("background-color",cs.getPropertyValue("--tertiary-color"))
    }else{
        $(button).css("background-color",cs.getPropertyValue('--primary-color'));
    }
}
var actualtheme="dark";
function themeSwitch(){
    if(actualtheme=="dark"){
        root.style.setProperty("--primary-color",primaryColorBis)
        root.style.setProperty("--secondary-color",secondaryColorBis)
        root.style.setProperty("--tertiary-color",tertiaryColorBis)
        root.style.setProperty("--quaternary-color",quaternaryColorBis)
        actualtheme="light";
    }else{
        root.style.setProperty("--primary-color",primaryColor)
        root.style.setProperty("--secondary-color",secondaryColor)
        root.style.setProperty("--tertiary-color",tertiaryColor)
        root.style.setProperty("--quaternary-color",quaternaryColor)
        actualtheme="dark"
    }
}



$(document).ready(function(){
    $("#aboutmebutton").click()
})