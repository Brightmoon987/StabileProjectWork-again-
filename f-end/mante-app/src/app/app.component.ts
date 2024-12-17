import { Component, OnInit } from '@angular/core';
import { ManteService } from './mante.service';
import { Mante } from './mante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  manteList: Mante[] = [];

  constructor(private manteService: ManteService) {}

  ngOnInit() {
    this.manteService.getMante().subscribe(data => {
      this.manteList = data.mante;
      console.log(this.manteList);
    });
  }
}