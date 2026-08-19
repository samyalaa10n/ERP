import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { LanguageService } from '../../core/services/language.service';
import { FormsModule } from '@angular/forms';
import { ComboBox } from "../../shared/components/combo-box/combo-box";
import { AppLanguageCode } from '../../core/localization/app-languages';
import { UserMenu } from "../../shared/components/user-menu/user-menu";
import { SharedDataService } from '../../shared/services/shared-data.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    SelectModule,
    ButtonModule,
    AvatarModule,
    FormsModule,
    ComboBox,
    UserMenu
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Navbar {

  readonly languageService =
    inject(LanguageService);
  readonly sharedDataService =
    inject(SharedDataService);


  languages: any[] =
    Array.from(this.languageService.languages);

     

  async changeLanguage(
    language: AppLanguageCode
  ): Promise<void> {

    await this.languageService.setLanguage(
      language
    );

  }
  openProfile(): void {
    // TODO: navigate to profile
  }


  openPersonalData(): void {
    // TODO: navigate to personal data
  }


  openSettings(): void {
    // TODO: navigate to settings
  }


  logout(): void {
    // TODO: AuthService.logout()
  }

}