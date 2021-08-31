document.querySelector("button#clickMe").addEventListener("click", makeMagic);

let counter = 0

function makeMagic() {
    console.log("clicking");
    counter = counter + 1;
    const myTemplate = document.querySelector(" template ").content;
    const myClone = myTemplate.cloneNode(true);
    myClone.querySelector("h1").textContent = "Product " + counter;
    document.querySelector("main").appendChild(myClone);
}