/*navbar interactive code*/


/*dark mode function*/
function darkMode(){
  $("#darkmode > img").attr("src","./images/icons/dark-mode.png");
     $("#logo > a > img").attr("src","./images/logo/MED-ACCESS-LOGO-DARK.png");
     $("body").css("backgroundColor", "#121212");
     $("#navContainer").css("background-color","#121212");
     $("#navBarOptions > ul >li >a").css("color","white");
     $("#health-tips > p > span").css("color","white");
     $("#feedback > p > span").css("color","white");
     $("#footer").css("background","linear-gradient(to right, #121212 ,#A376A2,#121212)");
     $("#content-2").attr("class","gradient-background-dark");
     $(".chooseUS-1 > div > p").css("color","black");
     $("#cookies").css("background-color","black");
}

//light mode function
function lightMode(){
    $("#darkmode > img").attr("src","./images/icons/light-mode.png")
     $("#logo > a> img").attr("src","./images/logo/MED-ACCESS-LOGO-LIGHT.png");
     $("body").css("background-color","white");
     $("#navContainer").css("background-color","white");
     $("#navBarOptions > ul >li >a").css("color","black");
     $("#health-tips > p > span").css("color","black");
     $("#feedback > p > span").css("color","black");
     $("#footer").css("background","linear-gradient(to right, #A376A2, #daa5e1, #ff98f8)");
     $("#content-2").attr("class","gradient-background");
      $("#cookies").css("background-color","white");
}


/*toggle dark mode and light mode*/
const darkModeBtn = document.getElementById('darkmode');
let isDark = false;
darkModeBtn.addEventListener('click', () => {
document.body.classList.toggle('dark');
isDark = !isDark;
  
if(isDark){
  //dark mode
     darkMode();
}else{
  //light mode
    lightMode();
  }

});




/*rotated logo js*/
$("#logo > img").attr("class", "slideAndRotate");


/*hero interactive code*/
/*hero media query function*/
function heromediaQuery(){
   const mediaQuery1 = window.matchMedia('(max-width: 845px)');

   if (mediaQuery1.matches) {
     $("#welcomeText").css({
        "width": "80%",
        "color":"whitesmoke",
      });
      $("#welcomeText > p > span").css({
          "color":"#f3bef3",
       });
   }else{
      $("#welcomeText").css({
        "width": "32%",
        "color":"aliceblue",
      });
      $("#welcomeText > p > span").css({
          "color":"#121212",
       });
   }
  
}

var is2 = true;
setInterval(()=>{
  heromediaQuery();
if (is2){
   $("#hero").css({
     "background-image": "url('./images/hero-img-2.png')",
     "justify-content": "flex-end", 
    
  });
  $("#welcomeText").css({
     "width" : "27%",
     "font-size": "25px",
  });
  is2=false;
   
}else{
   $("#hero").css({
     "background-image": "url('./images/hero-img-1.png')",
     "justify-content": "flex-start"
  });
  is2=true;
}
  heromediaQuery();
},20000);



/*content-1 interactive code */

/*people images arrays*/
const peopleImg1 = ["./images/people/man-smiling-1.png",
                   "./images/people/family-happy.png"];

const peopleImg2 = ["./images/people/girl-smilling-1.png",
                   "./images/people/black-african-kitchen.png"];

const peopleImg3 =  ["./images/people/black-person-jogging.png",
                    "./images/people/partners-romantic.png"];

const peopleImg4 =["./images/people/elderly-people-newspaper.png",
                   "./images/people/black-family-happy.png"];

/*rotate people images*/
setInterval(()=>{
    var random1 = Math.floor(Math.random() * peopleImg1.length);
    var random2 = Math.floor(Math.random() * peopleImg2.length);
    var random3 = Math.floor(Math.random() * peopleImg3.length);
    var random4 = Math.floor(Math.random() * peopleImg4.length); 

    slideImg1(random1,random2,peopleImg1,peopleImg2);
    
   setTimeout(()=>{
      slideImg2(random3,random4,peopleImg3,peopleImg4);
   },6001);

},6000);

/*slide images function*/
function slideImg1(random1,random2,Img1, Img2){
  $(".d-1-a").css({
    "background-image": `url("${Img1[random1]}")`,
    "background-size": `cover`,
     "background-position": `center`,
   })

    $(".d-1-b").css({
    "background-image": `url("${Img2[random2]}")`,
    "background-size": `cover`,
     "background-position": `center`,
   })

}
/*slide images function*/
function slideImg2(random1,random2,Img1,Img2){
    $(".d-2-a").css({
    "background-image": `url("${Img1[random1]}")`,
    "background-size": "cover",
     "background-position": "center",
   })
   
   $(".d-2-b").css({
    "background-image": `url("${Img2[random2]}")`,
    "background-size": "cover",
     "background-position": "center",
   })
   
}


/*content-2 interactive code */

/*rotate plan colors*/
var planColors = ["green",
                  "#DD0303",
                 "#1055C9",
                "aliceblue"];

setInterval(()=>{
  var random = Math.floor(Math.random() * planColors.length);
  const mediaQuery1 = window.matchMedia('(max-width: 1356px)');
   if (mediaQuery1.matches) {
     $("#content-2-text").css("border",`none`);
   }else{
      $("#content-2-text").css("border-right",`5px dotted ${planColors[random]}`);
   }
  $(".C2Text").css("text-decoration", `underline ${planColors[random]}`);
},4000);


/*toggle plan images on hover*/
$(document).ready(function() {
  $("#greater").hover(
    function() {
      $("#greater > img").attr("src",`./images/icons/greater-than-color.png`)
    },
    function() {
       $("#greater > img").attr("src",`./images/icons/greater-than.png`);
    }
  );

   $("#lessthan").hover(
    function() {
      $("#lessthan > img").attr("src",`./images/icons/less-than-color.png`);
    },
    function() {
       $("#lessthan > img").attr("src",`./images/icons/less-than.png`);
    }
  );

});

/*toggle basic plans and family plans*/
$("#greater").click(()=>{
    $(".basic").css("display","none");
    $(".family").css("display","block");
    $("#greater").css("visibility", "hidden");
    $("#lessthan").css("visibility", "visible");
});

//toggle basic plans and family plans
$("#lessthan").click(()=>{
    $(".basic").css("display","block");
    $(".family").css("display","none");
    $("#lessthan").css("visibility", "hidden");
     $("#greater").css("visibility", "visible");
});



/*content-3 interactive code */

/*check symptoms*/
$("#check").on("click",()=>{
   $("#check-img").css("display","none");
   $("#symptomsC").css("display","block");
});

$("#close").on("click",()=>{
  $("#symptomsC").css("display","none");
   $("#check-img").css("display","flex");
   
})

/*check symptoms function*/
let selectedText1 = "";
let selectedText2 = "";

/*on click of check button*/
$("#check-1").click("click",()=>{

  selectedText1 = $('#symptoms-A option:selected').index();
   selectedText2 = $('#symptoms-B option:selected').index();
  /*symptoms-A vs other symptoms*/
   if(selectedText1 === 0 && selectedText2 ===0){
    $("#feedback > p > span").text("please select a  symptom  in both symptom A and B")
     $("#feedback > p>a ").text(" ");  ;
   }else if(selectedText1 ===0 && selectedText2 ===1){
     $("#feedback > p > span").text("please select symptom A");
     $("#feedback > p>a ").text(" ");  
   }else if(selectedText1===0 && selectedText2===2){
      $("#feedback > p > span").text("please select symptom A");
      $("#feedback > p>a ").text(" ");  
   }
    /*fever vs other symptoms*/
   else if(selectedText1 === 1 && selectedText2 ===0){
    $("#feedback > p > span").text("please select symptom B");
    $("#feedback > p>a ").text(" ");  
   }else if(selectedText1 ===1 && selectedText2 ===1){
     $("#feedback > p > span").text(`you may have the flu or COVID-19 since you’re feeling feverish and dizzy.
                                    Make sure to rest, drink plenty of warm fluids like water, tea, or soup, and take Panado or paracetamol to reduce the fever.
                                     Stay in a warm place, avoid cold air, and eat light meals such as fruits and soups to keep your strength.`);
     $("#feedback > p>a ").text("please send us message if symptoms worsen");                           
   }else if (selectedText1===1 && selectedText2 === 2){
      $("#feedback > p > span").text(`You may have a respiratory infection such as flu, COVID-19, pneumonia, or bronchitis if you have fever and shortness of breath.
                                      Make sure to rest and keep yourself hydrated by drinking warm fluids like water, tea, or soup. Avoid cold air, and if possible, sit upright to make breathing easier.
                                     You can take paracetamol (Panado) to help lower the fever.`);
     $("#feedback > p>a ").text("please send us message if symptoms worsen"); 
   }
  
   /*cough vs other symptoms*/
   else if(selectedText1 === 2 && selectedText2 ===0){
    $("#feedback > p > span").text("please select symptom B");
    $("#feedback > p>a ").text(" ");  
   }else if(selectedText1 ===2 && selectedText2 ===1){
     $("#feedback > p > span").text(`You may have a flu, cold, or chest infection if you’re experiencing cough and dizziness.
                                    Make sure to rest well, drink plenty of warm fluids like water, lemon tea, or ginger tea to soothe your throat, and avoid dusty or smoky areas that can worsen your cough.
                                    You can take Panado or cough syrup to ease your symptoms.`);
     $("#feedback > p>a ").text("please send us message if symptoms worsen");                           
   }else if (selectedText1===2 && selectedText2 === 2){
      $("#feedback > p > span").text(`You may have a chest infection, flu, bronchitis, asthma, or even pneumonia if you have a cough with shortness of breath.
                                      Try to rest and avoid physical strain, drink warm fluids like ginger or honey tea to ease your throat, and stay away from 
                                      cold air and smoke. You can take Panado to lower fever or pain if you have any. Sit upright or sleep with your head raised to breathe more easily`);
     $("#feedback > p>a ").text("please send us message if symptoms worsen"); 
   }
   /*symptoms-B vs other symptoms*/
   if(selectedText1 === 0 && selectedText2 ===0){
    $("#feedback > p > span").text("please select a  symptom  in both symptom A and B")
     $("#feedback > p>a ").text(" ");  ;
   }else if(selectedText1 ===1 && selectedText2 ===0){
     $("#feedback > p > span").text("please select symptom B");
     $("#feedback > p>a ").text(" ");  
   }else if(selectedText1===2 && selectedText2===0){
      $("#feedback > p > span").text("please select symptom B");
      $("#feedback > p>a ").text(" ");  
   }
  
});



 




/*health tips*/
/*array of health tips*/
const healthTips = [
  {
    name: "WHO",
    tip: `Regular check-ups can help find health problems before they start.
          Health professionals can help find and diagnose health issues early,
          when your chances for treatment and cure are better. Go to your nearest
          health facility to check out the health services, screenings and treatment
          that are accessible to you.`,
    link: "https://www.who.int/westernpacific/newsroom/feature-stories/item/10-health-tips-for-2025"
  },
  {
    name: "WHO",
    tip: `Hand hygiene is critical not only for health workers but for everyone.
          Clean hands can prevent the spread of infectious illnesses.
          You should handwash using soap and water when your hands are visibly soiled or handrub using an alcohol-based product.`,
    link: "https://www.who.int/westernpacific/newsroom/feature-stories/item/10-health-tips-for-2025"
  },
  {
    name: "WHO",
    tip:  `Smoking tobacco causes NCDs such as lung disease, heart disease and stroke.
           Tobacco kills not only the direct smokers but even non-smokers through second-hand exposure.
           If you are currently a smoker, it’s not too late to quit. Once you do, you will experience immediate and
           long-term health benefits. If you are not a smoker, that’s great! Do not start smoking and fight for your 
           right to breathe tobacco-smoke-free air.`,
    link: "https://www.who.int/westernpacific/newsroom/feature-stories/item/10-health-tips-for-2025"
  },
  
  {
    name: "UCSF Health",
    tip: `Be physically active for 30 minutes most days of the week.
          Break this up into three 10-minute sessions when pressed for time.
          Healthy movement may include walking, sports, dancing, yoga, running or other activities you enjoy.`,
    link: "https://www.ucsfhealth.org/education/tips-for-staying-healthy"
  },

  {
    name: "UCSF Health",
    tip: `Brush your teeth after meals with a soft or medium bristled toothbrush.
           Also brush after drinking and before going to bed. Use dental floss daily.`,
    link: "https://www.ucsfhealth.org/education/tips-for-staying-healthy"
  },

   

];
 
/*rotate health tips*/
setInterval(() =>{
  var randomIndex = Math.floor(Math.random() * healthTips.length);

  $("#health-tips-text").fadeToggle(500, function() {
    $(this).text(healthTips[randomIndex].tip).fadeToggle(500);
  });

  $("#external-links").fadeToggle(500,function(){
    $(this).text(healthTips[randomIndex].name).fadeToggle(55);
    $(this).attr("href",healthTips[randomIndex].link);
  })

},7000);







/*contact page js*/

/*toggle medical aid form and message form*/
$("#messageBtn").click("click",()=>{
    $("#medicalAid").css("display","none");
    $("#messageBtn").css({
      "background-color":"#A376A2",
       "color": "aliceblue",
    });
    $("#medAid").css({
      "background-color":"white",
       "color": "#A376A2", 
    });
    $("#message").css("display","block");
});

/*toggle medical aid form and message form*/
$("#medAid").click("click",()=>{
    $("#medicalAid").css("display","block");
    $("#messageBtn").css({
      "background-color":"white",
       "color": "#A376A2",
    });
    $("#medAid").css({
      "background-color":"#A376A2",
       "color": "aliceblue", 
    });
    $("#message").css("display","none");
});





//medical aid form validation
function validateMedicalForm(){
 var formsubmit = $("#medicalForm >#formInput-5 > input");
var firstname = $("#firstname");
var  lastname = $("#lastname");
var email = $("#email");
var phone = $("#phone");
var plan = $("#formPlan");
var checkbox = $("#formInput-4 > input");
const successDiv = document.getElementById("successMessage");


$(formsubmit).click("click", ()=>{
  
  //validation checks
   if(firstname.val() === ""){
    alert("First name is required.");
   }
    else if(lastname.val() === ""){
       alert("Last name is required.");
    }else if(email.val() === ""){
      alert("Email is required.");
    }else if(phone.val() === ""){
      alert("Phone number is required.");
    }else if(plan.val() === ""){
      alert("Please select a plan.");
    }else if(!checkbox.is(":checked")){
      alert("You must agree to the terms and conditions.");
    }
   else if(firstname.val().length < 3){
    alert("First name must be at least 3 characters long.");
    e.preventDefault();
  }else if(lastname.val().length < 3){
    alert("Last name must be at least 3 characters long.");
    e.preventDefault();
  }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.val())){
    alert("Please enter a valid email address.");
    e.preventDefault();
  }else if(!/^\d{10}$/.test(phone.val())){
    alert("Please enter a valid 10-digit phone number.");
    e.preventDefault();
  }else{
      successDiv.style.display = "block";
      $("#medicalAid").css("display","none");
       $("#message").css("display","none");
  } 

});

}







/*form interactive */
/*medical aid form submission*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("medicalForm");
  /*const successDiv = document.getElementById("successMessage");*/

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    fetch("./php/medicalAidConnect.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        // Check if PHP response contains success keyword
        if (data.toLowerCase().includes("success")) {
          validateMedicalForm();
          form.reset();
        } else {
          alert("Something went wrong: " + data);
        }
      })
      .catch((error) => {
        alert("Error submitting form: " + error);
      });
  });
});

/*message form submission*/
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const successDiv = document.getElementById("successMessage2");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const formData = new FormData(form);

    fetch("./php/userMessageConnect.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        // Check if PHP response contains success keyword
        if (data.toLowerCase().includes("success")) {
            successDiv.style.display = "block"; 
            $("#medicalAid").css("display","none");
            $("#message").css("display","none");
            form.reset();
        } else {
          alert("Something went wrong: " + data);
        }
      })
      .catch((error) => {
        alert("Error submitting form: " + error);
      });
  });
});












/*on click of success button*/
$("#successBtn > input").click("click",()=>{
  $("#medicalAid").css("display","block");
   $("#message").css("display","none");
   $("#successMessage").css("display","none");
   
});

$("#successMessage2 > #successBtn > input").click("click",()=>{
  $("#medicalAid").css("display","none");
   $("#message").css("display","block");
   $("#successMessage2").css("display","none");
   
});


/*video interactive page*/
$("#btnGreaterThan > img").click("click",()=>{
  $("#video-header >p").text("How to send a message");
  $("#dot1").css("background-color","white");
  $("#dot2").css("background-color","#A376A2");
  $("#btnLessThan").css("visibility","visible");
  $("#btnGreaterThan").css("visibility","hidden");
  $("#video-play > video").attr("src","./vidoes/how-to-send-a-message.mp4");
})


$("#btnLessThan > img").click("click",()=>{
  $("#video-header >p").text("How to apply medical aid");
  $("#dot2").css("background-color","white");
  $("#dot1").css("background-color","#A376A2");
  $("#btnGreaterThan").css("visibility","visible");
  $("#btnLessThan").css("visibility","hidden");
  $("#video-play > video").attr("src","./vidoes/how-to-apply-medical-aid.mp4");
})











/*about page*/



/*cookies*/
$(document).ready(function () {

  // Show the cookie popup when the page loads
  $("#cookies").fadeIn();

  // Hide the cookie popup when the accept or decline button is clicked
  $("#accept").click(function () {
    $("#cookies").fadeOut();
  });

  // Hide the cookie popup when the decline button is clicked
  $("#decline").click(function () {
    $("#cookies").fadeOut();
  });

});



/*footer*/
//get current year
var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerText = year;