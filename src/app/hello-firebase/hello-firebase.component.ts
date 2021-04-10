import { Component, OnInit } from '@angular/core';
import { HelloFirebaseService } from './hello-firebase.service';

@Component({
  selector: 'app-hello-firebase',
  templateUrl: './hello-firebase.component.html',
  styleUrls: ['./hello-firebase.component.css']
})
export class HelloFirebaseComponent implements OnInit {

  constructor(private firestoreService: HelloFirebaseService) { }

  ngOnInit(): void {
    // throw Error('this is an error');
  }

  saveData(): void {

    // alert(' Miguel Angel estudie, no por plata sino para que crezca como persona, y juegue pero mas poquito!');
    throw Error('this is an error');
    // this.firestoreService.addHandleErrorApi({ description: 'fabian_la_loca', url: 'url/prueba'}).subscribe();
    // this.firestoreService.addHandleErrorApi({ name: 'fabian_la_loca', url: 'url/prueba'}).subscribe( _ => { console.log('guardo gracias al caco de fabi') });
    // alert('el burro de fabian');

  }
}
