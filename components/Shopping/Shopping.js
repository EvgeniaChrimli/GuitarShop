class Shopping {
  handelClear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;

    CATALOG.forEach(({ id, name, prise }) => {
      if (productsStore.indexOf(id) !== -1) {
        htmlCatalog += `
        <tr>
        <td class="shopping-element__name"> 🛒${name}</td>
        <td class="shopping-element__prise">${prise.toLocaleString()}</td>
        </tr>`;
        sumCatalog += prise;
      }
    });
    const html = `
    <div class="shopping-container">
    <div class="shopping__close" onclick="shoppingPage.handelClear()"></div>
    <table>${htmlCatalog}
    <tr>
        <td class="shopping-element__name"> 💵Сумма USD </td>
        <td class="shopping-element__prise">${sumCatalog.toLocaleString()}</td>
        </tr>
    </table>
    </div>
    
    `;
    ROOT_SHOPPING.innerHTML = html;
  }
}
const shoppingPage = new Shopping();
