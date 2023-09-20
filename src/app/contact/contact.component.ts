import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData: any = {};
  formSubmitted: boolean = false;
  successMessage: string = ''; 

  submitForm() {

    console.log('Form data:', this.formData);
    this.successMessage = 'Thank you! Your message has been submitted successfully.';
    this.formData = {};
    this.formSubmitted = true;
  }

}
