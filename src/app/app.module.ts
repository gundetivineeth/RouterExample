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


const appRoute: Routes= [
  { path:'',component:HomeComponent },
  { path:'users',component:UsersComponent, children:[
  { path:':id/:name',component:UserComponent }]},
  { path:'servers',component:ServersComponent, children:
  [{ path:':id',component:ServerComponent },
  { path:':id/edit',component:EditServerComponent }]},
  {path:'**',component: NotfoundComponent}
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
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
