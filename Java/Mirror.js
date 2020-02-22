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
document.getElementById("ital").style.textAlign="center";


//H2 Tag
var tage2 = document.createElement("h2");
var main2 = document.createTextNode("James Madison University");
tage2.appendChild(main2);
division.appendChild(tage2);
tage2.id="ital2";
document.getElementById("ital2").style.textAlign="center";
document.getElementById("ital2").style.color="purple";
document.getElementById("ital2").style.textDecoration="underline";


//Hr Tag
var newline =document.createElement("hr");
var main3 = document.createTextNode("");
newline.appendChild(main3);
division.appendChild(newline);


//paragraph tag
var  para = document.createElement("p");
var main3 = document.createTextNode("I love HTML because:");
para.appendChild(main3);
division.appendChild(para);

//li tags
var l1 = document.createElement("li");
var main4 = document.createTextNode("I learned it quickly");
l1.appendChild(main4);
division.appendChild(l1);

var l2 = document.createElement("li");
var main5 = document.createTextNode("I can make web pages using code.");
l2.appendChild(main5);
division.appendChild(l2);

var l3 = document.createElement("li");
var main6 = document.createTextNode("It is fun");
l3.appendChild(main6);
division.appendChild(l3);


//Second Hr tag
var newline2 =document.createElement("hr");
var main7 = document.createTextNode("");
newline2.appendChild(main7);
division.appendChild(newline2);

//second Paragraph tag
var para2 = document.createElement("p");
var main8 = document.createTextNode("My professor's e-mail addresss is ");
para2.appendChild(main8);
division.appendChild(para2);
/*var head=document.createElement("h1");
var h=document.createTextNode("HTML practice Exercise");
head.appendChild(h);
document.body.appendChild(head);*/
