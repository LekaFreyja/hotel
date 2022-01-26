let filters = document.querySelectorAll('a[data-filter]');

for (let filter of filters) {
  filter.addEventListener('click', function(e) {
    e.preventDefault();

    let catId = filter.getAttribute('data-filter');
    let workCat = document.querySelectorAll('.portfolio__col');

    workCat.forEach(function(c) {

      if (catId === 'all') {
        c.classList.remove('hide');
      } else {
        if (c.getAttribute('data-cat') !== catId) {
          c.classList.add('hide');
        } else {
          c.classList.remove('hide');
        }
      }

    })

  });
}

const 
list1 = document.querySelector('.select-table_main'),
list2 = document.querySelector('.select-table_main'),
list3 = document.querySelector('.select-table_main');


class List {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

    selectlistmain() {
        this.classList.toggle('bgcolor');
    }

    1() {
      list2.classList.toggle('bgcolor');
    }

    list3() {
      list3.classList.toggle('bgcolor');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }

  new List(maintabl);