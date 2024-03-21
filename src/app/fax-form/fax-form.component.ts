import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fax',
  templateUrl: './fax-form.component.html',
  styleUrls: ['./fax-form.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class FaxComponent {
  faxForm: FormGroup;
  showFaxInput = true;
  faxNumber?: string;

  constructor(private fb: FormBuilder) {
    this.faxForm = this.fb.group({
      faxInput: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  sendFax() {
    if (this.faxForm.valid) {
      this.showFaxInput = false;
      this.faxNumber = this.faxForm.get('faxInput')?.value;
    }
  }
}
