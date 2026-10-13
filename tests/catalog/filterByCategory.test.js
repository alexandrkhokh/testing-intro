const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
      const filteredProducts = filterByCategory(products, 'all');
      expect(filteredProducts.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
      const filteredProducts = filterByCategory(products, undefined);
      expect(filteredProducts.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
      const filteredProducts = filterByCategory(products, '');
      expect(filteredProducts.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
      const filteredProducts = filterByCategory(products, 'electronics');
      expect(filteredProducts.map(p => p.id)).toEqual([1, 2]);
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
      const filteredProducts = filterByCategory(products, 'books');
      expect(filteredProducts.map(p => p.id)).toEqual([3, 6]);
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
      const filteredProducts = filterByCategory(products, 'home');
      expect(filteredProducts.map(p => p.id)).toEqual([4, 5]);
  });
  test("'clothes' возвращает пустой массив", () => {
      const filteredProducts = filterByCategory(products, 'clothes');
      expect(filteredProducts).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
      const filteredProducts = filterByCategory(products, 'toys');
      expect(filteredProducts).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
      const filteredProducts = filterByCategory(products, 'sports');
      expect(filteredProducts).toEqual([]);
  });
});
