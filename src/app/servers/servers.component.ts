import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';

  constructor() {
    setTimeout(
      () => {
        this.allowNewServer = true;
      },
      2000
    );
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.allowNewServer = false;
    this.serverCreationStatus = 'Server was created!';
    setTimeout(
      () => {
        this.allowNewServer = true;
        this.serverCreationStatus = 'No server was created!';
      },
      2000
    );
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
