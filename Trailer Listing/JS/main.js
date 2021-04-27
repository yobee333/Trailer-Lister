//year counter for drop-down
for(let i=1980; i<=2021; i++){
    document.getElementById('year').innerHTML += `<option value="${i}">${i}</option>`
}


//submit title and bullets for listing

document.querySelector('#submit').addEventListener('click', fillInTheBlanks)
document.querySelector('#submit').addEventListener('click', redLetters)
document.querySelector('#submit').addEventListener('click', bullets)
document.querySelector('#submit').addEventListener('click', transfer)



function fillInTheBlanks(){
const year = Number(document.querySelector('#year').value)
const make = document.querySelector('#make').value
let header = (('<meta name="viewport" content="width=device-width, initial-scale=1.0">'+ '<h1><font size="5" style="font-family:Tahoma">') +'We offer a ' +year+' '+make+  ' dry van trailer, 48\' x 96".'+('</font></h1>'))


document.querySelector('h3').innerText = header
}

//red letters that show up in the mobile description
function redLetters(){
    console.log('<font size="4" style="font-family:Tahoma">'+' <font color="red"><b>'+'<div vocab="http://schema.org/" typeof="Product"><span property="description">')

}

//bullet points
function bullets(){
    let door = document.querySelector('#door').value
    let roof = document.querySelector('#roof').value
    let suspension = document.querySelector('#suspension').value
    
}

//Extra code I will need for the listings

/*<font size="4" style="font-family:Tahoma">

<font color="red"><b>
<div vocab="http://schema.org/" typeof="Product"><span property="description">

<li>Rebuilt 7/31/2016.</li>
<li>Roll up door.</li>
<li>Spring ride.</li>
<li>Metal roof.</li>
<li>Floor has patches.</li>
<li>Door damaged.</li>
<li>Wear and tear.</li>



</span></div></font></b>



<font size="4" style="font-family:Tahoma"></font>*/