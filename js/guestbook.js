function getMoviePreference() {
  let name = document.getElementById('name').value;
  let checkedmovieNumbers = document.querySelectorAll(`input:checked`).length;

  alert(name + '님! 저와 ' + checkedmovieNumbers + '개의 취향이 같으시네요 !');
}
