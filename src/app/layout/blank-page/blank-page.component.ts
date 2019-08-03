import { Component, OnInit } from '@angular/core';
import { ImgSrcDirective, ImgSrcStyleBuilder } from '@angular/flex-layout';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    listProduct:any=[{},{},,{},,{},,{},{},{},{},{},{},{},{},{},{}
        ,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
        ,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
    ]
    
    constructor() {}

    ngOnInit() {}
}
