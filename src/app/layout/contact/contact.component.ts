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
  contactobject:Contactdetails;
  contactForm:FormGroup;
  globalresponse:any;

  constructor(private contactser:ContactserviceService,private fb:FormBuilder) { }

  ngOnInit() {
    this.contactForm=this.fb.group({
      name:"",
      email:"",
      phone:"",
      message:""

    })
  }

  onSubmit(){
    this.contactobject=this.contactForm.value;
    console.log(this.contactobject);
    this.contactser.contactFunc(this.contactobject).subscribe((result)=>{
      this.globalresponse=result;
    },error =>{},
    ()=>
    {
      
    })
  }
  
}
