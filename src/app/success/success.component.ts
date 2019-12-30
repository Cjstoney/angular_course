import {Component}from '@angular/core';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrls: ['./success.component.css']
})

export class SuccessComponent {
 userName = ''
    constructor(){

    }

    ngOnInit(){

    }
    onUpdateUserName(event:Event){
        this.userName=(<HTMLInputElement>event.target).value
        // this.userName = event
    }
}  