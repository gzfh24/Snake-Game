class Head {
  constructor(el) {
    this.node = document.createElement('div');
    this.node.setAttribute('id', 'head');
    el.appendChild(this.node);

    this.currentDirection = 'right';
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;

    // Refactor the below line to create a bound version of `this.Move`.
    // We must do this in order to retain the context of `this` in an asynchronous setTimeout call
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind

    this.boundMove = this.move.bind(this);
    this.positionsList = new LinkedList();
    this.positionsList.addToHead(0, 0);
    this.positionsList.addToHead(0, 0);
    this.bodyObject = {};

    setTimeout(this.boundMove, this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace('px', ''));
    let leftPosition = Number(head.style.left.replace('px', ''));
    let appleTopPosition = Number(apple.style.top.replace('px', ''));
    let appleLeftPosition = Number(apple.style.left.replace('px', ''));

    if (direction === 'right') {
      head.style.left = `${(leftPosition += 50)}px`
    }
    if (direction === 'down') {
      head.style.top = `${(topPosition += 50)}px`;
    }
    //Unfinished below
    if (direction === 'left') {
      head.style.left = `${(leftPosition -= 50)}px`;
    }
    if (direction === 'up') {
      head.style.top = `${(topPosition -= 50)}px`;
    }
    if (topPosition < 0) {
      topPosition = 650;
      head.style.top = `${topPosition}px`;
    }
    if (leftPosition < 0) {
      leftPosition = 650;
      head.style.left = `${leftPosition}px`;
    }
    if (topPosition > 650) {
      topPosition = 0;
      head.style.top = `${topPosition}px`;
    }
    if (leftPosition > 650) {
      leftPosition = 0;
      head.style.left = `${leftPosition}px`;
    }
      
    if (this.positionsList.contains(leftPosition, topPosition)) {
      alert('Game Over');
    }
    this.positionsList.addToHead(leftPosition, topPosition);
    this.positionsList.removeFromTail();

    if (appleTopPosition === topPosition && appleLeftPosition === leftPosition) {
      apple.remove()
      // board = document.querySelector('#board')
      new Apple(board)
      this.positionsList.addToTail(leftPosition, topPosition)
      let index = this.positionsList.length;
      const bodyElement = new Body(board, leftPosition, topPosition)
      this.bodyObject[index] = bodyElement.node;
    }

    // iterate through bodyObject and update positions
    let curr = this.positionsList.head;
    for (const key in this.bodyObject) {
      curr = curr.next;
      this.bodyObject[key].style.left = `${curr.left}px`
      this.bodyObject[key].style.top = `${curr.top}px`
    }

    setTimeout(this.boundMove, this.SPEED);
  }
}
