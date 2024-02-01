import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'validation-summary',
  standalone: true,
  templateUrl: './validation-summary.component.html',
  styleUrls: ['./validation-summary.component.scss'],
  imports: [CommonModule]
})
export class ValidationSummaryComponent implements OnInit {
  @Input() form: any;
  errors: string[] = [];

  constructor() { }

  ngOnInit() {
    if (this.form instanceof FormGroup === false) {
      throw new Error('You must supply the ValidationSummary component with a FormGroup as form input.');
    }

    this.form.valueChanges.subscribe(
      (selectedValue: any) => {
        console.log(selectedValue);

        this.resetErrorMessages();
        this.generateErrorMessages(this.form);
      }
    );

  }

  resetErrorMessages() {
    this.errors.length = 0;
  }

  generateErrorMessages(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(controlName => {
      let control = formGroup.controls[controlName];
      let errors = control.errors;
      if (errors === null || errors["count"] === 0) {
        return;
      }
      if (errors["required"]) {
        this.errors.push(`${controlName} is required`);
      }
      if (errors["minlength"]) {
        this.errors.push(`${controlName} minimum length is ${errors["minlength"].requiredLength}.`);
      }
      if (errors["message"]){
        this.errors.push(`${controlName} ${errors["message"]}`);
      }
    });
  }
}