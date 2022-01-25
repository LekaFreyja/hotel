let
  pornomer = document.querySelectorAll('#item'),
  i = 0,
  selectList = document.querySelector('#itemlist');


function selectedList (a, b) {
  while (i <= a.length) { 
    a[i].textContent = ++i;
  }
}
selectedList(pornomer, selectList);