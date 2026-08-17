import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject,
  ChangeDetectionStrategy
} from '@angular/core';

import { Avatar } from 'primeng/avatar';
import { Menu } from 'primeng/menu';

import type { MenuItem } from 'primeng/api';

import { LanguageService } from '../../../core/services/language-service';

@Component({
  selector: 'app-user-menu',

  standalone: true,

  imports: [
    Avatar,
    Menu
  ],

  templateUrl: './user-menu.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './user-menu.scss'
})
export class UserMenu {

  readonly languageService =
    inject(LanguageService);


  /*
   * User Data
   * -----------------------------------------
   * Later you can get these from AuthService
   */

  user = {
    name: 'Admin',
    role: 'auth.administrator',
    initials: 'AC'
  };


  /*
   * Menu
   */
  readonly menuItems = computed<MenuItem[]>(() => {
    const t = (key: string) =>
      this.languageService.translate(key);

    return [
      {
        label: t('user.profile'),
        icon: 'pi pi-user',
        command: () => this.profile.emit()
      },
      {
        label: t('user.personalData'),
        icon: 'pi pi-id-card',
        command: () => this.personalData.emit()
      },
      {
        label: t('common.settings'),
        icon: 'pi pi-cog',
        command: () => this.settings.emit()
      },
      {
        separator: true
      },
      {
        label: t('auth.logout'),
        icon: 'pi pi-sign-out',
        styleClass: 'logout-item',
        command: () => this.logout.emit()
      }
    ];
  });


  /*
   * Events
   */

  @Output()
  profile =
    new EventEmitter<void>();


  @Output()
  personalData =
    new EventEmitter<void>();


  @Output()
  settings =
    new EventEmitter<void>();


  @Output()
  logout =
    new EventEmitter<void>();

}