function increase(fruitName) {
  var elem = document.getElementById(fruitName);
  var value = parseInt(elem.innerText);

  value++;
  elem.innerText = value;
}

function dicrease(fruitName){
    var elem = document.getElementById(fruitName)
    var value = parseInt(elem.innerText)
    if(value>1){
        value--;
    }
    elem.innerText = value
}