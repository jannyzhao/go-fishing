export default class Timer {
    constructor(time = 30) {
        this.time = time;
        this.startTime = time * 60;
        this.timeRemaining = this.startTime;
        this.intervalId = null;
        this.isRunning = false;
    }

    startTimer() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.intervalId = setInterval(() => {
                this.timeRemaining--;
                if (this.timeRemaining === 0) {
                    this.stopTimer();
                }
            }, 1000);
        }
    }

    stopTimer() {
        clearInterval(this.intervalId);
        this.isRunning = false;
        this.timeRemaining = this.startTime;
    }

}
