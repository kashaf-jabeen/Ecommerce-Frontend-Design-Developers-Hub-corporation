document.addEventListener('DOMContentLoaded', function() {
  const gridViewBtn = document.getElementById('gridViewBtn');
  const listViewBtn = document.getElementById('listViewBtn');
  const productContainer = document.getElementById('product-container');

  if (productContainer) {
    // By default, list view ko active class dein
    productContainer.classList.add('list-view');
  }

  if (gridViewBtn) {
    gridViewBtn.addEventListener('click', function() {
      console.log('Grid View button clicked!');
      if (productContainer) {
        productContainer.classList.remove('list-view');
        productContainer.classList.add('grid-view');
        gridViewBtn.classList.add('active');
        listViewBtn.classList.remove('active');
      }
    });
  }

  if (listViewBtn) {
    listViewBtn.addEventListener('click', function() {
      console.log('List View button clicked!');
      if (productContainer) {
        productContainer.classList.remove('grid-view');
        productContainer.classList.add('list-view');
        listViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
      }
    });
  }
});


/* grid view for product listing page  up */