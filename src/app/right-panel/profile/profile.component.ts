import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Location } from 'src/shared/models/Location';
import { Image } from 'src/shared/models/Image';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnChanges,OnInit,DoCheck,OnDestroy {

  pictures:Image[] = [Image.img1,Image.img2,Image.img3,Image.img4,Image.img5,Image.img6,Image.img7];
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("profileOnChanges");
  }
  ngOnInit(): void {
    console.log("profileOnInit");
  }
  ngDoCheck(): void {
    console.log("profileDoCheck");
  }
  ngOnDestroy(): void {
    console.log("profileOnDestroy");
  }
}