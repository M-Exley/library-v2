import capitalise from "./capitaliise";
import nameIDStamp from "./nameIDStamp";
import deleteBookDiv from "./deleteDivFn";
import counter from "./counter";
import { bookLibrary } from "./bookFactoryFn";
import filterRead from "./filterRead";
import adjustBookSize from "./adjustBookSize";
import optionsFunction from "./options";

// push the new book object to the container
export default function pushBookToContainer({ title, author, pages, read }) {
  const cardContainer = document.getElementById("cards-container");
  const notReadContainer = document.querySelector(".notread");
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const resString = `${capitalise(title).trim()}, by <br> ${capitalise(author).trim()} is ${pages} pages long. <br> ${read} `;
  bookCard.innerHTML = `
  ${resString}
  <button class="button-delete">Delete</button>
  <div class="dropdown-main">Options
  
    <ul class="dropdown-list">
    <li>Mark as Read/Not Read</li>
    <li>See Cover</li>
    </ul>
  </div>
  
  `;
  nameIDStamp(bookCard, title);
  filterRead(read);
  counter(bookLibrary);
  adjustBookSize(bookCard, pages);
  read === "Read"
    ? cardContainer.appendChild(bookCard)
    : notReadContainer.appendChild(bookCard);

  deleteBookDiv(); // works > calls but doesn't react until clicked
  optionsFunction();
}

/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="10px" width="10px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xml:space="preserve">
  // <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"/>
  // </svg> */
