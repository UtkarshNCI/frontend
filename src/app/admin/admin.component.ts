import { Component, OnInit,PipeTransform } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Inventory} from '../models/inventoryModel';
import {Product} from '../models/productModel';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


const productarr: Product[]=[];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[AdminService,DecimalPipe]
})


export class AdminComponent implements OnInit {

  inventoryForm: FormGroup;
  inventoryInputs:Inventory[];
  globalresponse:any;
  showproductresponse:any;
  product: Product[];
  deletionStatus: any;
  filter = new FormControl('');
  productfilter:Observable<Product[]>;

  constructor(private fb:FormBuilder,private adminService:AdminService,public pipe: DecimalPipe) {
   
    this.productfilter = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    ); 
   }

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
function search(text: string, pipe: PipeTransform): Product[] {
  return productarr.filter(product => {
    const term = text.toLowerCase();
    return product.productname.toLowerCase().includes(term)
  });
}