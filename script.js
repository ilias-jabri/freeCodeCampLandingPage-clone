let sIcon = document.querySelector('#s-icon')
let search = document.querySelector('#search-section')
let sentence = document.getElementById('quote')


function hide(){
    sIcon.style.opacity = '0'
}
search.addEventListener('blur', ()=>{
    sIcon.style.opacity = '1'
})
search.addEventListener( 'keydown',(event)=>{
    if(event.keyCode == 13){
        window.open(`https://www.google.com/search?q=${search.value}`)
    }
})


const quotes = ['“Any fool can write code that a computer can understand.\n Good programmers write code that humans can understand.”',
'“First, solve the problem.\n Then, write the code.”',
'“Experience is the name everyone gives \n to their mistakes.”',
'“ In order to be irreplaceable, one must \n always be different”',
'“Knowledge is power.”',
'“Sometimes it pays to stay in bed on Monday, rather than spending \n the rest of the week debugging Monday’s code.”'
]

setInterval(function setQuote(){
    let n = Math.floor(Math.random()*6)
    console.log(n)
    sentence.innerText = quotes[n]
},10000)
