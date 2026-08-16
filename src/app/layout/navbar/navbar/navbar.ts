import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';

import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AppLanguage, LanguageService } from '../../../core/services/language-service';
import { FormsModule } from '@angular/forms';
import { ComboBox } from "../../../shared/components/combo-box/combo-box";
import { Button } from "../../../shared/components/button/button";


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
    Button
],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Navbar {

  readonly languageService = inject(LanguageService);

  readonly languages = [
    {
      code: 'ar' as AppLanguage,
      name: 'العربية',
      shortName: 'AR'
    },
    {
      code: 'en' as AppLanguage,
      name: 'English',
      shortName: 'EN'
    }
  ];

  changeLanguage(language: AppLanguage): void {
    this.languageService.setLanguage(language);
  }
}