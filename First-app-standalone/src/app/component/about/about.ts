import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

  // private route = inject(ActivatedRoute)

  // ngOnInit(){
  //   const id = this.route.snapshot.paramMap.get('id');
  //   console.log(id);

  //   this.route.params.subscribe({
  //     next: (data) =>{
  //       console.log(data['id']);
  //     },
  //     error: (e) =>{
  //       console.log(e);
  //     }
  //   })
  // }
}
