import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public title = 'tytuł';
  private privateTitle = 'prywatny tytuł';
  protected protectedTitle = 'chroniony tytuł';

  constructor() {
    console.log('log z constructora');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
