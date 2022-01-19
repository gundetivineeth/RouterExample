# RouterExample

Router in angular are used to configure and navigate between different urls

To use Router you need to configure them in app.module.ts 

You need to import Routes and RouterModule

`Example:`

RouterModule.forRoot([
  { path:'',component:HomeComponent },
  { path:'users',component:UsersComponent },
  { path:'servers',component:ServersComponent }
]);

To configure dynamic values as part of url you need to make use of `:`

`{ path:'users/:id',component:UsersComponent }`

`<router-outlet></router-outlet>` -- This should be defined in your .html file where we want to render the component when the above is loaded

routerLink -- This more like href but her we replace with path url as below

`<a routerLink="/servers">Servers</a>`

routerLinkActive -- is styling to added to let know which element is active as below

`routerLinkActive="active"` 
