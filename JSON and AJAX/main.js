var btn = document.getElementById("btn");


// XMLHttpRequest allows the browser to connect to the 
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');

ourRequest.onload = function(){
    //console.log(ourRequest.responseText); 
    var ourData = JSON.parse(ourRequest.responseText)   //ourRequest.responseText;
    console.log(ourData[0]);
};
ourRequest.send();