
const heading = document.getElementById("heading");
const main_container = document.getElementById("main_container");

const quote_url = "https://api.quotable.io/random";

async function generatequote(url){
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    let quote = data.content;
    let author = data.author;
    // console.log(quote);
    // console.log(author);
    let quote_line = document.getElementById("quote_line");
    let quote_author = document.getElementById("quote_author");
    quote_line.innerText=quote;
    quote_author.innerText="Author ~ "+author;
}

generatequote(quote_url);

let new_quote = document.getElementById("new_quote");
new_quote.addEventListener("click", ()=>{
    generatequote(quote_url);
})


let tweet_quote = document.getElementById("tweet_quote");

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote_line.innerText + " " + quote_author.innerText , "Tweet Window", height="300px", width="300px");
}

tweet_quote.addEventListener("click", ()=>{
    tweet();
})



mode_btn.addEventListener("click", function(e){
    if(main_container.classList.contains("dark")){
        main_container.classList.remove("dark");
        heading.classList.remove("dark");
        mode_btn.innerText = "Dark Mode";
        localStorage.setItem('isDarkMode', false);
    }
    else{
        main_container.classList.add("dark");
        heading.classList.remove("dark");
        mode_btn.innerText = "Light Mode";
        localStorage.setItem('isDarkMode', true);
    }
    }
);


if (localStorage.getItem('isDarkMode') === 'true') {
    main_container.classList.add('dark');
    mode_btn.innerText = "Light Mode";
} else {
    main_container.classList.remove("dark");
    mode_btn.innerText = "Dark Mode";
}





