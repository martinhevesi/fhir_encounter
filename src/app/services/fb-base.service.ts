import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { firebaseId?: string }> {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      /* query = query.orderBy('name', 'asc'); */
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  delete(collectionName: string, id: string): Promise<void> {
    console.log("DELETE");
    return this.afs.collection(collectionName).doc(id).delete();
  }

  async add(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.firebaseId = uid;
    await this.afs.collection(collectionName).doc(uid).set(JSON.parse(JSON.stringify(data)));
    console.log("INSERT");
    return uid;
  }

  update(collectionName: string, id: string, data: T): Promise<void> {
    console.log("UPDATE");
    console.log(data);
    return this.afs.collection(collectionName).doc(id).update(JSON.parse(JSON.stringify(data)));
  }
}
