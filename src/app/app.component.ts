import { Component,Input,Output } from '@angular/core';
import { AppVersionsService } from './appVersions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSE-Versions';
  allJSEVersions=[];
  constructor(service:AppVersionsService){
    this.allJSEVersions = service.getAllJSEVersions();
  }
}
