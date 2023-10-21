import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Location } from 'src/shared/models/Location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  targetEndPoint?:string;//value
  endpoint?:string;//input

  assingTargetPage(e:Event){
    let target = e.target as HTMLLinkElement;
    this.targetEndPoint = Location.home+''+target.getAttribute('href');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("rootOnChange");
  }

  ngOnInit(): void{
    console.log("rootOnInit");
  }

  ngDoCheck(): void {
    console.log("rootDoCheck");
  }

  ngOnDestroy(): void {
    console.log("rootOnDestroy");
  }
}
