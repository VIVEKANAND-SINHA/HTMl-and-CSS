console.log("external JavaScript")
// console.log(document)
document.getElementById('p1').style.backgroundColor = 'red';
var para = document.getElementById("p1");
console.log(para);
para.style.backgroundColor = "yellow";
var para1 = document.getElementsByClassName('pa');
console.log(para1);
para1[0].style.backgroundColor = 'black';
para1[0].style.color = 'white';
for (var i = 0;i<para1.length; i++){
    para1[i].style.backgroundColor='lightgreen';
}
var para2 = document.getElementsByTagName("p");
console.log(para2);
for (var j = 0; j<para2.length;j++){
    para2[j].style.backgroundColor="white";
    para2[j].style.color = "red";
}
const loginId = "abc";
const password = "abc@123";
function getData(){
    var id = document.getElementById('id').value;
    var userpassword = document.getElementById('pass').value;
    console.log('id',id);
    console.log('password',userpassword);
    if (loginId != id){
        if (userpassword != password){
            alert("password incorret");

        }
        else{
            alert('successful');
        }
    }

    else{
            alert('wrong id')
        
        }
    }
