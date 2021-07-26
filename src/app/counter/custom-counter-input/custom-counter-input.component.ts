import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { changeName, customIncrement } from '../state/counter.action';
import { getNameSelector } from '../state/counter.selectors';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  // name!: string;
  name$!: Observable<string>;
  subscriptions: Subscription[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // this.store.select(getNameSelector).subscribe((data) => {
    //   console.log('name is subscribed..');
    //   this.name = data;
    // });
    this.name$ = this.store.select(getNameSelector);
  }

  onAdd() {
    console.log(this.value);
    this.store.dispatch(customIncrement({ value: +this.value }));
  }

  onChangeName() {
    this.store.dispatch(changeName());
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
