import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ResertComponent } from './user/resert/resert.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserloginComponent,
    HomeComponent,
    ResertComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    // MatButtonModule,
    // MatCheckboxModule,
    BrowserAnimationsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
