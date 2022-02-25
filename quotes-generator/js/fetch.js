const number = document.getElementById('number');
const btn = document.querySelector('.get-quotes');
btn.addEventListener('click', getQuotes);
const url = 'https://type.fit/api/quotes';

function getQuotes(e){
  e.preventDefault();

  if(number.value.length == 0){
    return alert('Please enter a number.');
  } else {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      data = shuffle(data);
      let output = '';

      for(let i = 0, len = data.length; i < len; i++){
        if(i == number.value) {break;}
        output +=`
          <li>Quote: ${data[i].text}</li>
          <li>Author: ${data[i].author}</li>
          <hr>
        `;
      }

      document.querySelector('.quotes').innerHTML = output;
    });
  };
};

function shuffle(quotes){
  let CurrentIndex = quotes.length, tempValue, randomIndex;
  console.log(quotes.length, tempValue, randomIndex);

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
