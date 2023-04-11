/* exported data */

let data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', tons);

function tons(event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('data', dataJSON);
}
