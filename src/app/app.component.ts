import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cobykatz';
  public className = "white";

  public clickEvent(a: any){
    this.className = a;
  }
}
