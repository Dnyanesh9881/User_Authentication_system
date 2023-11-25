const form=document.getElementById("form");
const submitButton=document.querySelector(".submitB");
const container=document.querySelector(".container");

let data={
    fullName:null,
    email:null,
    token:null,
    password:null,
}


submitButton.addEventListener('click', onClickSubmit);



function onFormChange(){
    data.fullName=form.fullName.value;
    data.email=form.email.value;
    data.token=Math.random().toString(36).substring(2,9);
    data.password=form.password.value;
    console.log(data);
}

function onClickSubmit(){
    submitButton.innerHTML='<a class="goToProfile" href="./index2.html"></a>CONTINUE'
    const goToProfile=document.querySelector(".goToProfile");
    goToProfile.click();

    const container2=document.querySelector(".container2");


  const card=document.createElement("div");

  card.innerHTML=`<h2>Profile</h2>
  <br>
  <img src="./assets/Vector (1).svg"><br>
  <img src="./assets/Vector (2).svg"><br><br>
  <p>Full Name : ${data.fullName}</p><br>
  <p>Email : ${data.email}</p><br>
  <p>Token : ${data.token}</p><br>
  <p>Password : ${data.password}</p>
  <br>
  <button class="logout">LOGOUT</button>`
container2.appendChild(card);
}
// const byteSize = str => new Blob([str]).size;
// const result = 
// console.log(byteSize(result));

