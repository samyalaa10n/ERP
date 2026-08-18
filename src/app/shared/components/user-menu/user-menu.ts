import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  signal
} from '@angular/core';

import { Avatar } from 'primeng/avatar';

import { LanguageService } from '../../../core/services/language-service';

@Component({
  selector: 'app-user-menu',

  standalone: true,

  imports: [
    Avatar
  ],

  templateUrl: './user-menu.html',

  styleUrl: './user-menu.scss',

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenu {

  readonly languageService =
    inject(LanguageService);


  readonly menuOpen =
    signal(false);


  readonly user = {

    name: 'Admin',

    role: 'auth.administrator',

    initials: 'AC'

  };


  toggleUserMenu(): void {

    this.menuOpen.update(
      value => !value
    );

  }


  @Output()
  readonly profile =
    new EventEmitter<void>();


  @Output()
  readonly personalData =
    new EventEmitter<void>();


  @Output()
  readonly settings =
    new EventEmitter<void>();


  @Output()
  readonly logout =
    new EventEmitter<void>();

}