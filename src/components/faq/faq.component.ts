import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [NgFor,NgIf],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs = [
    {
      question: "Is the hospital open 24*8 hours?",
      answer: "Yes, it is open and we provide multiple support services.",
      open: false
    },
    {
      question: "What are the visiting hours?",
      answer: "Our visiting hours are from 9 AM to 5 PM every day.",
      open: false
    },
    {
      question: "Do you provide emergency services?",
      answer: "Yes, we provide 24/7 emergency services.",
      open: false
    },
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment by visiting our website or calling our helpline.",
      open: false
    },
    {
      question: "Do you offer online consultations?",
      answer: "Yes, we offer online consultations through our app or website.",
      open: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
