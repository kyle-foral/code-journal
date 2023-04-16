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
  const $ul = document.querySelector('ul');
  $ul.appendChild(renderEntry(entry));
  viewSwap('entries');
  if (data.entries.length !== 0) {
    toggleNoEntries();
  }
  if (data.editing !== null) {
    entry.entryId = data.editing;
    data.entries.indexOf().replace(entry.entryId);
    // matches(data.entries);
    renderEntry(entry);
  }
  data.nextEntryId++;
  data.entries.unshift(entry);
  // $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  document.getElementById($form).reset();

}
/* ---------------------------------------------------------------------
-----------------ENTRY PART FEATURE 2 ------------------------------ */

function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);

  const $top = document.createElement('div');
  $top.className = 'row';

  const $rested = document.createElement('div');
  $rested.className = 'column-half';

  const $rest = document.createElement('div');
  $rest.className = 'column-half';

  const $headerdiv = document.createElement('div');
  $headerdiv.className = 'headerdiv';

  const $pic = document.createElement('img');
  $pic.src = entry.photo;

  const $ename = document.createElement('span');
  $ename.textContent = entry.title;

  const $not = document.createElement('p');
  $not.textContent = entry.notes;

  const $pen = document.createElement('i');
  $pen.className = 'fa fa-pencil';

  $li.appendChild($top);
  $top.appendChild($rest);
  $top.appendChild($rested);
  $rest.appendChild($pic);
  $rested.appendChild($headerdiv);
  $headerdiv.append($ename, $pen);
  $rested.appendChild($not);

  return $li;
}

const $unl = document.querySelector('ul');

$unl.addEventListener('click', function (event) {
  const $eform = document.querySelector('.eform');
  const $newentry = document.querySelector('.new-entry');
  if (event.target.matches('i')) {
    for (let i = 0; i < data.entries.length; i++) {
      // eslint-disable-next-line eqeqeq
      if (data.entries[i].entryId == event.target.closest('li').getAttribute('data-entry-id')) {
        data.editing = event.target.closest('li').getAttribute('data-entry-id');
        $eform.children[0][0].value = data.entries[i].title;
        $eform.children[0][1].value = data.entries[i].photo;
        $eform.children[0][2].value = data.entries[i].notes;
        viewSwap('entry-form');
        $newentry.textContent = 'Edit Entry';
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < data.entries.length; i++) {
    $unl.appendChild(renderEntry(data.entries[i]));
  }
  viewSwap(data.view);
  toggleNoEntries();
});

function toggleNoEntries() {
  const $none = document.querySelector('.none');
  if (data.entries.length !== 0) {
    $none.className = 'none hidden';
  } else {
    $none.className = 'none';
  }
}

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
  data.view = entries;
}

const $entryTop = document.querySelector('.entry');
$entryTop.addEventListener('click', function () {
  viewSwap('entries');
});

const $new = document.querySelector('.new');
$new.addEventListener('click', function () {
  const $eform = document.querySelector('.eform');
  const $newentry = document.querySelector('.new-entry');
  $eform.children[0][0].value = null;
  $eform.children[0][1].value = null;
  $eform.children[0][2].value = null;
  viewSwap('entry-form');
  $newentry.textContent = 'New Entry';
});

/* -----------------------------------------------------------------------
---------------------------ENTRY FEATURE 3 ----------------------------- */
