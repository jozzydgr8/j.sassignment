var myName=("Akande Joshua");
var height=("(5ft 9)");
var nationality=("Nigeria");
alert(`I am ${myName} my height is ${height} and my nationality is ${nationality} tell me about yourself..`);
// grabbing user info to make an alert like i want to communicate.

var yourName=prompt("what is your name?");
// practicing slicing on user name

var firstCha=(yourName.slice(0,1).toLocaleUpperCase());
var restCha=(yourName.slice(1,yourName.length).toLowerCase());
// other info to be gotten from user

var age=prompt(`hello ${firstCha}${restCha} what is your age only?`);
// making age unified
var capAge=(age.slice(0,age.length).toLowerCase());

var yourHeight=prompt("How about your height?");
// making height unifiied incase of camelcasings or more
var capHeight=(yourHeight.slice(0,yourHeight.length).toLocaleLowerCase())

var yourNationality=prompt("Would love to also know your nationality 😊");
// capping nationality as it is a proper noun just for edifying purposes tho 

var yourNation=(yourNationality.slice(0,yourNationality.length).toLocaleUpperCase());

alert(`nice to meet you ${firstCha}${restCha} of ${yourNation} I hope i get to connect with you like a ${capAge} old mate 😉 and did you say you were ${capHeight} tall LET'S TALK MORE!!!`);

