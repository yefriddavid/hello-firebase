import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HelloFirebaseService {
  // ref = firebase.firestore().collection('errorHandlears')

  constructor(private firest: AngularFirestore ) {


  }

  public addHandleErrorApi1(data: { description: string, url: string}): any  {

      return this.firest.collection('handlerErrors').add(data);
  }
  public addHandleErrorApi(data: { description: string, url: string}): Observable<any>  {

    return new Observable((observer) => {
      this.firest.collection('handlerErrors').add(data).then(() => {
        observer.next();
      });
    });
  }

}
