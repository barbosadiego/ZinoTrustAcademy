const number = document.getElementById("number");
const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);

function getQuotes(e) {
  e.preventDefault();

  if (number.value.length === 0) {
    return alert("Please enter a number.");
  } else {
    const https = new XMLHttpRequest();

    https.open("GET", "https://type.fit/api/quotes", true);

    https.onload = function () {
      if (this.status === 200) {
        const response = shuffle(JSON.parse(this.responseText));
        console.log(response.length)

        let output = "";
        console.log(output)
        // response.forEach(function (quote) {
        //   output += `
        //     <li>Quote: ${quote.text}</li>
        //     <li>Author: ${quote.author}</li>
        //     <hr>
        //   `;
        // });

        for(let i = 0, len = response.length; i < len; i++){
          if(i == number.value) {break;}
          output += `
            <li>Quote: ${response[i].text}</li>
            <li>Author: ${response[i].author}</li>
            <hr>
          `;
          
          document.querySelector(".quotes").innerHTML = output;
        }

      }
    };

    https.send();
  }
}


// function to shuffle quotes

function shuffle(quotes){
  let CurrentIndex = quotes.length, tempValue, randomIndex;
  console.log(CurrentIndex);

  // while elements exist in the array
  while (CurrentIndex > 0) {
    randomIndex = Math.floor(Math.random() * CurrentIndex);
    // decrease CurrentIndex by 1
    CurrentIndex--;
    // swap the last element with CurrentIndex
    tempValue = quotes[CurrentIndex];
    quotes[CurrentIndex] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }

  return quotes
}
