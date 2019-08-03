import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    listProduct:any=[{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"},{name:"a",description:"abc"}]
    
    
    constructor() {}

    ngOnInit() {}
}
