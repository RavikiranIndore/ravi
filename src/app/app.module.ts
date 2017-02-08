import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';	// Changed by RK-G
import { List } from '../pages/list/list';	// Changed by RK-T

@NgModule({
  declarations: [
    MyApp,
    Home,	// Changed by RK-G
    List	// Changed by RK-T
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,	// Changed by RK-G
    List	// Changed by RK-T
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
