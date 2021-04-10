import { ErrorHandler, Injectable } from '@angular/core';
import {HelloFirebaseService} from './hello-firebase/hello-firebase.service';
// import { HelloFirebaseService } from './hello-firebase.service';

@Injectable()
export class MyErrorHandler implements ErrorHandler {

  // firsest: HelloFirebaseService;
  // constructor() {
  constructor(private firestoreService: HelloFirebaseService) {
    // this.firsest = new HelloFirebaseService();

  }


  handleError(error: any): void {

      // this.firsest.addHandleErrorApi({ description: error, url: 'url/prueba'}).subscribe();
     this.firestoreService.addHandleErrorApi({ description: error, url: 'url/prueba'});
     /*.then( _ => {
       console.log('Save');
     });*/
    // this.firestoreService.addHandleErrorApi({ description: error, url: 'url/prueba'}).subscribe();
    // console.log('Fabian, en alguna parte del codigo segenero un error,como lo se, porque yo todo lo se', error);
        // throw new Error('Method not implemented.');
      // throw new Error('Method not implemented.');

  }
}
