function addUserData(){
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var doctortype = document.getElementById('doctortype').value;
    console.log(name);
    console.log(phone);
    console.log(doctortype);
    var obj = {
        name,
        phone,
        doctortype
    }
    var key = `user-${phone}`;
    localStorage.setItem(key,JSON.stringify(obj));
    showOnScreen(obj);
}
function showOnScreen(obj){
    const parent = document.getElementById("form-ul");
    const child = document.createElement('li');
    child.innerHTML = `<span id = '${obj.phone}'>name = ${obj.name},phone = ${obj.phone} and doctor = ${obj.doctortype} <button type= 'button' onclick = 'deleteuser(${obj.phone})'> delete </span></button>`
    parent.append(child);
}


// document.addEventListener("DOMContentLoaded",show);
// function show(){
//     var userdata = localStorage.getItem('user');
//     for (var i = 0; i<userdata.length; i++){
//         showOnScreen(userdata[i]);
//     }

// }