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