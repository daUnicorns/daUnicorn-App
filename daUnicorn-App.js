var name = document.getElementById('name1');
var job = document.getElementById('job');
var email = document.getElementById('email');
var phone = document.getElementById('phone');

  function insertInfo() {
      document.getElementsByClassName('name')[0].innerHTML = name1.value;
      // console.log(name,document.getElementsByClassName('name')[0].innerHTML,'-------');
      document.getElementsByClassName('job')[0].innerHTML = job.value;
      document.getElementsByClassName('email')[0].innerHTML = email.value;
      console.log("bouh");
      document.getElementsByClassName('phone')[0].innerHTML = phone.value;
  }

  document.getElementById('button').addEventListener('click', function(e) {
    e.preventDefault();
  insertInfo();
});
