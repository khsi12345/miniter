let tweetContain = document.querySelector('.tweetContain')
let tweetCount = document.querySelector('.tweetCount')
// let tweetList = [];

function renderTweets(args) {
  for (let i = 0; i < args.length; i++) {
    // tweetContain.innerHTML += `<div><li>${data[i].user}${data[i].contents}</li></div>`;
    let newTweet = document.createElement('li');
    let tweetUser = document.createElement('h5');
    let tweetContent = document.createElement('sapn');
    

    tweetUser.innerHTML = args[i].user;
    tweetContent.innerHTML = args[i].contents;
    newTweet.appendChild(tweetUser);
    newTweet.appendChild(tweetContent);
    tweetContain.appendChild(newTweet);
  }
  let count = document.createElement('span');
  tweetCount.value = args.length;
  count.innerHTML = tweetCount.value;
  console.dir(tweetCount)
  tweetCount.appendChild(count);
}

renderTweets(data);

// function renderTweets(args) {
//   for(let i = 0; i < args.length; i++) {
//     let tempUser = data[i].user;
//     let tempContents = data[i].contents;
    
    // let temp = <div><li>data[i].user</li>
    // <li>data[i].contents</li>
    // </div>;
//     tweetContain.appendChild(temp);
//   }
// }

// let elementA = document.getElementById("ID");
// elementA.style.backgroundImage = "";

// let elementA = document.getElementsByClassName("CLASS").item(0);
// let elementA = document.querySelector("#ID");
