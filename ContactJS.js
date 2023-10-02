let formdata = document.querySelector('form');
formdata.addEventListener('submit', async event => {
    event.preventDefault();
    const Data = new FormData(formdata);
    const FormattedFormData = new URLSearchParams(Data);
    
  fetch("http://127.0.0.1:3000/comment/", {
  method: 'POST',
  body:  FormattedFormData,
  mode: 'no-cors',
  })
  }
  );
function Submit(){
  const Data = new FormData(formdata);
  Name = Data.get("fname");
  if(Name == ''){
    alert('Thank you for your submission!');
  } else {
  alert('Thank you ' + Name + '!');
  }
}
function Images(){
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(result =>{
    console.log(result)
    dog.src = result.message
  })

}