import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { TableModule } from 'primeng/table';

import { LanguageService } from '../../core/services/language.service';
import { SharedDataService } from '../../shared/services/shared-data.service';
import { DatePicker } from 'primeng/datepicker';

interface Sale {
  invoiceNumber: string;
  customer: string;
  customerInitials: string;
  date: string;
  paymentMethod: string;
  total: number;
  status: string;
}


@Component({
  selector: 'app-sales',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    DatePicker,
    Button,
    InputText,
    Select,
    TableModule
  ],

  templateUrl: './sales.html',

  styleUrl: './sales.scss',

  changeDetection:
    ChangeDetectionStrategy.OnPush
})
export class Sales {


  readonly languageService =
    inject(LanguageService);
  readonly sharedDataService =
    inject(SharedDataService);


  dateFrom: Date | null = null;
  dateTo: Date | null = null;

  searchText = '';

  selectedCustomer: string | null = null;

  selectedStatus: string | null = null;

  loading = false;


  totalSales = 125850;

  paidAmount = 98450;

  pendingAmount = 27400;

  returnsAmount = 3200;


  customers = [
    {
      id: 1,
      name: 'Ahmed Ali'
    },
    {
      id: 2,
      name: 'Mohamed Hassan'
    },
    {
      id: 3,
      name: 'Sara Ahmed'
    }
  ];


  statuses = [
    {
      label: 'Paid',
      tranclate: 'sales.status.paid'
    },
    {
      label: 'Pending',
      tranclate: 'sales.status.pending'
    },
    {
      label: 'Cancelled',
      tranclate: 'sales.status.cancelled'
    }
  ];


  sales: Sale[] = [

    {
      invoiceNumber: 'INV-0001',
      customer: 'Ahmed Ali',
      customerInitials: 'AA',
      date: '18/08/2026',
      paymentMethod: 'Cash',
      total: 1250,
      status: 'sales.status.paid'
    },

    {
      invoiceNumber: 'INV-0002',
      customer: 'Mohamed Hassan',
      customerInitials: 'MH',
      date: '18/08/2026',
      paymentMethod: 'Card',
      total: 3450,
      status: 'sales.status.paid'
    },

    {
      invoiceNumber: 'INV-0003',
      customer: 'Sara Ahmed',
      customerInitials: 'SA',
      date: '17/08/2026',
      paymentMethod: 'Cash',
      total: 875,
      status: 'sales.status.pending'
    },

    {
      invoiceNumber: 'INV-0004',
      customer: 'Omar Ali',
      customerInitials: 'OA',
      date: '17/08/2026',
      paymentMethod: 'Bank',
      total: 5200,
      status: 'sales.status.paid'
    },

    {
      invoiceNumber: 'INV-0005',
      customer: 'Nour Mohamed',
      customerInitials: 'NM',
      date: '16/08/2026',
      paymentMethod: 'Cash',
      total: 740,
      status: 'sales.status.cancelled'
    }

  ];


  filteredSales: Sale[] =
    [...this.sales];

  ngOnInit() {
    this.sharedDataService.setTitel('sales.title')
    this.sharedDataService.setSubTitel('sales.subtitle')
  }


  translate(key: string): string {

    return this.languageService.translate(key);

  }


  filterSales(): void {

    this.filteredSales = this.sales.filter(sale => {

      // ==============================
      // SEARCH
      // ==============================

      const search = this.searchText
        ?.trim()
        .toLowerCase();

      const matchesSearch =
        !search ||
        sale.invoiceNumber
          ?.toLowerCase()
          .includes(search) ||
        sale.customer
          ?.toLowerCase()
          .includes(search);


      // ==============================
      // CUSTOMER
      // ==============================

      const matchesCustomer =
        !this.selectedCustomer ||
        sale.customer === this.selectedCustomer;


      // ==============================
      // STATUS
      // ==============================

      const matchesStatus =
        !this.selectedStatus ||
        sale.status === this.selectedStatus;


      // ==============================
      // DATE
      // ==============================

      const saleDate = new Date(sale.date);


      const matchesFromDate =
        !this.dateFrom ||
        saleDate >= this.startOfDay(this.dateFrom);


      const matchesToDate =
        !this.dateTo ||
        saleDate <= this.endOfDay(this.dateTo);


      // ==============================
      // RESULT
      // ==============================

      return (
        matchesSearch &&
        matchesCustomer &&
        matchesStatus &&
        matchesFromDate &&
        matchesToDate
      );

    });

  }
  private startOfDay(date: Date): Date {

    const result = new Date(date);

    result.setHours(0, 0, 0, 0);

    return result;
  }


  private endOfDay(date: Date): Date {

    const result = new Date(date);

    result.setHours(23, 59, 59, 999);

    return result;
  }
  clearFilters(): void {

    this.searchText = '';

    this.selectedCustomer = null;

    this.selectedStatus = null;

    this.dateFrom = null;

    this.dateTo = null;

    this.filterSales();
  }


  newInvoice(): void {

    console.log('New invoice');

  }


  viewSale(sale: Sale): void {

    console.log('View sale', sale);

  }


  editSale(sale: Sale): void {

    console.log('Edit sale', sale);

  }


  deleteSale(sale: Sale): void {

    console.log('Delete sale', sale);

  }


  getPaymentIcon(
    paymentMethod: string
  ): string {

    switch (paymentMethod) {

      case 'Cash':
        return 'pi pi-money-bill';

      case 'Card':
        return 'pi pi-credit-card';

      case 'Bank':
        return 'pi pi-building';

      default:
        return 'pi pi-wallet';

    }

  }


  getStatusIcon(
    status: string
  ): string {

    switch (status) {

      case 'sales.status.paid':
        return 'pi pi-check';

      case 'sales.status.pending':
        return 'pi pi-clock';

      case 'sales.status.cancelled':
        return 'pi pi-times';

      default:
        return 'pi pi-circle';

    }

  }


  getStatusClass(
    status: string
  ): string {

    return status
      .replace('sales.status.', '');

  }

}