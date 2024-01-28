class LocalStorageUtil {
  constructor() {
    this.keyName = "products";
  }
  getProducts() {
    const productsLocalStorage = localStorage.getItem(this.keyName);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }
  putProducts(id) {
    // порядок логики
    //1. нужно посмотреть что было в хранилище с помощью гет метода, в продуктс находится все,что есть в локаль хранилище
    let products = this.getProducts();
    let pushProduct = false; // добавленеие в корзину
    // проверка на дублирование элемента(повторное нажатие)
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }
    //2.далее поместтить это в хранилище, преобразовывая данные в строку, тк хранилище не принимает массив
    localStorage.setItem(this.keyName, JSON.stringify(products));
    return {
      pushProduct: pushProduct,
      products: products,
    };
  }
}

// чтобы исп класс нужно сделать его экземпляр
const localStorageUtil = new LocalStorageUtil();
