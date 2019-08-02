import { Component, OnInit } from '@angular/core';
import {ContactserviceService} from '../../service/contactservice.service';
import { FormBuilder , FormGroup, Validators, FormControl } from '@angular/forms';
import {Contactdetails} from '../../models/contactModels';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private contactser:ContactserviceService,private fb:FormBuilder) { }

  ngOnInit() {
  }
  contactobject:Contactdetails;

}
