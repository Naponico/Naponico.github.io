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

$(document).ready(function(){
    $("#aboutmebutton").click()
})