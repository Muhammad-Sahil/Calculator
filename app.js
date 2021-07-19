var a = document.getElementById("value1")
function cal(num){
  a.value += num
}

function result(){
    a.value = eval(a.value)
}
function reset(){
    a.value = ""
    
}

