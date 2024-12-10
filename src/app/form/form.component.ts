import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // ReactiveFormsModule for form handling
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf, *ngFor

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Import CommonModule here
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  feedbackForm: FormGroup; // Form group for feedback form
  formSubmitted: boolean = false; // Track form submission status

  constructor(private fb: FormBuilder) {
    // Initialize the form with validation rules
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form submitted:', this.feedbackForm.value);
      this.formSubmitted = true; // Set form submission status to true
      this.feedbackForm.reset(); // Optionally reset the form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}
