import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers: boolean = false;
  serverCreationStatus:string = 'No server was created';
  serverName ='';


  constructor() { 
    setTimeout(()=>{ 
      this.allowNewServers = true
    },2000)
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'server was created! You have created the '+ this.serverName + ' server.'
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
