import { Component, OnInit,PipeTransform } from '@angular/core';
import { AdminService } from '../service/admin.service';
import { FormBuilder, FormGroup, Validators, FormControl ,FormsModule } from '@angular/forms';
import {Inventory} from '../models/inventoryModel';
import {Product} from '../models/productModel';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
//import { map, startWith } from 'rxjs/operators';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


var productarr: Product[]=[];
//var productlist: Product[]=[];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers:[AdminService,DecimalPipe]
})


export class AdminComponent implements OnInit {
  categoryForm:FormGroup;
  inventoryForm: FormGroup;
  inventoryInputs:Inventory[];
  globalresponse:any;
  showproductresponse:any;
  product: Product[];
  deletionStatus: any;
  filter = new FormControl('');
  productfilter$:Observable<Product[]>;
  catname:string="";
  updateInputs:Inventory;
  updateForm:FormGroup;

  constructor(private fb:FormBuilder,private adminService:AdminService,public pipe: DecimalPipe,private fm:FormsModule,private modalService: NgbModal) {
    
    //this.reloadProduct();
    this.product=[{productName:"",productId:0,price:0,brand:"",description:"",quantity:0,category:""}];
    
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

    this.categoryForm=this.fb.group({categoryOption:['']});

    
    this.onValueChanges();    
    //this.reloadProduct();
  
  }

  filtersearch(){
    console.log("in filter search");
    
  }

  updateProduct(id:number){
    this.adminService.updateProduct(this.updateInputs,id).subscribe((response)=>{
      if(response.status == 200){
        this.reloadProduct();
      }
      else{
        console.log("Failed to update");
      }
    })
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
    //console.log(this.categoryForm.get('categoryOption'));
    //let cat=this.categoryForm.controls['category'].value;
    //console.log(this.categoryForm.controls['categoryOption']);
    this.adminService.displayProduct(this.catname).subscribe((result)=>{
      this.showproductresponse=result;
    },error=>{},()=>{this.product=this.showproductresponse.json();
     productarr=this.product;
     //productlist=this.product;
     
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

    modo(value: string){
      //console.log(this.catname);
       this.catname=value;
       console.log(this.catname);
       this.reloadProduct();
    }



    open(content,uproduct:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
      this.updateForm = this.fb.group({
        updateName:  [uproduct.productName, Validators.required],
        updatebrand:[uproduct.brand,Validators.required],
        updatemodelNumber:[uproduct.modelNumber,Validators.required],
        updatecategory:[uproduct.category,Validators.required],
        updateprice:[uproduct.price,Validators.required],
        updatequantity:[uproduct.quantity,Validators.required],
        updatedescription:[uproduct.description,Validators.required],
      });
    }
  
}

