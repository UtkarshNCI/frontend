import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animatons';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  animations:[routerTransition]
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
