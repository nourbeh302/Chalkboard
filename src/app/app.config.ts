import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'chalkboard-ng',
          appId: '1:597866954903:web:5a3361cb3abc32c88529d2',
          storageBucket: 'chalkboard-ng.appspot.com',
          apiKey: 'AIzaSyDzwNFhkmnYNvcDN-0AhWJv3G2HbWq11YI',
          authDomain: 'chalkboard-ng.firebaseapp.com',
          messagingSenderId: '597866954903',
          measurementId: 'G-EY4MM6PBG9',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage())),
  ],
};
