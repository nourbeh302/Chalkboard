import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { Login } from '../../modules/auth/login/interfaces/login';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore = inject(Firestore);
  private firebaseAuth = inject(Auth);

  user$ = user(this.firebaseAuth);
  loggedInUser = signal<User | null | undefined>(undefined);

  constructor() {}

  login(email: string, password: string): Observable<void> {
    const credential = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(credential);
  }

  register(
    email: string,
    displayName: string,
    password: string
  ): Observable<void> {
    let credential = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) => {
      const userData = {
        email: email,
        displayName: displayName,
        password: password,
      };
      addDoc(collection(this.firestore, 'Users'), userData);
      updateProfile(response.user, { displayName: displayName });
    });

    return from(credential);
  }

  async logOut() {
    await signOut(this.firebaseAuth);
  }
}
