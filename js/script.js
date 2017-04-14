window.onload = function(){

document.getElementById('plus').addEventListener('click', function(){
  checkOp();
   document.getElementById('display').value += '+';
})
document.getElementById('equals').addEventListener('click', function(){
//  console.log(calcInput.value);
equals();
})

document.getElementById('minus').addEventListener('click', function(){
//  console.log(calcInput.value);
checkOp();
document.getElementById('display').value += '-';
})
document.getElementById('divide').addEventListener('click', function(){
//  console.log(calcInput.value);
  checkOp();
  document.getElementById('display').value += '/';
})
document.getElementById('decimal').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += '.';
})
document.getElementById('multiply').addEventListener('click', function(){
//  console.log(calcInput.value);
checkOp();
document.getElementById('display').value += '*';
})
document.getElementById('one').addEventListener('click', function(){
//  console.log(calcInput.value);

 document.getElementById('display').value += 1;
})
document.getElementById('two').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 2;
})
document.getElementById('three').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 3;
})
document.getElementById('four').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 4;
})
document.getElementById('five').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 5;
})
document.getElementById('six').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 6;
})
document.getElementById('seven').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 7;
})
document.getElementById('eight').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 8;
})
document.getElementById('nine').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 9;
})
document.getElementById('zero').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value += 0;
})
document.getElementById('clear').addEventListener('click', function(){
//  console.log(calcInput.value);
  document.getElementById('display').value = "";
})

 var calcInput = document.getElementById('display');



function checkOp (){
  // This function is determining if a user has used any of the operators
  // if any operators have been used then call equals function

  var x = calcInput.value.split('');
  for (i = 0; i < x.length; i++){
    if (x[i] === '-' || x[i] === '+'  || x[i] === '*' || x[i] === '/'){
      equals();
    }
  }
}

function equals () {
// This is determining what function to call baseed on what operator is used in the string

    var x = calcInput.value.split('');
    for (i = 0; i < x.length; i++){
      if (x[i]  == '+'){
        plusPrep();
        console.log('plus')
      }
      else if (x[i] == '-'){
        minusPrep();
          console.log('minus')
      }
      else if (x[i] == '/'){
        dividePrep();
          console.log('dive')
      }
      else if (x[i] == '*'){
        multiplyPrep();
          console.log('times')
      }
    }
}

function plusPrep(){
      var x = calcInput.value.split('+');
      console.log(x);
      plus(x[0],x[1]);
  }
function plus(x,y){
  x = parseInt(x);
  y = parseInt(y);

   document.getElementById('display').value = x + y;
}

function minusPrep(){
      var x = calcInput.value.split('-');
      console.log(x);
      minus(x[0],x[1]);
  }
function minus(x,y){
  x = parseInt(x);
  y = parseInt(y);

   document.getElementById('display').value = x - y;
}

function multiplyPrep(){
      var x = calcInput.value.split('*');
      console.log(x);
      multiply(x[0],x[1]);
  }
function multiply(x,y){
  x = parseInt(x);
  y = parseInt(y);

   document.getElementById('display').value = x * y;
}

function dividePrep(){
      var x = calcInput.value.split('/');
      console.log(x);
      divide(x[0],x[1]);
  }
function divide(x,y){
  x = parseInt(x);
  y = parseInt(y);

   document.getElementById('display').value = x / y;
}

}//end of onload
