import imageHome from "./home.jpg"

export default function onload() {
    const content = document.getElementById('content');
    content.textContent = '';
    content.classList.add('content')

    const paragraph = document.createElement('p');
    paragraph.textContent = `
    Restaurante Mexicano de comida callejera, donde encontraras el auténtico sabor de nuestro México Querido!! Deliciosas Tortas Mexicanas, Tacos, Burritos, Quesadillas y mas!! Si eres vegetariano o celiaco también podrás disfrutar de nuestros preparaciones.`;
    paragraph.classList.add('p')
    content.appendChild(paragraph)
    const image = document.createElement('img');
    image.src = imageHome;
    image.style.height = "400px";
    content.appendChild(image);

}

