import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: [
  ]
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id:               new FormControl(''),
    superhero:        new FormControl('', { nonNullable: true }),
    publisher:        new FormControl(''),
    alter_ego:        new FormControl(''),
    first_appearance: new FormControl(''),
    characters:       new FormControl(''),
    alt_ima:          new FormControl(''),
  })

  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]

}
