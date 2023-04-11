
const photoImg = document.getElementById('myUrl');
photoImg.addEventListener('input', picUrl);

function picUrl(event) {
  const img = document.querySelector('img');
  img.setAttribute('src', event.target.value);
}

const save = document.getElementById('save');
save.addEventListener('submit', subButton);
// const forms = document.querySelector('.entry-form');

// const titles = document.querySelector('#title');
// const photos = document.querySelector('#myUrl');
function subButton(event) {
  event.preventDefault();
  // const entryId = {
  //   titles: forms.elements.title.value,
  //   photos: forms.elements.pics.value
  // };
  // console.log(entryId);
}
