
//Set constant variables
//Input Form
const inptFrm = document.querySelector('form');
console.log(inptFrm);
//url input
const url = document.querySelector('#url');
console.log(url)
//Alt description input
const alt = document.querySelector('#alt');
console.log(alt);
//Top text input
const topTxt = document.querySelector('#top');
console.log(topTxt);
//Bottom text input
const botTxt = document.querySelector('#bottom');
console.log(botTxt);
//Output container variable; for created memes
const outPut = document.querySelector('#output');
console.log(outPut)

function createMeme(urlVal,alt,tp,btm){
  //Create div container.
  const meme = document.createElement('div');
  //Create img, set url, set alt description.
  const img = document.createElement('img');
  img.setAttribute('src',urlVal);
  img.setAttribute('alt',alt);
  //Create top text holder, add class css format, set inner text.
  const top = document.createElement('p');
  top.classList.add('top');
  top.innerText = tp;
  //Create bottom text holder, add class css format, set inner text.
  const bottom = document.createElement('p');
  bottom.classList.add('bottom');
  bottom.innerText = btm;
  //Create button, add css class format.
  const button = document.createElement('button');
  console.log(button);
  button.classList.add('delete');
  button.innerText = 'X';
  //Append items in order: button, top text, img, bottom text.
  meme.append(button);
  meme.append(top);
  meme.append(img);
  meme.append(bottom);
  // Return built meme
  return meme;

}

/*Input form event Listener:
1. Prevent Defualt Form action
2. Logic: If outPut.childElementCount < 4 {
  3. Create const meme = output of createMeme Function
  4. Append meme to output container
  5. Clear input values;
} else {alert('Meme Container full; Please delete 1 item')}



*/
inptFrm.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event);
  //function parameter order: createMeme(url,alt,tp,btm){
  //JS const names: url, alt, topTxt, botTxt, outPut
  console.log(outPut.childElementCount);
  if(outPut.childElementCount < 3){
    console.log(url.value);
    const meme = createMeme(url.value,alt.value,topTxt.value,botTxt.value);
    console.log(meme);
    outPut.append(meme);
  } else {
    alert("Meme Container full; Please delete 1+ item(s)");
  }


})



//Functionality: Click button to remove created meme from outPut container.
//Add event listener searching for clicks on a button.
outPut.addEventListener('click',function(event){
  console.log(event);
  if(event.target.tagName === 'BUTTON'){
    console.log(event.target.parentElement);
    //If event target is a button; remove the parent element.
    event.target.parentElement.remove();
  }
})