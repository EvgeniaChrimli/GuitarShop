// функция которая рендерит первоначальные данные
function render() {
  const productStore = localStorageUtil.getProducts();
  headerPage.render(productStore.length);
  productsPage.render();
}
let CATALOG = [];

fetch("server/catalog.json")
  .then((result) => result.json())
  .then((body) => {
    CATALOG = body;
    render();
  });
try {
} catch (error) {
  console.log(error);
}
