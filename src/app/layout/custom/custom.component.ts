import { Component, OnInit,Input } from '@angular/core';
import { routerTransition } from '../../router.animatons';
import { FetchinfoService } from 'src/app/service/fetchinfo.service';
import { FormBuilder } from '@angular/forms';
import {Product} from '../../models/productModel';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

var storeList:String[]=[];
//var count:number=0;

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
  animations:[routerTransition()],
  providers:[FetchinfoService],
})




export class CustomComponent implements OnInit {
  showproductresponse:any;
  progress:number=20;
  answer:String[]=["Intel","Amd","Nvidia"] ;
  @Input() answe:String="default";
  s_ans:String;
  public ques:String[]=["CPU","MOTHERBOARD","RAM","GRAPHIC CARD"];
  public count:number=0;
  public pan:String;


  product: Product[];
  

  
  


  constructor(private fetchinfoService:FetchinfoService,private fb:FormBuilder) {  
    this.fetchProduct();
    this.product=[{productName:"",productId:0,price:0,brand:"",description:"",quantity:0,category:""}];
   }

  ngOnInit() {
    this.fetchProduct();
  }

fetchProduct() {
    
    this.fetchinfoService.fetchProduct(this.pan).subscribe((result)=>{
      this.showproductresponse=result;
    },error=>{},()=>{this.answer=this.showproductresponse.json();
    
    }
    );  
        
  }

  onClick(){
    storeList.push(this.s_ans);
    this.count=this.count+1;
    console.log(storeList);
  }

  // onSelects(abc:string){
  //   this.s_ans=abc;
  //   console.log(abc);
  //   console.log('in select');
  // }
  
  rowSelected(item:any,category:String){
    console.log(item.price);
    console.log(category);
    storeList.push(item);
  }

  public beforeChange($event: NgbPanelChangeEvent) {

     this.pan=$event.panelId;
     console.log(this.pan);
   
  }
}
