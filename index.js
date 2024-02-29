class Logger {
  constructor() {
    document.addEventListener("click", this.onClick);
  }

  onClick(event) {
    console.log(`Cursor position X: ${event.clientX} Y: ${event.clientY}`);
  }
}

const logger = new Logger();
