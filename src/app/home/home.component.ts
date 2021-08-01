import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription

  constructor() { }

  ngOnInit() {
   const number = interval(1000);

  //  const takeNumber = number.pipe(take(10))

  //  this.firstSubscription = number.subscribe(x => console.log('Next: ', x))

    const customObservable: Observable<number> = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++
      }, 1000)  
    });

    this.firstSubscription = customObservable.subscribe(val => console.log(val));
  }

  ngOnDestroy(){
    this.firstSubscription.unsubscribe();
  }

}
