const $photoImg = document.getElementById('myUrl');
$photoImg.addEventListener('input', picUrl);

const $img = document.querySelector('img');

function picUrl(event) {
  $img.setAttribute('src', event.target.value);
}

const $form = document.querySelector('#form-id');

$form.addEventListener('submit', subButton);

function subButton(event) {
  const $eform = document.querySelector('.eform');
  const $li = document.querySelectorAll('li');
  event.preventDefault();
  let entry = {};
  if (data.editing !== null) {
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        data.entries[i].title = $eform.children[0][0].value;
        data.entries[i].photo = $eform.children[0][1].value;
        data.entries[i].notes = $eform.children[0][2].value;
        const $edited = renderEntry(data.editing);
        for (let e = 0; e < $li.length; e++) {
          if (Number($li[e].getAttribute('data-entry-id')) === data.editing.entryId) {
            $li[e].replaceWith($edited);
          }
        }
      }
    }

  } else {
    entry = {
      entryId: data.nextEntryId,
      title: event.target.elements.title.value,
      photo: event.target.elements.myUrl.value,
      notes: event.target.elements.notes.value
    };
    const $ul = document.querySelector('ul');
    $ul.appendChild(renderEntry(entry));
    data.nextEntryId++;
    data.entries.unshift(entry);
  }
  viewSwap('entries');
  if (data.entries.length !== 0) {
    toggleNoEntries();
  }
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  data.editing = null;
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
      if (data.entries[i].entryId === Number(event.target.closest('li').getAttribute('data-entry-id'))) {
        data.editing = data.entries[i];
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
---------------------------ENTRY FEATURE 4 ----------------------------- */

const deleteB = document.querySelector('.delete');
const confirm = document.querySelector('#no-button');
const deny = document.querySelector('#cancel');
const background = document.querySelector('.row-modal');
const shader = document.querySelector('.column-full-modal');

deleteB.addEventListener('click', popp);
deny.addEventListener('click', closedpop);
confirm.addEventListener('click', deletepop);

function popp(event) {
  shader.setAttribute('class', 'dark');
  background.setAttribute('class', 'show');
}

function closedpop(event) {
  shader.setAttribute('class', 'overlay');
  background.setAttribute('class', 'noshow');
}

function deletepop(event) {
  const $li = document.querySelectorAll('li');
  for (let d = 0; d < $li.length; d++) {
    if (Number($li[d].getAttribute('data-entry-id')) === data.editing.entryId) {
      $li[d].remove();
    }
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === data.editing.entryId) {
        const removed = data.entries[i].entryId;
        data.entries.splice(0, removed);
      }
    }
  }
  if (data.entries.length !== 0) {
    toggleNoEntries();
  }
  shader.setAttribute('class', 'overlay');
  background.setAttribute('class', 'noshow');
  data.editing = null;
  viewSwap('entries');
}
