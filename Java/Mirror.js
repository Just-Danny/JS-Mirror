//TITLE
var title= document.createElement("title");
var t= document.createTextNode("I Love HTML!!!");
title.appendChild(t);
document.head.appendChild(title);


document.body.style.backgroundColor="cornflowerblue";


//H1 Tag
var division=document.createElement("div");
var tage = document.createElement("h1");
var main = document.createTextNode("HTML Practice Exercise");
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
para.id="ital3";
document.getElementById("ital3").style.fontStyle="italic";

//li tags
var olist=document.createElement("ol");
var l1 = document.createElement("li");
var main4 = document.createTextNode("I learned it quickly");
olist.appendChild(l1);
l1.appendChild(main4);


var l2 = document.createElement("li");
var main5 = document.createTextNode("I can make web pages using code.");
olist.appendChild(l2);
l2.appendChild(main5);
olist.appendChild(l2);

var l3 = document.createElement("li");
var main6 = document.createTextNode("It is fun");
l3.appendChild(main6);
olist.appendChild(l3);
division.appendChild(olist);

//img tag
var pic = document.createElement("IMG");
pic.src="image/one.jpg";
pic.id="size";
division.appendChild(pic);
document.getElementById("size").style.width="100px";
document.getElementById("size").style.height="100px";

//Second Hr tag
var newline2 =document.createElement("hr");
var main7 = document.createTextNode("");
newline2.appendChild(main7);
division.appendChild(newline2);

//second Paragraph tag
var para2 = document.createElement("p");
var main8 = document.createTextNode("My professor's e-mail addresss is ")
var atag= document.createElement("a");
var Awords = document.createTextNode("clarketb@imu.edu");
atag.href="mailto:clarketb@imu.edu";
para2.appendChild(main8);
atag.appendChild(Awords);
para2.appendChild(atag);
division.appendChild(para2);

//H3 tag
var tage3 = document.createElement("h3");
var main3 = document.createTextNode("Have a great day!");
tage3.appendChild(main3);
division.appendChild(tage3);