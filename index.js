let btCal = document.querySelector('.but')
let sideBar = document.querySelector('.sidebar')
let body = document.querySelector('body')
let switch2 = document.getElementById('switch2')
let switchPrime = document.getElementById('switch')
let text = document.querySelectorAll('.text');
let mainText = document.querySelectorAll('.mainText');
let type = document.querySelectorAll('.next')
let men = 1;

btCal.addEventListener('click' , ()=>{
    body.classList.toggle('net');
    men++ ;
    if(men%2 === 0){
        switch2.innerText="Night"
        switch2.style.color="silver"
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "silver";
        }
        for(let i = 0 ; i< mainText.length ; i++){
            mainText[i].style.color = "silver"
        }
        for(let i = 0 ; i< type.length ; i++){
            type[i].style.color = "silver"
        }
        sideBar.style.backgroundColor="#242526";
        switchPrime.src="bxs-moon.svg";
    }else{
        switch2.innerText="Day"
        switch2.style.color="black"
        //text.style.color="black"
        for (let i = 0; i < text.length; i++) {
            text[i].style.color = "black";
        }
        for(let i = 0 ; i< mainText.length ; i++){
            mainText[i].style.color = "black"
        }
        for(let i = 0 ; i< type.length ; i++){
            type[i].style.color = "black"
        }

        sideBar.style.backgroundColor="silver";
        switchPrime.src="bx-sun.svg";
    }
});
