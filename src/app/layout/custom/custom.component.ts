import { Component, OnInit,Input } from '@angular/core';
import { routerTransition } from '../../router.animatons';
import { FetchinfoService } from 'src/app/service/fetchinfo.service';

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
  

  
  


  constructor(private fetchinfoService:FetchinfoService) {   }

  ngOnInit() {
    this.fetchProduct();
  }

fetchProduct() {
    
    this.fetchinfoService.fetchProduct("MOUSE").subscribe((result)=>{
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

  onSelect(abc:string){
    this.s_ans=abc;
  }
  

}
