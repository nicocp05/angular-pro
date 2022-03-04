import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {

  public title: string = '';
  public titleSubs$: Subscription;

  constructor( private router: Router ) {

    this.titleSubs$ = this.getDataRoute()
                        .subscribe( ({title}) => {
                            this.title = title;
                            document.title = `Angular Pro - ${title}`; 
                          });;
  }
  
  ngOnInit(): void {
    this.getDataRoute();
  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();  
  }

  getDataRoute() {
    return this.router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( ( event: any ) => event.snapshot.firstChild === null ),
        map( event => event.snapshot.data )
      )
  }

}
