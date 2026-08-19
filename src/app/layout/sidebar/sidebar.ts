import {
  Component,
  inject,
  signal,
  ChangeDetectionStrategy
} from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';



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
      icon: 'pi pi-shopping-bag',
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


  readonly retailItems: SidebarItem[] = [

    {
      label: 'menu.pos',
      icon: 'pi pi-desktop',
      route: '/pos'
    },

    {
      label: 'menu.cashiers',
      icon: 'pi pi-calculator',
      route: '/cashiers'
    },

    {
      label: 'menu.branches',
      icon: 'pi pi-building',
      route: '/branches'
    },

    {
      label: 'menu.showrooms',
      icon: 'pi pi-shop',
      route: '/showrooms'
    },

    {
      label: 'menu.warehouses',
      icon: 'pi pi-database',
      route: '/warehouses'
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
      label: 'menu.expenses',
      icon: 'pi pi-money-bill',
      route: '/expenses'
    },

    {
      label: 'menu.assets',
      icon: 'pi pi-briefcase',
      route: '/assets'
    },

    {
      label: 'menu.costCenters',
      icon: 'pi pi-sitemap',
      route: '/cost-centers'
    }

  ];


  readonly operationsItems: SidebarItem[] = [

    {
      label: 'menu.manufacturing',
      icon: 'pi pi-cog',
      route: '/manufacturing'
    },

    {
      label: 'menu.production',
      icon: 'pi pi-sliders-h',
      route: '/production'
    },

    {
      label: 'menu.maintenance',
      icon: 'pi pi-wrench',
      route: '/maintenance'
    },

    {
      label: 'menu.services',
      icon: 'pi pi-cog',
      route: '/services'
    },

    {
      label: 'menu.projects',
      icon: 'pi pi-briefcase',
      route: '/projects'
    }

  ];


  readonly restaurantItems: SidebarItem[] = [

    {
      label: 'menu.restaurant',
      icon: 'pi pi-building',
      route: '/restaurant'
    },

    {
      label: 'menu.tables',
      icon: 'pi pi-table',
      route: '/restaurant/tables'
    },

    {
      label: 'menu.kitchen',
      icon: 'pi pi-th-large',
      route: '/restaurant/kitchen'
    },

    {
      label: 'menu.menuManagement',
      icon: 'pi pi-list',
      route: '/restaurant/menu'
    },

    {
      label: 'menu.recipes',
      icon: 'pi pi-book',
      route: '/restaurant/recipes'
    }

  ];


  readonly analyticsItems: SidebarItem[] = [

    {
      label: 'menu.reports',
      icon: 'pi pi-chart-bar',
      route: '/reports'
    },

    {
      label: 'menu.analytics',
      icon: 'pi pi-chart-line',
      route: '/analytics'
    },

    {
      label: 'menu.dashboardAnalytics',
      icon: 'pi pi-chart-pie',
      route: '/analytics/dashboard'
    }

  ];


  readonly administrationItems: SidebarItem[] = [

    {
      label: 'menu.users',
      icon: 'pi pi-users',
      route: '/users'
    },

    {
      label: 'menu.roles',
      icon: 'pi pi-shield',
      route: '/roles'
    },

    {
      label: 'menu.permissions',
      icon: 'pi pi-lock',
      route: '/permissions'
    },

    {
      label: 'menu.company',
      icon: 'pi pi-building',
      route: '/company'
    },

    {
      label: 'menu.settings',
      icon: 'pi pi-cog',
      route: '/settings'
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