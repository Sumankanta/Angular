import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // There are two way to inject the Router
  // 1. using inject more recomended

  // private route = inject(Router)

  // 2. using constructor -> old method
  // constructor(private route : Router){}

  // navigation() {
  //   this.route.navigate(['/about']);
  // }

  // val:number = 2;

}
