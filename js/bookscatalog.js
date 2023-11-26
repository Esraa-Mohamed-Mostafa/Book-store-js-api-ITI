let main = document.querySelector(".main");

let inputSearch = document.querySelector("#inputSearch");
let searchField = document.querySelector(".searchField");
let viewDetails = document.querySelector(".bookviewDetails")
let counter = document.querySelector(".counter")


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.googleapis.com/books/v1/volumes?q=software+development");
xhr.send();
var bookCatalog = [];
try {
    xhr.addEventListener("readystatechange", function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            bookCatalog = JSON.parse(xhr.response);
            bookCatalog = bookCatalog.items  //
            //console.log(bookCatalog);
            display(bookCatalog);
        }
        // else { console.log("Failure") };

    });
} catch (error) {
    console.log(error);
}
let count = 0;
function display(bookCatalog) {
    main.innerHTML = null
    // 3shan yshel el adem w ya7ot el gaded 

    for (let i = 0; i < bookCatalog.length; i++) {
        let divCard = document.createElement("div");
        divCard.className = "blog-post";
        divCard.id = `${bookCatalog[i].id}`;
        //console.log(divCard.id);

        let divPhoto = document.createElement("figure");
        let imgimg = document.createElement("img")
        imgimg.className = "rounded-top";
        imgimg.src = `${bookCatalog[i].volumeInfo.imageLinks.smallThumbnail}`;
        imgimg.alt = bookCatalog[i].volumeInfo.title;
        divPhoto.appendChild(imgimg);
        divCard.appendChild(divPhoto);

        let title = document.createElement("h4");
        title.className = "bookName";
        let titleText = document.createTextNode(bookCatalog[i].volumeInfo.title);
        title.appendChild(titleText);
        divCard.appendChild(title);

        let content = document.createElement("p");
        let contentText = document.createTextNode(bookCatalog[i].volumeInfo.description);
        content.className = "descriptionclass";
        content.appendChild(contentText);
        divCard.appendChild(content);

        let author = document.createElement("p");
        let authortext = document.createTextNode(bookCatalog[i].volumeInfo.authors);
        author.className = "author";
        author.appendChild(authortext);
        divCard.appendChild(author);

        let btnDiv = document.createElement("div");
        btnDiv.className = "btnDiv";

        let viewDetails = document.createElement("button");
        let viewDetailsText = document.createTextNode("View Details");
        viewDetails.className = "read-more";
        viewDetails.id = `${bookCatalog[i].id}`;
        viewDetails.appendChild(viewDetailsText);
        btnDiv.appendChild(viewDetails);

        let addCard = document.createElement("button");
        let addCardText = document.createTextNode("Add to card");
        addCard.className = "add-card";

        addCard.appendChild(addCardText);
        btnDiv.appendChild(addCard);
        divCard.appendChild(btnDiv);

        main.appendChild(divCard);

        viewDetails.addEventListener("click", redirect)
        function redirect(e) {
            id = e.target.getAttribute("id");
            //var id=JSON.stringify("bookCatalog[i].id");
            // const self = `https://www.googleapis.com/books/v1/volumes/${id}`;
            //localStorage.setItem("id", id);
            localStorage.setItem("api", id);
            window.location.href = "./bookDetails.html";
        };

        addCard.addEventListener("click", countFunc)
        function countFunc() {
            count++
            counter.innerHTML = count;
        }
    }
}

var value;
var searchbookcatalog = []

function searchFunc(keykey) {
    //console.log(keykey);       
    let xhrxhr = new XMLHttpRequest();
    xhrxhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${keykey}`);
    xhrxhr.send();
    xhrxhr.addEventListener("readystatechange", function () {
        if (xhrxhr.status == 200 && xhrxhr.readyState == 4) {
            searchbookcatalog = JSON.parse(xhrxhr.response);
            searchbookcatalog = searchbookcatalog.items
            console.log(searchbookcatalog);
            display(searchbookcatalog);
        }


    });
}


