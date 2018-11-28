import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game_control',
  templateUrl: './game_control.component.html',
  styleUrls: ['./game_control.component.css']
})

export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<number>();
  timer;
  gameControlResult: number = 0;
  startButtonDisabled = false;
  stopButtonDisabled = true;

  onStartGame() {
    this.startButtonDisabled = true;
    this.stopButtonDisabled = false;

    this.timer = setInterval(
      () => {
        this.gameControlResult++;
        this.gameStarted.emit(this.gameControlResult);
      },
      1000
    );
  }

  onStopGame() {
    clearInterval(this.timer);
    this.startButtonDisabled = false;
    this.stopButtonDisabled = true;
  }

  isStartButtonDisabled() {
    return this.startButtonDisabled;
  }

  isStopButtonDisabled() {
    return this.stopButtonDisabled;
  }
}
