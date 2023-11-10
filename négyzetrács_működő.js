let jel = 'X';
  const gridItems = document.querySelectorAll('.grid-item');

  function handleClick(index) {
    if (!gridItems[index].textContent.trim()) {
      gridItems[index].textContent = jel;
      console.log(`Erre az indexű elemre kattintott: ${index + 1}`);
      jel = jel === 'X' ? 'O' : 'X';
    }
  }

  function resetGrid() {
    gridItems.forEach(item => {
      item.textContent = '';
    });
    console.log('Grid reset');
  }

  document.getElementById('reset-button').addEventListener('click', resetGrid);

  document.getElementById('reset-button').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }