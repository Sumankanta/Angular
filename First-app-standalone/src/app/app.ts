import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { Header } from "./header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkWithHref, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = ('First-app-standalone');

  // constructor(){
  //   console.log("Constructor Called");

  // }

  // ngOnInit(){
  //   this.changeTitle();
  //   console.log("OnInit Called");
  // }

  changeTitle(){
    this.title = 'Angular First App Test';
    console.log("Title change Function called");
  }
}
