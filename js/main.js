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
  $pic.src = entry.photo;

  const $ename = document.createElement('p');
  $ename.textContent = entry.title;

  const $not = document.createElement('p');
  $not.textContent = entry.notes;

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

function toggleNoEntries() {
  const $noEntry = document.querySelector('.no-entry');
  if (data.entries !== null) {
    $noEntry.className = 'p hidden';
  }
} toggleNoEntries();

function viewSwap(entries) {
  const $entries = document.querySelector('.entries');
  const $eform = document.querySelector('.eform');
  if (entries === 'entries') {
    $eform.className = 'eform hidden';
    $entries.className = 'entries';
  } else {
    $eform.className = 'eform';
    $entries.className = 'entries hidden';
  }
}

const $entryTop = document.querySelector('.entry');
$entryTop.addEventListener('click', function () {
  viewSwap('entries');
});

const $new = document.querySelector('.new');
$new.addEventListener('click', function () {
  viewSwap('entry-form');
});
