import { MainService } from './../services/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css'],
})
export class ListAllComponent implements OnInit {
  constructor(private mainService: MainService) {}

  ngOnInit(): void {
    this.test();
  }

  allItens: any;

  test() {
    this.mainService.getAllInfo().subscribe((data) => {
      this.allItens = data;
      console.log(data);
    });
  }
}
