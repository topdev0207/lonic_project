import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './shared/user.service';

import { AuthGuard } from '../auth/auth.guard';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { Geolocation} from '@ionic-native/geolocation/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AuthGuard,
    AuthInterceptor,
    Geolocation,

    {
      provide:  HTTP_INTERCEPTORS,
      useClass:  AuthInterceptor,
      multi: true
    }, 
    {
      provide: RouteReuseStrategy,
      useClass:IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
