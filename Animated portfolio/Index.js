
const balloon = document.querySelector("#air-balloon")
const cloudOne = document.querySelector("#cloud-one")
const cloudTwo = document.querySelector("#cloud-two")
const cloudThree = document.querySelector("#cloud-three")
const cloudFour = document.querySelector("#cloud-four")
const cloudFive = document.querySelector("#cloud-five")
const javascript = document.querySelector("#javascript")
const react = document.querySelector("#react")
const graphql = document.querySelector("#graphql")

function move(){
    const incrementer = window.scrollY
    //the '10' refers to the height from the bottom of the sky section.
    //we added this in css file
    balloon.style.bottom = 10 + incrementer * 0.1 + "%"
    cloudOne.style.bottom = 40 + incrementer * 0.12 + "%"
    cloudOne.style.left = 65  + incrementer * 0.1 + "%"
    cloudTwo.style.bottom = 70 + incrementer * 0.12 + "%"
    cloudTwo.style.left = 68 + incrementer * 0.15 + "%"
    cloudThree.style.bottom = 40 + incrementer * 0.13 + "%"
    cloudThree.style.left = 0 + incrementer * -0.16 + "%"
    cloudFour.style.bottom = 70 + incrementer * 0.12 + "%"
    cloudFour.style.left = 20 + incrementer * -0.17 + "%"
    cloudFive.style.bottom = 60 + incrementer * 0.2 + "%"
    javascript.style.left = 20 + incrementer * -2 + "%"
    react.style.left = 26 + incrementer * -1.5 + "%"
    graphql.style.left= 32 + incrementer * -1 + "%"




    


}
window.addEventListener("scroll",move)