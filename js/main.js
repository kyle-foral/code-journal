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
}
toggleNoEntries();

function viewSwap(entries) {
  let $tab = document.getElementsByClassName('.data-view');
  // console.log($tab);
  if ($tab === 'data view shown') {
    $tab = 'data view hidden';
    // console.log('asd');
  }
}
//   const $tabs = document.querySelectorAll('.data-view');
//   if (event.target.matches('.entry')) {
//     for (let i = 0; i < $tabs.length; i++) {
//       if (event.target === $tabs[i]) {
//         $tabs[i].className = 'data view shown';
//       } else {
//         $tabs[i].className = 'data view hidden';
//       }
//     }
//   }
// }

//   if (event.target.matches('a')){
//   const formID = document.querySelector('.formID');
//   entries.className = 'div data view hidden';
//     if (event.target.matches('a')) {
//   for (let i = 0; i < formID.length; i++) {
//     if (formID[i] === 'entries') {
//       entries.className = 'hidden';
//     } else {
//       entries.className = 'shown';
//     }
//   }

// }

const $entryTop = document.querySelector('.entry');
$entryTop.addEventListener('click', viewSwap);
