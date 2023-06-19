
function getData(url) {
    return new Promise(async (resolve, reject) => {
      let resJson = await fetch(ENDPOINT + url);
      if (resJson.ok) {
  
        let data = await resJson.json();
        resolve(data);
      } else {
        reject("erorr");
      }
    });
  }


  const axiosInstance = axios.create({
    baseURL: ENDPOINT,
    timeout: 10000,
  });
  
  
  // false and true ekanligi bootestarbniki
  
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    "use strict";
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
  
    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
  
          form.classList.add("was-validated");
        },
        false
      );
    });
  })();
  

 const Modebtn = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");
const modeFormlocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;

if (modeFormlocal) {
  body.classList.add("dark-mode");
  
}

Modebtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  Modebtn.classList.toggle("header__dark");
  modeFormlocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});
