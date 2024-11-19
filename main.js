
var author = document.getElementById("author")


function generateQuote() {

    var randomNum = Math.floor(Math.random() * 10);
    switch (randomNum) {

        case 0:
            quote.innerHTML = "“Be yourself; everyone else is already taken.”";
            author.innerHTML = "― Oscar Wilde";
            break;
        case 1:
            quote.innerHTML = "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me";
            author.innerHTML = "― Marilyn Monroe";
            break;
        case 2:
            quote.innerHTML = "“So many books, so little time.”";
            author.innerHTML = "― Frank Zappa";
            break;
        case 3:
            quote.innerHTML = "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”";
            author.innerHTML = "― Albert Einstein";
            break;
        case 4:
            quote.innerHTML = "“A room without books is like a body without a soul.”";
            author.innerHTML = "― Marcus Tullius Cicero";
            break;
        case 5:
            quote.innerHTML = "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”";
            author.innerHTML = "― Bernard M. Baruch";
            break;
        case 6:
            quote.innerHTML = "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.” ";
            author.innerHTML = "― William W. Purkey";
            break;
        case 7:
            quote.innerHTML = "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”";
            author.innerHTML = "― Dr. Seuss";
            break;
        case 8:
            quote.innerHTML = "“You only live once, but if you do it right, once is enough.”";
            author.innerHTML = "― Mae West";
            break;
        case 9:
            quote.innerHTML = "“Be the change that you wish to see in the world.”";
            author.innerHTML = "― Mahatma Gandhi";
            break;




    }
}