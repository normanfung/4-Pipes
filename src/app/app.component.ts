import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  paymentDate: Date;
  paymentAmount: number;
  miles: number;

  onNameChange(payeeName: string) {
    this.name = payeeName;
  }

  onDateChange(date: string) {
    this.paymentDate = new Date(date);
  }

  onAmountChange(amount: number) {
    this.paymentAmount = amount;
  }

  onMilesChange(miles: number) {
    this.miles = miles;
  }
}
