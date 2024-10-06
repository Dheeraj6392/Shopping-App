import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentsComponent } from './shared-components/header-components/header-components.component';
import { FooterComponentComponent } from './shared-components/footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './shared-components/home-component/home-component.component';
import { CardComponent } from './shared-components/card/card.component';
import { CartItemComponent } from './business-component/cart-item/cart-item.component';
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'}, // Default route
    { path: 'home', component: HomeComponentComponent},
    {path: 'cart', component: CartItemComponent},
   {path: '**', redirectTo: '/home' } // Wildcard route for 404
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentsComponent,
    FooterComponentComponent,
    HomeComponentComponent,
    CardComponent,
    CartItemComponent
  ],
  imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
      
        RouterModule.forRoot(routes),
        
      ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// ************************************************************************8

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { DemoComponentComponent } from './demo-component/demo-component.component';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { ResultComponentComponent } from './result-component/result-component.component'; 
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
//   { path: 'home', component: DemoComponentComponent },
//   { path: 'result', component:  ResultComponentComponent},
  
//  { path: '**', redirectTo: '/home' } // Wildcard route for 404
// ];

// @NgModule({
//   declarations: [
//     AppComponent,
//     DemoComponentComponent,
//     ResultComponentComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     HttpClientModule,
//     FormsModule,
  
//     RouterModule.forRoot(routes),
    
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
