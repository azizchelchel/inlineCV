// let photo=document.getElementById('photo');
// display nom
let nom=document.getElementById('nom');
let dispnom=document.getElementById('dispnom');
nom.onkeyup=function(){
   dispnom.innerHTML = `<li class='disp'>
   ${nom.value}</li>`;
};
// display prenom
let prenom=document.getElementById('prenom');
let dispprenom=document.getElementById('dispprenom');
prenom.onkeyup=function(){
   dispprenom.innerHTML = `<li class='disp'>
   ${prenom.value}</li>`;
};

// display e-mail

let email=document.getElementById('email');
let dispemail=document.getElementById('dispemail');
email.onkeyup=function(){
   dispemail.innerHTML = `<li class='disp'>
   ${email.value}</li>`;
};

// display tel number

let tel=document.getElementById('tel');
let disptel=document.getElementById('disptel');
tel.onkeyup=function(){
   disptel.innerHTML = `<li class='disp'>
   ${tel.value}</li>`;
};

//  display adress

let adr=document.getElementById('adr');
let dispadr=document.getElementById('dispadr');
adr.onkeyup=function(){
   dispadr.innerHTML = `<li class='disp'>
   ${adr.value}</li>`;
};

// display code postal

let codpos=document.getElementById('codpos');
let dispcodpos=document.getElementById('dispcodpos');
codpos.onkeyup=function(){

   dispcodpos.innerHTML = `<li class='disp'>
   ${codpos.value}</li>`;
};


// display site web

let siteweb=document.getElementById('siteweb');
let dispsiteweb=document.getElementById('dispsiteweb');
siteweb.onkeyup=function(){
    dispsiteweb.innerHTML = `<li class='disp'>
    ${siteweb.value}</li>`;
 };



// display profil

let profil=document.getElementById('profil');
let dispprofil=document.getElementById('dispprofil');
profil.onkeyup=function(){
   
   dispprofil.innerHTML = `<li class='disp'>
   ${profil.value}</li>`;
};


// ajouter competence

let addcomp=document.getElementById('addcomp');

addcomp.onclick=function(){
    let comp=document.getElementById('comp');
    let num = document.querySelectorAll('.comp').length;

    comp.insertAdjacentHTML("beforeend",

    `<ul id="comp_container${num}">
    
         <li>
            <input type="text" onkeyup='autotype("comp${num}","iddisp${num}")'  class='comp' 
            
            id="comp${num}">

         </li>

         <li>

            <button   onclick='delcomp("comp_container${num}","iddisp${num}"
         
            )' type="" id="compdel${num}">del</button>
         </li>
      </ul>`);
    


    // display la nouvelle competence

   let dispcomp=document.getElementById('competences');

    dispcomp.insertAdjacentHTML("beforeend",
    `<ul id="iddisp${num}">
         <li>
        
         <p type="text" class='comp' id="dispcomp${num}"></p>
      
         </li>
  
   </ul>`)

}

    
// supprimer une competence


function delcomp(idcomp,iddisp){
   document.getElementById(idcomp).remove();
   document.getElementById(iddisp).remove();
}



function autotype(compid,dispcompid)
{
   
   document.getElementById(dispcompid).innerHTML=`<div>
   <p> ${document.getElementById(compid).value}</p></div>`

}





