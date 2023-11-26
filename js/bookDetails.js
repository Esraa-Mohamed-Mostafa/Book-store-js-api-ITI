
let cardDetails = document.querySelector("#cardDetails");
let img = document.querySelector("img");
let titlee = document.querySelector(".title");
let descriptionn = document.querySelector(".description");
let authorr = document.querySelector(".details__author");
let publisherr = document.querySelector(".publisher");

//const id = localStorage.getItem("id");
const id = localStorage.getItem("api");

let home = document.querySelector("#home");


//console.log(id);

let xhr = new XMLHttpRequest();
xhr.open("GET", `https://www.googleapis.com/books/v1/volumes/${id}`);
xhr.send();
var bookDetails = [];
xhr.addEventListener("readystatechange", function () {
    if (xhr.status == 200 && xhr.readyState == 4) {
        bookDetails = JSON.parse(xhr.response);
        details(bookDetails);
        //console.log(bookDetails );
    }
})

function details(bookDetails) {

    //console.log(bookDetails.volumeInfo.publishedDate);
    img.src = `${bookDetails.volumeInfo.imageLinks.smallThumbnail}`;
    //img.alt = bookDetails[i].volumeInfo.title;
    titlee.innerHTML = ` Title : ${bookDetails.volumeInfo.title}`;
    //console.log(titlee.innerHTML);
    descriptionn.innerHTML = ` ${bookDetails.volumeInfo.description}`;
    authorr.innerHTML = `: ${bookDetails.volumeInfo.authors}`;
    authorr.style.fontWeight = 'bold'
    publisherr.innerHTML = `  ${bookDetails.volumeInfo.publisher}`;
    document.querySelector(".date").innerHTML = `  ${bookDetails.volumeInfo.publishedDate}`;
}



home.addEventListener("click", redtohome)
function redtohome() {
    window.location.href = "./bookscatalog.html";
};
