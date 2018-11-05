import { Component, Input} from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger,state} from '@angular/animations';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.css'],
  inputs:['aIcon','sIcon'],
  animations: [

    trigger('heightAnimation',[
          
          state('true'  , style({height:'{{poduvu}}' , background:'{{color}}'}),
                                {params : { poduvu:"150px" , color:"lightcyan",time:2}}),
          state('false' , style({height:0}) ),
          
          transition('true => false' , animate('{{time}} ease-in-out'),{params : { poduvu:"150px" , color:"lightcyan",time:"2s"}}),
          transition('false => true' , animate('{{time}} ease-in-out'),{params : { poduvu:"150px" , color:"lightcyan",time:"2s"}})
    ]),

    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        //query('.features',animate("1s style({ height:250px)})"), { optional: true }),

        query(':enter', stagger('250ms', [
          animate('0.8s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true}),
       
        
        query(':leave', stagger('-250ms', [
          animate('0.5s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0.8, transform: 'translateY(5px)', offset: 0.3}),
            style({opacity: .45, transform: 'translateY(-18px)',  offset: 0.65}),
            style({opacity: 0.2, transform: 'translateY(-30px)',  offset: 0.8}),
            style({opacity: 0, transform: 'translateY(-45px)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})

export class VersionsComponent{


  @Input('storeFeatures') storeFeatures = [];
  featuresArray = [];
  isExpanded:boolean;
  calculatedHeight;
  calculatedTime;
  aIcon=[];
  sIcon=[];

  expand(){
    if(!this.isExpanded){
     this.featuresArray = this.storeFeatures;
     this.calculateParams();
    }
    else{
      this.featuresArray = [];
    }
    this.isExpanded=!this.isExpanded;
  }

  calculateParams(){
    this.calculatedHeight = String(37.5 * this.storeFeatures.length) + "px";
    this.calculatedTime  = String(this.storeFeatures.length * 0.35) + "s" ;
  }
  
  //not used now...maybelater
  assignIcons(){
    for(var i=0;i<this.storeFeatures.length;i++){
      switch(this.storeFeatures[i].aStatus){
        case 'notApplicable':this.aIcon[i]='not_interested';break;
        case 'enabled':this.aIcon[i]='check_circle';break;
        case 'Applicable':this.aIcon[i]='done_all';break;
        default : this.aIcon[i]='hourglass';
      }
      switch(this.storeFeatures[i].sStatus){
        case 'notApplicable':this.sIcon[i]='not_interested';break;
        case 'enabled':this.sIcon[i]='check_circle';break;
        case 'Applicable':this.sIcon[i]='done_all';break;
        default : this.sIcon[i]='hourglass';
      }
    }
  }
  
  
}