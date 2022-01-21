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

Navigating programatically using below 
`this.router.navigate([''edit])`

where router:Router

to get parameter from the router parameter in component using the following
private activeRoute:ActivatedRoute

`this.activeRoute.snapshot.params['id'];`

to reactively update the ActivatedRoute parameters use the following 

this.activeRouter.params.subscribe(
      (params:Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    )

  Here `+` beside indicates that value is convert from string to respective type

  `children` tag is used to configure the suburl like /server/:id or user/:name

  `this.activeRoute.snapshot.queryparam;` used to retrieve queryparam same for fragment as well

  `fragment` is part of url just like `#loading`

`path:**` in the app.module.ts indicates that if the url other than above that is trying to fetch it will fetch notfoud component for all other urls 

`Guard` is the concept where we protect the router by authentication

{ path:'servers',component:ServersComponent, canActivate:[AuthGuardService] }

`canActivate` will protect both parent and its child routers -- 

AuthGuardService will implement canActivate where it return observable or promise 
with boolean -- based on the return value from canActivate method router is protected

Similarly of we need to give protection only to child routers but not parent than
we can use `canActivateChild` and implement canActivateChild 

you can see the difference between users and server but running the application where users parent is not protected but child url are protected by `canActivateChild` so you can access users but when you try to access child it will redirect

`canDeactivate` is used when we dont wanted to move away from the component by mistake when user click on the back without saving the data
Here will give alert to user that are you sure about going back with out updating the details.
please check edit-server.component to better understanding

`data:{mesasge:'page not found'}` this is used when we need to pass static data from route

