/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

const photoImg = document.getElementById('myUrl');
photoImg.addEventListener('input', picUrl);

function picUrl(event) {
  const img = document.querySelector('img');
  img.setAttribute('src', event.target.value);
}
