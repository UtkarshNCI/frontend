import { Component, OnInit,Input } from '@angular/core';
import { routerTransition } from '../../router.animatons';
import { FetchinfoService } from 'src/app/service/fetchinfo.service';
import { FormBuilder , FormGroup, Validators, FormControl } from '@angular/forms';
import {Product} from '../../models/productModel';
import {Order} from '../../models/orderModel';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

var storeList:String[]=[];
//var count:number=0;
var itemList:Map<string,any>;

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  animations:[routerTransition()],
  providers:[FetchinfoService],
})




export class CustomComponent implements OnInit {
  showproductresponse:any;
  // progress:number=20;
  //answer:String[]=["Intel","Amd","Nvidia"] ;
  // @Input() answe:String="default";
  // s_ans:String;
  // public ques:String[]=["CPU","MOTHERBOARD","RAM","GRAPHIC CARD"];
  // public count:number=0;
   public pan:String;


  product: Product[]; //displaying data in form
  titlearr:string[]=["CPU","Motherboard","RAM","Harddisk","Keyboard","Mouse","Display"];
  addressForm:FormGroup;
  orderInputs:Order;//Sending this object to server
  
  

  
  


  constructor(private fetchinfoService:FetchinfoService,private fb:FormBuilder) {  
    //this.fetchProduct();
    this.product=[{productName:"Test-Name",productId:0,price:0,brand:"Test-Brand",description:"",quantity:0,category:"CPU"}];
   }

  ngOnInit() {
    // this.fetchProduct();
    this.addressForm = this.fb.group({
      address:  ['', Validators.required],
    });

  }

fetchProduct() {

   console.log(this.pan);  
    this.fetchinfoService.fetchProduct(this.pan).subscribe((result)=>{
      this.showproductresponse=result;
    },error=>{},()=>{this.product=this.showproductresponse.json();
    
    }
    );  
        
  }

  // onClick(){
  //   storeList.push(this.s_ans);
  //   this.count=this.count+1;
  //   console.log(storeList);
  // }

  // onSelects(abc:string){
  //   this.s_ans=abc;
  //   console.log(abc);
  //   console.log('in select');
  // }
  
  rowSelected(item:any,category:String){
    console.log(item.price);
    console.log(category);
    //category="CPU";
    for (let index = 0; index < this.titlearr.length; index++) {
      
      if(this.titlearr[index]==category)
      {
        this.titlearr[index]=this.titlearr[index]+"  "+item.productName;
      }
      
    }
    
    itemList.set(item.category,item.productName);

    console.log(itemList);
    
  }

  public beforeChange($event: NgbPanelChangeEvent) {

     
     if ( $event.nextState === true) {
      this.pan=$event.panelId;
    }
     //console.log(this.pan);
     this.fetchProduct();
   
  }

  placeOrder(){
    this.orderInputs['address']=this.addressForm.value;
    
  }
}
