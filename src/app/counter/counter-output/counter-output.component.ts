import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { getCounterSelector } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter!: number;
  // counter: number = 0;
  counter$!: Observable<number>;
  subscriptions: Subscription[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select(getCounterSelector).subscribe((data) => {
    //   console.log('counter is subscribed..');
    //   this.counter = data;
    // });

    this.counter$ = this.store.select(getCounterSelector);
    // console.log(this.counter$);
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
