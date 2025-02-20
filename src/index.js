import "./styles.css";

import onload  from "./home";
import loadMenu from "./menu";
import loadContact from "./contact"

onload();


console.log("Hello")

document.querySelector('#home').addEventListener('click', onload)
document.querySelector('#menu').addEventListener('click', loadMenu)
document.querySelector('#contact').addEventListener('click', loadContact)
