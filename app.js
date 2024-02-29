$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav: true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})

function signin() {
    alert("!No Sign Up Requried.But if you have the code you can login with it!");
}

const CodeRestriction = 'dami'.trim();
let ageButton = document.getElementsByTagName("button")[0];

function getValue(){
    let ageInput = document.getElementsByTagName("input")[0]
    console.log(ageInput)
    return ageInput.value
};

function checkRestriction(){
    let code = getValue();

    if(code == CodeRestriction){
        

    let input = document.getElementsByTagName("input")[0];
    let message = document.querySelector(".message");
    message.innerHTML = "hi me," + "my name is dare." ;
    alert("!welcome \n \tme!")
    window.location.href = "../feature/feature.html";
    return 'corect code';
    } else {
        return 'incorect code';
    }
}
function displayResult(){
    let result = checkRestriction();
    console.log(result)
    let pTag = document.getElementById("display")
    pTag.textContent = result;
}

ageButton.onclick = displayResult