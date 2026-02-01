import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  isSending = false;
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  sendMessage() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    emailjs.send(
      'service_twbc6t7',      // EmailJS Service ID
      'template_bif7in7',     // EmailJS Template ID
      {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        message: this.contactForm.value.message
      },
      { publicKey: 'upxTC8kYKq7NXmhUu' } // EmailJS Public Key
    )
      .then(() => {
        this.showToastMessage(
          'Message sent successfully! You’ll receive a response shortly. Thank you for reaching out.',
          'success'
        );

        this.contactForm.reset();
      })
      .catch(() => {
        this.showToastMessage('Failed to send message. Please try again.', 'error');
      })
      .finally(() => {
        this.isSending = false;
      });
  }

  private showToastMessage(msg: string, type: 'success' | 'error') {
    this.toastMessage = msg;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => this.showToast = false, 5000);
  }
}
