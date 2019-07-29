import { Component, OnInit } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Inventory} from '../models/inventoryModel';
import {Product} from '../models/productModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[AdminService]
})
export class AdminComponent implements OnInit {

  inventoryForm: FormGroup;
  inventoryInputs:Inventory[];
  globalresponse:any;
  showproductresponse:any;
  product: Product[];
  deletionStatus: any;

  constructor(private fb:FormBuilder,private adminService:AdminService) { }

  ngOnInit() {
    this.inventoryForm = this.fb.group({
      productName:  ['', Validators.required],
      brand:['',Validators.required],
      modelNumber:['',Validators.required],
      category:['',Validators.required],
      price:['',Validators.required],
      quantity:['',Validators.required],
      description:['',Validators.required],
    });
    
    this.reloadProduct();

  }
  
  deleteProduct(id: number){
    console.log(id);
    const answer = confirm('are you sure you want to delete this poduct');
    if( answer === true){
    this.adminService.deleteProduct(id).subscribe((response) =>{
      if(response.status === 200){
        this.reloadProduct();
      }
      else{
        alert('Could not delete the product');
      }
    }
    );
  }
}
  
  reloadProduct() {
    this.adminService.displayProduct("MOUSE").subscribe((result)=>{
      this.showproductresponse=result;
    },error=>{},()=>{this.product=this.showproductresponse.json();
      console.log(this.product);}
    );       
  }
  
  
  
  // handleSuccessfulResponse(response)
  // { // var token=response._body;
  //     this.product=response.json();
  //     console.log(this.product);
  // }

    AddInventory(){
       this.inventoryInputs=this.inventoryForm.value;
      // console.log(this.inventoryInputs);
      // console.log(this.inventoryForm);
      console.log(this.inventoryInputs);
      this.adminService.AddProduct(this.inventoryInputs)
          .subscribe((result)=>{
            this.globalresponse=result;
          },error =>{},
          ()=>
          {});

    }
  

}
