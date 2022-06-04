window.onload = () => {
  const body = document.querySelector("body");
  let dotenv = require('dnv');
  // require('env').config();
  console.log(process.env.DB_USER)
  // console.log(body.select());
window.addEventListener("mouseup", ()=>{
  const text = window.getSelection().toString()
  if(text.length > 0){
    console.log(text)
  }
  
  
})
};
