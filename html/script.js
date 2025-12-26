function splash(e) {
  const layer = document.getElementById('splash-layer');

  for (let i = 0; i < 5; i++) {
    const dot = document.createElement('div');
    dot.className = 'splash';

    dot.style.left = e.pageX + Math.random() * 30 - 15 + 'px';
    dot.style.top = e.pageY + 'px';

    layer.appendChild(dot);

    setTimeout(() => dot.remove(), 700);
  }
}
