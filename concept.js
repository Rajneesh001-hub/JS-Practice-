const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don’t let yesterday take up too much of today.",
    "Dream bigger. Do bigger.",
    "It always seems impossible until it’s done.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Don’t watch the clock; do what it does. Keep going.",
    "If you want to achieve greatness stop asking for permission.",
    "Work hard in silence, let your success make the noise."
  ];
    
const button=document.querySelector("button");
const quote=document.querySelector("h1")
button.addEventListener("click",()=>{
    const index=Math.floor(Math.random()*20);

    quote.textContent=quotes[index];
})