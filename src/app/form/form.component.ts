import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  itemForm: FormGroup = new FormGroup({});
  message_success: boolean = false;
  message_error: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private mainService: MainService
  ) {
    this.itemForm = formBuilder.group({
      name: '',
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      sku: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  ngOnInit(): void {}

  data = {
    name: '',
    price: null,
    sku: '',
  };

  onSubmit() {
    this.data.name = this.itemForm.controls['name'].value;
    this.data.price = this.itemForm.controls['price'].value;
    this.data.sku = this.itemForm.controls['sku'].value;

    this.mainService.sendItem(this.data).subscribe(
      (success) => this.showSucess(),
      (error) => console.log(error)
    );
  }

  showSucess() {
    this.message_success = true;
    setTimeout(() => {
      this.message_success = false;
    }, 4000);
    this.itemForm.reset();
  }

  showError() {
    this.message_error = true;
    setTimeout(() => {
      this.message_error = false;
    }, 3000);
    this.itemForm.reset();
  }
}
