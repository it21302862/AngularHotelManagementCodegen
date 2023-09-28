import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog-component',
  templateUrl: './delete-confirmation-dialog-component.component.html',
  styleUrls: ['./delete-confirmation-dialog-component.component.css']
})
export class DeleteConfirmationDialogComponentComponent {

  constructor(private dialogRef: MatDialogRef<DeleteConfirmationDialogComponentComponent>) { }

  confirm(): void {
    this.dialogRef.close('yes'); // Return 'yes' to indicate confirmation
  }

  cancel(): void {
    this.dialogRef.close('no'); // Return 'no' to indicate cancellation
  }


}
