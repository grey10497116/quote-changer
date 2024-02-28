function generate(){
    var quotes = {
        "- shri hax": '" Enough ? How the hell would you know what enough is ! I havent done enough ,its not enough."'
        ,"- Winston Churchill":'" The pessimist sees difficulty in every opportunity.The optimist sees opportunity in every difficulty."',
        "-Alexandar Graham Bell":'"concentrate all your thoughts upon the work in hand. The suns rays do not burn until brought to focus. "',
        "- Augustine Og Mandino":'" Take the attitude of a student , never be too big to ask questions, never know too much to learn something new."',
    }
    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.querySelector(".quotes").innerHTML = quote;

    document.querySelector(".author").innerHTML = author;






}