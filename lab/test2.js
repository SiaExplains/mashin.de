var totalRecords = 200;
var PRODUCT_LIST_PAGINATION_SIZE = 21;

const numberOfPages = Math.floor(totalRecords / PRODUCT_LIST_PAGINATION_SIZE ) +
(totalRecords % PRODUCT_LIST_PAGINATION_SIZE  === 0 ? 0 : 1);

console.log(numberOfPages)