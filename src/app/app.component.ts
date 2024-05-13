import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { UserService } from './core/services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'chalkboard';
  userService: UserService = inject(UserService);

  ngOnInit() {
    this.userService.user$.subscribe((user) => {
      if (user) {
        this.userService.loggedInUser.set({
          id: user.uid,
          email: user.email!,
          photoURL: null,
          displayName: user.displayName,
        });
      } else {
        this.userService.loggedInUser.set(null);
      }
      console.log(this.userService.loggedInUser());
    });
  }

  onClick() {
    this.userService.logOut()
  }
}
