mport { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';


@NgModule({
 declarations: [
 AppComponent,
 NavbarComponent,
 HomeComponent,
 DashboardComponent,
 LoginComponent
 ],
 imports: [
 BrowserModule,
 HttpModule,
 ReactiveFormsModule,
 FormsModule,
 AppRoutingModule
 ],
 providers: [AuthService, AuthGuard, NotAuthGuard],
 bootstrap: [AppComponent]
})
export class AppModule { }
​​