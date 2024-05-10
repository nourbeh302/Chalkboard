import { Injectable, inject } from '@angular/core';
import {
  Auth,
  AuthModule,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore = inject(Firestore);
  private firebaseAuth = inject(Auth);

  constructor() {}

  async login(email: string, password: string) {
    const credential = await signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    );

    return credential.user;
  }

  async register(email: string, password: string) {
    await createUserWithEmailAndPassword(this.firebaseAuth, email, password);

    const userData = {
      email: email,
      password: password,
    };

    await addDoc(collection(this.firestore, 'Users'), userData);
  }

  async logOut() {
    await signOut(this.firebaseAuth)
  }
}
