import Swal from "sweetalert2";

export class MsgBox {
    public static show(action: string, boxTitle: string, titleTxt: string, confirmTxt: string, cancelTxt: string): boolean {
        let value!: boolean;
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
                value = true;
            }
            else {
                Swal.fire(`${action} Was Canceled`, cancelTxt, `error`);
                value = false;
            }
        });
        return value;
    }
}