import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Injectable()
export class apiFirebaseProvider {
    private PATH = 'rotas/';

    constructor(private db: AngularFireDatabase) {
    }

    getAll() {
        return this.db.list(this.PATH, ref => ref.orderByChild('name'))
            .snapshotChanges()
            .map(changes => {
                return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
            })
    }

    get(key: string) {
        return this.db.object(this.PATH + key).snapshotChanges()
            .map(c => {
                return { key: c.key, ...c.payload.val() };
            });
    }

    save(contact: any) {
        return new Promise((resolve, reject) => {
            // if (contact.key) {
            //     this.db.list(this.PATH)
            //         .update(contact.key, { "name":"Nomeoaa" })
            //         .then(() => resolve())
            //         .catch((e) => reject(e));
            // } 
            // else {
                this.db.list(this.PATH)
                    .push({ "name" :"Asda" })
                    .then(() => resolve());
            // }
        })
    }

    remove(key: string) {
        return this.db.list(this.PATH).remove(key);
    }
}