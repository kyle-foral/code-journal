const $photoImg = document.getElementById('myUrl');
$photoImg.addEventListener('input', picUrl);

const $img = document.querySelector('img');

function picUrl(event) {
  $img.setAttribute('src', event.target.value);
}

const $form = document.querySelector('#form-id');

$form.addEventListener('submit', subButton);

function subButton(event) {
  event.preventDefault();
  const entry = {
    entryId: data.nextEntryId,
    title: event.target.elements.title.value,
    photo: event.target.elements.myUrl.value,
    notes: event.target.elements.notes.value
  };
  data.nextEntryId++;

  data.entries.unshift(entry);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();

}
/* ---------------------------------------------------------------------
-----------------ENTRY PART FEATURE 2 ------------------------------ */

function renderEntry(entry) {
  const $li = document.createElement('li');

  const $top = document.createElement('div');
  $top.className = 'row';

  const $rested = document.createElement('div');
  $rested.className = 'column-half';

  const $rest = document.createElement('div');
  $rest.className = 'column-half';

  const $pic = document.createElement('img');
  if (data.entries.photo === 'undefined') {
    $pic.src = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*';
  } else {
    $pic.src = data.entries.photo;
  }
  // console.log(data.entries.photo);

  const $ename = document.createElement('p');
  $ename.textContent = data.entries.title;

  const $not = document.createElement('p');
  $not.textContent = data.entries.notes;

  $li.appendChild($top);
  $top.appendChild($rest);
  $top.appendChild($rested);
  $rest.appendChild($pic);
  $rested.appendChild($ename);
  $rested.appendChild($not);

  return $li;
}

document.addEventListener('DOMContentLoaded', renderEntry);

for (let i = 0; i < data.entries.length; i++) {
  const $unl = document.querySelector('ul');
  $unl.appendChild(renderEntry(data.entries[i]));
}

// console.log(renderEntry(data.entries[2]));
