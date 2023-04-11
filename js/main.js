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

  const $top = document.createElement('div');
  $top.className = 'row';

  const $rested = document.createElement('div');
  $rested.className = 'column-half';

  const $rest = document.createElement('div');
  $rest.className = 'column-half';

  const $pic = document.createElement('img');
  $pic.className = data.entries.photo;

  const $ename = document.createElement('p');
  $ename.className = data.entries.title;

  const $not = document.createElement('p');
  $not.className = data.entries.notes;

  $top.appendChild($rest);
  $top.appendChild($rested);
  $rest.appendChild($pic);
  $rested.appendChild($ename);
  $rested.appendChild($not);

  return $top;

}

document.addEventListener('DOMContentLoaded', loads);

function loads() {
  for (let i = 0; i < data.entries.length; i++) {
    const $row = document.querySelector('.row');
    $row.appendChild(renderEntry(data.entries[i]));

  }
}
