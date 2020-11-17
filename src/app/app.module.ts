// module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// firbase

// component
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';

// service


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: "time-line", component: TimeLineComponent },
      { path: "Add" }
    ])
  ],

  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HomeComponent, 
    TimeLineComponent, 
    AddTweetComponent 
  ],

  bootstrap:    [ 
    AppComponent 
  ]

})
export class AppModule { }
