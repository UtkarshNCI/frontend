import { Component, OnInit,PipeTransform } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Inventory} from '../models/inventoryModel';
import {Product} from '../models/productModel';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


var productarr: Product[]=[];
var productlist: Product[]=[];

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
  productfilter$:Observable<Product[]>;

  constructor(private fb:FormBuilder,private adminService:AdminService,public pipe: DecimalPipe) {
    
    this.reloadProduct();
    //this.onValueChanges();   works first time only
    //console.log("coming"); 
    //console.log(this.productfilter$);
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

    
    this.onValueChanges();    
    //this.reloadProduct();

  }

  filtersearch(){
    console.log("in filter search");
    
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
      }},error => {

      },()=>{
        this.reloadProduct();
      }
      
    
    );
  }
}
  
  reloadProduct() {
    this.adminService.displayProduct("MOUSE").subscribe((result)=>{
      this.showproductresponse=result;
    },error=>{},()=>{this.product=this.showproductresponse.json();
     productarr=this.product;
     productlist=this.product;
     
     console.log(productarr);
    //   console.log(this.product);
    }
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

    searchparam:any;

    onValueChanges(): void {
      console.log("hola");
      this.filter.valueChanges.subscribe(val=>{
        this.search(val,this.pipe)
      },error=>{},()=>{
        //console.log(this.searchparam);
      })
      // this.productfilter$ = this.filter.valueChanges.pipe(
      //   startWith(''),
      //   map(text => this.search(text, this.pipe))
      // );
      
    }

    search(text: string, pipe: PipeTransform){
      console.log("in func");
      // return productarr.filter(product => {
      //   const term = text.toLowerCase();
      //   return product.productname.toLowerCase().includes(term)||
      //   pipe.transform(product.brand).includes(term);
      // });
     // console.log(productarr);
      //console.log(text);
      // productarr.forEach(element => {
      //   console.log(element.productName);
      //   console.log("ok");
      // });
      this.product=productarr.filter(product => {
          const term = text.toLowerCase();
          return product.productName.toLowerCase().includes(term)||
          product.brand.includes(term);
        });
    }
}

