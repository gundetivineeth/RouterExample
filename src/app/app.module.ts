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


const appRoute: Routes= [
  { path:'',component:HomeComponent },
  { path:'users/:id',component:UsersComponent },
  { path:'servers',component:ServersComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    ServersComponent
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
