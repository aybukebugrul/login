function greet() {
    alert("There is nothing to do :(");
}

var form = document.querySelector(".login");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
 
   
    var uname = document.querySelector("#uname").value;
    var password = document.querySelector("#password").value;
    var imnotrobot = document.querySelector("#imnotrobot").checked;
    if (!imnotrobot) { 
        alert("Lütfen robot olmadığınızı kanıtlayın");
        return;
    } 


    fetch("/login", {
      method: "POST",
      body: JSON.stringify({
        username: uname,
        password: password
      })
    })
    
    if (uname === "aybukebugrul" && password === "irem") {
       
        window.location.href = "indexiab.html"; 

      } 
      
      else {
        
        alert("Kullanıcı adı veya şifre yanlış");
      }
});
