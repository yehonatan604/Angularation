import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({providedIn: 'root'})
export class MsgBoxService {
    value!: boolean;

    show(action: string, boxTitle: string, titleTxt: string, confirmTxt: string, cancelTxt: string): boolean {
        Swal.fire({
            title: boxTitle,
            text: titleTxt,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#C64EB2',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(`Confirmed!`, confirmTxt, `success`);
                this.value = true;
            }
            else {
                Swal.fire(`${action} Was Canceled`, cancelTxt, `error`);
                this.value = false;
            }
        });
        return !this.value;
    }
}