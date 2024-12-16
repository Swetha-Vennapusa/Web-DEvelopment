const quoteText=document.querySelector(".quote");
quoteBtn=document.querySelector("button");
authorName=document.querySelector(".author .name")
soundBtn=document.querySelector(".sound");
copyBtn=document.querySelector(".copy");
twitterBtn=document.querySelector(".twitter");
//random quote
function randomquote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText="Loading Quote..."
    fetch("http://api.quotable.io/random").then(res=>res.json()).then(result=>{
        console.log(result);
        quoteText.innerText=result.content;
        authorName.innerText=result.author;
        quoteBtn.innerText="New Quote."
        quoteBtn.classList.remove("loading");
    })
}
soundBtn.addEventListener("click",()=>{
    let utterance=new  SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);//speak method is speechSynthesis.speak()
})
copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(quoteText.innerText);
})
twitterBtn.addEventListener("click",()=>{
    let tweetUrl=`https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank");
})

quoteBtn.addEventListener("click",randomquote)