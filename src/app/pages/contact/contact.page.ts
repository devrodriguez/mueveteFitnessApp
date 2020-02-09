import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  public customer: any = {
    name: '',
    email: '',
    message: ''
  }

  constructor(private utilService: UtilService) { }

  ngOnInit() {
  }

  saveContact(form: NgForm) {
    let formValues = form.value;
    this.customer.name = formValues.name;
    this.customer.email = formValues.email;
    this.customer.message = formValues.message;

    console.log(this.customer)

    this.utilService.saveContactInfo(this.customer)
    .subscribe(res => {
      console.log(res);
    }, err => {
      throw new Error(err);
    });
  }

}
