// import { insta } from "./svg";

export default function loadContact() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.classList.remove('content');
    
    const contact = document.createElement('div')
    content.classList.add('contact');
    content.appendChild(contact);
    const contactPara = document.createElement('p')
    contactPara.textContent = `Follow us on Insta. Find us next to McAuto, Avinguda de Salou`;
    content.appendChild(contactPara)
   
}

