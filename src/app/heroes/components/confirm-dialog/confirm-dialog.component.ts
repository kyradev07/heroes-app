import { Component, inject } from '@angular/core';
import { Hero } from "../../interfaces/hero.interface";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly hero: string = inject<string>(MAT_DIALOG_DATA);

  onClose(isConfirm: boolean) {
    this.dialogRef.close(isConfirm);
  }
}
