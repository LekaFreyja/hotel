let form = document.querySelector('.sidenav__form')
class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); 
    }

    save() {
        form.classList.toggle('hide');
    }

    load() {
        form.classList.toggle('hide');
    }

    search() {
        form.classList.toggle('hide');
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    }
  }

  new Menu(menu);