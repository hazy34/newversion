const form = document.getElementById('farm-form');
const itemList = document.getElementById('item-list');

/*Form Submission*/
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const quantity = document.getElementById('quantity').value.trim();
  const category = document.getElementById('category').value;

  if (name && quantity && category) {
    const li = document.createElement('li');
    li.textContent = `${name} - ${quantity} pcs (${category})`;
    li.dataset.category = category;

    /*Color by Category*/
    switch (category) {
      case 'vegetable':
        li.style.backgroundColor = '#a8d5ba';
        break;
      case 'fruit':
        li.style.backgroundColor = '#f4a6a6';
        break;
      case 'grain':
        li.style.backgroundColor = '#f9e79f';
        break;
    }

    /* List*/
    itemList.appendChild(li);

    /*Animation effect*/
        setTimeout(() => li.classList.add('show'), 10);

    /* Form Reset*/
    form.reset();
  } else {
    alert('All fields are required!');
  }
});

/* Dark Mode Toggle*/
document.getElementById('dark-mode-toggle')
  .addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
