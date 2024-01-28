class Products {
  constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
    // метод  обработчика события клик
    const { pushProduct, products } = localStorageUtil.putProducts(id); //скорректировать инфу при клике в хранилище
    if (pushProduct) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
  }
  render() {
    // для изменения текста и фона кнопки при нажатии,делаем после того,как создали методы в хранилище
    const productsStore = localStorageUtil.getProducts();

    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, prise, img }) => {
      let activeClass = "";
      let activeText = "";
      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeClass = "" + this.classNameActive;
        activeText = this.labelRemove;
      }

      htmlCatalog += `
      <li class="products-element">
      <span class="products-element__name">${name}</span>
      <img class="products-element__img" src="${img}"/>
      <span class="products-element__price">🤘 ${prise.toLocaleString()} USD </span>
      <button class="products-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
      ${activeText}
      </button>

      </li>
      `;
    });
    const html = `
    <ul class="products-container">${htmlCatalog}</ul>
    `;
    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
//productsPage.render();
