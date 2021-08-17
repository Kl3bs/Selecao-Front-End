import { MainService } from './../services/main.service';
import { Component, OnInit, enableProdMode, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css'],
})
export class ListAllComponent implements OnInit {
  constructor(private mainService: MainService, private http: HttpClient) {}

  allItens: any;

  message_success: boolean = false;
  message_error: boolean = false;

  response: any;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.mainService.getAllInfo().subscribe((data) => {
      this.allItens = data;
      console.log(data);
    });
  }

  deleteItem(value: number) {
    let flag: any;
    this.mainService.deleteItem(value).subscribe(
      (success) => this.showSucess(),
      (error) => console.log('ERRO')
    );
  }

  showSucess() {
    this.message_success = true;
    setTimeout(() => {
      this.message_success = false;
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  showError() {
    this.message_error = true;
    setTimeout(() => {
      this.message_error = false;
    }, 2000);

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}
