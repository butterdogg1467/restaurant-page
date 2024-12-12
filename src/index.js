import createHome, { currentPage, homeRemove } from "./homepage"
import createMenu, { menuRemove } from "./menu";
import createAbout, { aboutRemove } from "./about";
import myImage from '../images/pexels-jess-vide-5507643.jpg';
import './homestyles.css';
document.addEventListener('DOMContentLoaded', function() {
    let button1 = document.querySelector('#button1')
    let button2 = document.querySelector('#button2')
    let button3 = document.querySelector('#button3')


    createHome()

    button1.addEventListener('click', function() {
        if (currentPage.menu === true) {
            menuRemove()
        }
        if (currentPage.about === true) {
            aboutRemove()
        }
        createHome()
        currentPage.home = true
        currentPage.menu = false
        currentPage.about = false
    })

    button2.addEventListener('click', function(){
        if (currentPage.home === true) {
            homeRemove()
        }
        if (currentPage.about === true) {
            aboutRemove()
        }
        createMenu()
        currentPage.home = false
        currentPage.menu = true
        currentPage.about = false
    })
    
    button3.addEventListener('click', function(){
        if (currentPage.menu === true) {
            menuRemove()
        }
        if (currentPage.home === true) {
            homeRemove()
        }
        createAbout()
        currentPage.home = false
        currentPage.menu = false
        currentPage.about = true
    })









































































































})