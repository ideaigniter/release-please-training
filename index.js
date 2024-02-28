class Logger {
  constructor() {
    console.log("Logger activated");

    document.addEventListener("click", this.onClick);
  }

  onClick(event) {
    console.log(`X: ${event.clientX} Y: ${event.clientY}`);
  }
}

const logger = new Logger();
