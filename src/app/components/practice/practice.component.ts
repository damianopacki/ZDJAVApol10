import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  name: string = 'Damian';
  yearsOld: number = 36;

  divHeight: string = '100px';
  divWidth: string = '100px';
  divColor: string = 'green';

  numberOfClicks: number = 0;

  arrayOfStrings: string[] = ['Damian', 'Maja', 'Piotr', 'Jakub', 'Mateusz', 'Karolina'];

  constructor() { }

  ngOnInit(): void {
  }

  clickListener(): void {
    this.numberOfClicks++;
  }

}
