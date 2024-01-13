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
    console.log("leftOnChange");
  }

  ngOnInit(): void{
    console.log("leftOnInit");
  }

  ngDoCheck(): void {
    console.log("leftDoCheck");
  }

  ngOnDestroy(): void {
    console.log("leftOnDestroy");
  }
}
