import { Component, OnInit } from '@angular/core';
import {Customer} from '../../models/customer';
import {Store} from '@ngrx/store';
import {CustomerState} from '../store/reducer/customer.reducer';
import { addCustomer } from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})

export class CustomerAddComponent {
    constructor(private store: Store<CustomerState>) {
    }
    addCustomer(customerName: string): void {
      const customer = new Customer();
      customer.name = customerName;
      this.store.dispatch(addCustomer(customer));
  }
}
