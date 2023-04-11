/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const photo = document.querySelector('.photo');

photo.addEventListener('input', picUrl);

function picUrl(event) {

  const img = document.querySelector('img');

  img.setAttribute('src', 'img data');

}
