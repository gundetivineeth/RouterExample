import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorHandlingComponent } from './error-handling/error-handling.component';


const appRoute: Routes= [
  { path:'',component:HomeComponent },
  { path:'users',component:UsersComponent, canActivateChild:[AuthGuardService],children:[
  { path:':id/:name',component:UserComponent }]},
  { path:'servers',component:ServersComponent, canActivate:[AuthGuardService],children:
  [{ path:':id',component:ServerComponent },
  { path:':id/edit',component:EditServerComponent, canDeactivate:[CanDeactivateGuard] }]},
  //{path:'not-found',component: NotfoundComponent},
  {path:'not-found', component:ErrorHandlingComponent, data:{mesasge:'page not found'}},
  {path:'**',redirectTo: '/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    ServersComponent,
    NotfoundComponent,
    ErrorHandlingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
