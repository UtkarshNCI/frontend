import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss']
})
export class PageheaderComponent implements OnInit {

  @Input() heading: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
