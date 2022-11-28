import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({providedIn: 'root'})
export class DialogBoxService {
    public show(boxTitle: string, titleTxt: string)  {
        return Swal.fire({
            title: boxTitle,
            text: titleTxt,
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#C64EB2',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        });
    }
}