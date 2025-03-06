// this modules uses findIndex and splice to find and delete the div.
import { bookLibrary } from "./bookFactoryFn";
import counter from "./counter";
// it should also delete the book from lS
export default function deleteBookDiv() {
  document
    .querySelectorAll(".maincontainer .book-card")
    .forEach((bookCardDiv) => {
      bookCardDiv.addEventListener("click", function (e) {
        if (
          e.target.tagName === "BUTTON" &&
          e.target.textContent === "Delete"
        ) {
          const target = e.target;
          const parent = target.parentElement;
          console.log(target, parent);
          const bookId = parent.getAttribute("id");
          console.log(bookId);

          if (bookId === "History of England") {
            alert("You cannot delete the default book!");
            return;
          } else {
            console.log("Before deletion:", bookLibrary);

            // Find the index of the book
            const bookIndex = bookLibrary.findIndex((book) => {
              return String(book.title).trim() === String(bookId).trim();
            });
            console.log(bookIndex);
            if (bookIndex !== -1) {
              // Remove the book from the array
              bookLibrary.splice(bookIndex, 1);
              console.log("After deletion:", bookLibrary); // Debugging
            }
            bookCardDiv.remove();
            counter(bookLibrary);

            const notReadContainer = document.querySelector(".notread");

            if (!notReadContainer.hasChildNodes()) {
              notReadContainer.style.display = "none";
            }
          }
        }
      });
    });
}
