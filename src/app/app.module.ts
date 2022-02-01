import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { JarwisService } from './services/jarwis.service';
import { PerfilComponent } from './auth/perfil/perfil.component';
import { NavbarComponent } from './auth/navbar/navbar.component';
import { SignupComponent } from './auth/signup/signup.component';
import { RequestResetComponent } from './auth/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './auth/password/response-reset/response-reset.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenService } from './services/token.service';
import { AuthService } from './services/auth.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaginaComponent } from './pagina/pagina.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PerfilComponent,
    NavbarComponent,
    SignupComponent,
    RequestResetComponent,
    ResponseResetComponent,
    PaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgModule
  ],
  providers: [
    JarwisService,
    TokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
