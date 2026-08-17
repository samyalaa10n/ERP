import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/services/language-service';



interface SidebarItem {
  label: string;
  icon: string;
  route?: string;
  children?: SidebarItem[];
}


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './sidebar.scss'
})
export class SidebarComponent {

  readonly languageService =
    inject(LanguageService);


  readonly collapsed =
    signal(false);


  readonly expandedMenus =
    signal<Set<string>>(new Set());


  readonly mainItems: SidebarItem[] = [

    {
      label: 'menu.dashboard',
      icon: 'pi pi-chart-line',
      route: '/dashboard'
    },

    {
      label: 'menu.sales',
      icon: 'pi pi-shopping-cart',
      route: '/sales'
    },

    {
      label: 'menu.purchases',
      icon: 'pi pi-wallet',
      route: '/purchases'
    },

    {
      label: 'menu.inventory',
      icon: 'pi pi-box',
      route: '/inventory'
    },

    {
      label: 'menu.customers',
      icon: 'pi pi-users',
      route: '/customers'
    },

    {
      label: 'menu.suppliers',
      icon: 'pi pi-truck',
      route: '/suppliers'
    }

  ];


  readonly businessItems: SidebarItem[] = [

    {
      label: 'menu.accounting',
      icon: 'pi pi-calculator',
      route: '/accounting'
    },

    {
      label: 'menu.hr',
      icon: 'pi pi-id-card',
      route: '/hr'
    },

    {
      label: 'menu.restaurant',
      icon: 'pi pi-building',
      route: '/restaurant'
    },

    {
      label: 'menu.manufacturing',
      icon: 'pi pi-cog',
      route: '/manufacturing'
    }

  ];


  readonly analyticsItems: SidebarItem[] = [

    {
      label: 'menu.reports',
      icon: 'pi pi-chart-bar',
      route: '/reports'
    }

  ];


  toggleSidebar(): void {

    this.collapsed.update(
      value => !value
    );

  }


  toggleMenu(label: string): void {

    const menus =
      new Set(this.expandedMenus());

    if (menus.has(label)) {

      menus.delete(label);

    } else {

      menus.add(label);

    }

    this.expandedMenus.set(menus);

  }


  isExpanded(label: string): boolean {

    return this.expandedMenus().has(label);

  }


  translate(key: string): string {

    return this.languageService.translate(key);

  }

}