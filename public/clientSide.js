// submit form
document.querySelector(".submitButton").addEventListener("click", async() => {
  let form = document.querySelector(".form-login");

  if(form.children[0].value && form.children[1].value){
    
    let data = JSON.
                    stringify(
                      {
                        "user":form.children[0].value,
                        "password":form.children[1].value
                      }
                    )
                                            
    await fetch('/auth', {
      method:'POST',
      headers: { "Content-Type": "application/json" },
      body:data
    })
    .then(  response => {
      console.log(response.json().then( async obj => {
        window.localStorage.setItem('token', obj["token"]);
        
        // await fetch('/dashboard', {
        //   method: 'GET',
        //   headers: { "Content-Type": "application/json", 'Authorization': 'Bearer '+window.localStorage.getItem('token') }
          
        // })

      }));
    })
    .catch(err => {
      console.log(err);
    })
    
  }else{
    alert("E-mail/User or Password can't be empty.");
  }

}); 