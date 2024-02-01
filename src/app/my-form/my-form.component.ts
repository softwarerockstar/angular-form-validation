import { JsonPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { ValidationSummaryComponent } from '../shared/components/validation-summary/validation-summary.component';

@Component({
  standalone: true,
  selector: 'app-profile-editor',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
  imports: [NgFor, ReactiveFormsModule, JsonPipe, ValidationSummaryComponent],
})
export class MyFormComponent {
  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.minLength(5)],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
    aliases: this.formBuilder.array([this.formBuilder.control('')]),
  });

  
  
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }

  constructor(private formBuilder: FormBuilder) {}

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
      address: {
        street: '123 Drew Street',
      },
    });
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}


