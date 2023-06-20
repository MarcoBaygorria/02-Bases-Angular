import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset(10)">Reset</button>
    `,
})
export class CounterComponent {
    public counter: number = 10
  
    //Incrementar y descrementar el valor en 1
    increaseBy(value: number): void {
      this.counter += value;
    }
  
    reset(value: number):void {
      this.counter = value
    }
}