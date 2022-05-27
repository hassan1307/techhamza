const btn = document.getElementsByClassName("mybtn")[0];
const show = document.getElementsByClassName("navitems")[0];
const slider1 = document.getElementById("slide1");
const slider2 = document.getElementById("slide2");
const slider3 = document.getElementById("slide3");
const para1 = document.getElementById("picpara1");
const para2 = document.getElementById("picpara2");
const para3 = document.getElementById("picpara3");
const contact = document.getElementById("contact");
const titlephoto = document.getElementById("photo");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const pic1 = document.getElementsByClassName("pic1")[0];
const pic2 = document.getElementsByClassName("pic2")[0];
const pic3 = document.getElementsByClassName("pic3")[0];
const text1 = document.getElementsByClassName("text1")[0];
const text2 = document.getElementsByClassName("text2")[0];
const text3 = document.getElementsByClassName("text3")[0];
const section2 = document.getElementById("second");
const carouselimg1 = document.getElementById("carouselimg1");
const carouselimg2 = document.getElementById("carouselimg2");
const carouselimg3 = document.getElementById("carouselimg3");
const car = document.getElementsByClassName("car")[0];


function changeimg() {
    carouselimg1.style.transform = "translateX(-100px)"
    carouselimg1.style.zIndex = "-1";
    carouselimg2.style.transform = "translateX(-10px)";
    console.log("hello");

}


window.addEventListener("scroll", () => {
    var x = window.scrollY;
    console.log(x)

    if (x >= 200 && x <= 300) {
        slider1.style.position = "absolute";
        slider1.style.left = "400px";
        slider1.style.transition = "all 0.75s";

        para1.style.display = "block"
        para1.style.position = "absolute";
        para1.style.left = "600px";
    }
    if (x >= 320 && x <= 450) {
        slider2.style.position = "absolute";
        slider2.style.left = "900px";
        slider2.style.transition = "all 0.75s";
        para2.style.display = "block"
        para2.style.position = "absolute";
        para2.style.right = "600px";
    }
    if (x >= 400) {
        slider3.style.position = "absolute";
        slider3.style.left = "400px";
        slider3.style.transition = "all 0.75s";

        para3.style.display = "block"
        para3.style.position = "absolute";
        para3.style.left = "600px";
    }
    if (x < 200) {
        slider1.style.position = "absolute";
        slider1.style.left = "45%";
        slider1.style.transition = "all 0.75s";

        para1.style.display = "none"
        // para3.style.position = "absolute";
        // para3.style.left = "400px";
    }
    if (x < 330) {
        slider2.style.position = "absolute";
        slider2.style.left = "45%";
        slider2.style.transition = "all 0.75s";

        para2.style.display = "none"
        slider3.style.position = "absolute";
        slider3.style.left = "45%";
        slider3.style.transition = "all 0.75s";

        para3.style.display = "none"
    }
    if (x >= 481 && x <= 660) {
        pic1.style.transform = "translateY(-70%)";
        pic1.style.transition = "all 1s";
        pic2.style.transform = "translateY(-70%)";
        pic2.style.transition = "all 1s";
        pic3.style.transform = "translateY(-70%)";
        pic3.style.transition = "all 1s";
        text1.style.transition = "all 4s";
        text1.style.opacity = "1";
        text2.style.transition = "all 4s";
        text2.style.opacity = "1";
        text3.style.transition = "all 4s";
        text3.style.opacity = "1";


    }
    if (x < 481) {
        pic1.style.transform = "translateY(70%)";
        pic1.style.transition = "all 1s";
        pic2.style.transform = "translateY(70%)";
        pic2.style.transition = "all 1s";
        pic3.style.transform = "translateY(70%)";
        pic3.style.transition = "all 1s";
        text1.style.opacity = "0";
        text2.style.transition = "all 4s";
        text2.style.opacity = "0";
        text3.style.transition = "all 4s";
        text3.style.opacity = "0";
    } if (window.matchMedia("(max-width: 600px)").matches) {
        if (x >= 200 && x<=1114){
            slider1.style.position = "absolute";
            slider1.style.left = "50px";
            slider1.style.top = "720px";
            para1.style.display = "block";
            para1.style.left = "290px";

            slider2.style.position = "absolute";
            slider2.style.left = "50px";
            slider2.style.top = "880px";
            slider2.style.width = "115px"
            para2.style.display = "block";
            para2.style.left = "290px";

            slider3.style.position = "absolute";
            slider3.style.left = "50px";
            slider3.style.top = "1040px";
            slider3.style.width = "130px"
            para3.style.display = "block";
            para3.style.left = "290px";

            if(x>1120 && x<=2230){
        pic1.style.transform = "translateY(50%)";
        pic1.style.transition = "all 1s";
        pic2.style.transform = "translateY(50%)";
        pic2.style.transition = "all 1s";
        pic3.style.transform = "translateY(50%)";
            }
            }  
        } 

    
})




btn.addEventListener("click", () => {
    show.classList.toggle("active");
})