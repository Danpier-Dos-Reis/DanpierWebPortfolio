import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { ProfileComponent } from './right-panel/profile/profile.component';
import { ProjectsComponent } from './right-panel/projects/projects.component';
import { ContactMeComponent } from './right-panel/contact-me/contact-me.component';
import { NotesComponent } from './right-panel/notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    RightPanelComponent,
    ProfileComponent,
    ProjectsComponent,
    ContactMeComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
