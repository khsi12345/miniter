let tweetContain = document.querySelector('.tweetContain')
let tweetCount = document.querySelector('.tweetCount')
let textArea = document.querySelector('.textBox')
let maxTextLength = document.querySelector('.maxTextLength') //textarea 요소에 입력할 수 있는 최대 문자길이를 표시할 태그 요소 dom 객체를 get
let curTextLength = document.querySelector('.curTextLength') //textarea 요소에 입력하고 있는 현재 문자길이를 표시할 태그 요소 dom 객체를 get
const maxContentsOfTextArea = 150;
let curContents = document.createElement('span'); 
let tweetBtn = document.querySelector('.addTweetButton')
let userName = document.querySelector('.userName')
let count = document.createElement('span'); //트윗의 총 개수를 뷰에 표시할 dom 객체를 get

function createElement(username, content, data) {
  let newTweet = document.createElement('li');
  let tweetUser = document.createElement('h5');
  let tweetContent = document.createElement('sapn');
  newTweet.classList.add('tweet')

  tweetUser.innerHTML = username;
  tweetContent.innerHTML = content;
  
  newTweet.appendChild(tweetUser);
  newTweet.appendChild(tweetContent);
  tweetContain.appendChild(newTweet);
}

function countTweetContens(data) {
  console.dir(tweetContain)
  tweetCount.value = data.length;
  count.innerHTML = tweetCount.value;
  // console.dir(tweetCount)
  tweetCount.appendChild(count);
}


function renderTweets(args) {
  
  for (let i = 0; i < args.length; i++) {
    createElement(args[i].user, args[i].contents, args)
  }
    countTweetContens(args)

  let contents = document.createElement('span');
  contents.innerHTML = "최대 " + maxContentsOfTextArea + "글자수";
  maxTextLength.appendChild(contents);
  curContents.innerHTML = 0;
}

renderTweets(data);

//글자수 제한 이벤트 
textArea.addEventListener('keyup', function(e) {
  
// console.log(e.target.value)
if(e.target.value.length <= maxContentsOfTextArea) curContents.innerHTML = e.target.textLength;

else if(e.target.value.length >= maxContentsOfTextArea) {
  const contents = e.target.value;
  // console.log(contents)
  
  //이벤트 옵션이 keypress 일때
  // if(e.keyCode === 8) {
  //   return;
  // }
  // else {
  //   event.preventDefault();
  // }
  //이벤트 옵션이 keyup 일때
  // console.log(contents.slice(0,maxContentsOfTextArea))
  e.target.value = contents.slice(0,maxContentsOfTextArea);
  }
});
curTextLength.appendChild(curContents)

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

function newTweet() {
  // console.dir()
  createElement(userName.textContent, textArea.value)
  data.push({user: userName.textContent, contents: textArea.value})
  textArea.value = ""
  // console.log(data)
  countTweetContens(data)
  curContents.innerHTML = 0;
}
tweetBtn.addEventListener('click', newTweet);




