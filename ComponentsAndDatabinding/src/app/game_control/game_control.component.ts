import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game_control',
  templateUrl: './game_control.component.html',
  styleUrls: ['./game_control.component.css']
})

export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<{}>();
  timer;
  startButtonDisabled = false;
  stopButtonDisabled = true;

  onStartGame() {
    this.startButtonDisabled = true;
    this.stopButtonDisabled = false;
    this.timer = setInterval(
      this.emitEvent,
      1000,
      this.gameStarted
    );
  }

  onStopGame() {
    clearInterval(this.timer);
    this.startButtonDisabled = false;
    this.stopButtonDisabled = true;
  }

  emitEvent(gameStarted) {
    gameStarted.emit({});
  }

  isStartButtonDisabled() {
    return this.startButtonDisabled;
  }

  isStopButtonDisabled() {
    return this.stopButtonDisabled;
  }
}
