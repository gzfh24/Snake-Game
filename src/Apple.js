class Apple {
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/apple.jpg');

    el.appendChild(this.node);

    let headLeftPosition = Number(head.style.left.replace('px', ''));
    let headTopPosition = Number(head.style.top.replace('px', ''));

    let leftPosition = 50 * Math.floor(Math.random() * 14);
    let topPosition = 50 * Math.floor(Math.random() * 14);

    while (true) {
      if (leftPosition !== headLeftPosition || topPosition !== headTopPosition) {
        break
      } else {
        leftPosition = 50 * Math.floor(Math.random() * 14);
        topPosition = 50 * Math.floor(Math.random() * 14);
      }
    }

    this.node.style.left = `${leftPosition}px`;
    this.node.style.top = `${topPosition}px`;
  }
}
