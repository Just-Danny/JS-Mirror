//TITLE
var title= document.createElement("title");
var t= document.createTextNode("I Love HTML");
title.appendChild(t);

document.head.appendChild(title);

//H1 Tag
var division=document.createElement("div");
var tage = document.createElement("h1");
var main = document.createTextNode("HTML practice Exercise");
tage.appendChild(main);
document.body.appendChild(division);
division.appendChild(tage);
tage.id="ital";
document.getElementById("ital").style.fontStyle="italic";


/*var head=document.createElement("h1");
var h=document.createTextNode("HTML practice Exercise");
head.appendChild(h);
document.body.appendChild(head);*/
