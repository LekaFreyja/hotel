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

  class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    save() {
      alert('сохраняю');
    }

    load() {
      alert('загружаю');
      console.log('pdfdf');
    }

    search() {
      alert('ищу');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }

  new Menu(menu);