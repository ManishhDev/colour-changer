const buttons = document.querySelectorAll(".button");// we selected all the buttons.
const body = document.querySelector("body") // selected body.

buttons.forEach(function(button){  // forEach--> Go to each button one by one.

    button.addEventListener('click',function(e){  //event kuchh bhi hoga sab tell karega 
      console.log(e);
      console.log(e.target);
      if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'blue'){
        body.style.backgroundColor = e.target.id;
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
      }
     if (e.target.id === 'black') {
       body.style.backgroundColor = 'black';
       body.style.color = 'white';    // text becomes white
      }

    });
});