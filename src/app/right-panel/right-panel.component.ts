import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Location } from 'src/shared/models/Location';

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss']
})

export class RightPanelComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() endpoint?:string;
  root:string = Location.profile;
  profileSite:string = Location.profile;
  projectsSite:string = Location.projects;
  contactMe:string = Location.contactme;
  notes:string = Location.notes;

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
