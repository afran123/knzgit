import { Component } from '@angular/core';

// for event emittor.
import { Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-error-message',
    templateUrl: './errorMessage.html',
})
export class ErrorMessage {

  // for event emittor.
    @Output() notifya: EventEmitter<string> = new EventEmitter<string>();
    onKnzEmitter(): void {
        this.notifya.emit('Message from Child');
        this.ErrorMessageIsVisible = false;
    }


    private ErrorMsg: string;
    public ErrorMessageIsVisible: boolean;

    showErrorMessage(msg: string) {
        this.ErrorMsg = msg;
        this.ErrorMessageIsVisible = true;
    }

    hideErrorMsg() {
        this.ErrorMessageIsVisible = false;
    }
}