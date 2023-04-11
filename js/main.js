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
