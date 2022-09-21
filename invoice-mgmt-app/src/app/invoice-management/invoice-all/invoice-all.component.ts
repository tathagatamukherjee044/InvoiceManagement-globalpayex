import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';
import { InvoiceService } from '../invoice.service';
import { Invoice } from '../types/invoice';

@Component({
  selector: 'app-invoice-all',
  templateUrl: './invoice-all.component.html',
  styleUrls: ['./invoice-all.component.css']
})
export class InvoiceAllComponent implements OnInit {

  invoices : Invoice[] = [];
  unfilteredInvoices : Invoice[] = [];
  page =1;
  limit = 100;
  numberOfInvoices : any;
  searchTerm : string | null = null;
  date : Date = new Date();
  fromDate : Date|null = null;
  toDate : Date|null = null;
  retailers : string[] = [];
  retailersFilter : string[]=[];
  checkBoxFilter : boolean [] = [];
  testCheck : boolean = false;

  constructor(private invoiceService: InvoiceService,public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.invoiceService.fetchAll(1,this.limit).subscribe(invoices => {
      invoices.map(invoice => {
        invoice.dueDate=new Date(invoice.dueDate);
        //console.log(invoice.dueDate);
      })
      this.invoices=invoices;
      this.unfilteredInvoices=invoices;
    })

   this.date = new Date();

    this.invoiceService.fetchSummary().subscribe(details => {
      this.numberOfInvoices=details?.totalSalesCount;
    })

    this.invoiceService.getDistinctRetailers().subscribe(retailers => {
      this.retailers=retailers;
    })

  }

  nextPage() : void {
    this.page ++;
    this.invoiceService.fetchAll(this.page,this.limit).subscribe(invoices => {
      this.invoices=invoices;
    })
  }

  previousPage() : void {
    this.page --;
    this.invoiceService.fetchAll(this.page,this.limit).subscribe(invoices => {
      this.invoices=invoices;
    })
  }

  onChange(newLimit:number) {
  if (newLimit===null || newLimit > 100)
    return

    this.page =1
    console.log(newLimit);
    this.limit=newLimit;
    this.ngOnInit();
  }

  onSearch() {
    console.log(this.searchTerm)
    this.invoices=this.invoices.filter(invoice => {
      return invoice._id===this.searchTerm;
    })
  }

  onUnFilter() {
    this.invoices=this.unfilteredInvoices;
    this.fromDate=null;
    this.toDate=null;
    this.retailersFilter=[];
    let i = 0 
    for(i; i<this.checkBoxFilter.length;i++)
    {
      this.checkBoxFilter[i]=false
    }
    this.testCheck=false;
  }

  onDate() {
    console.log(this.date)
    console.log(`calender popup is ${this.fromDate}`)
    // this.invoices.map(invoice => {
    //   invoice.dueDate=new Date(invoice.dueDate);
    //   console.log(invoice.dueDate);
    // })
    this.invoices=this.invoices.filter(invoice => {
      return invoice.dueDate.getDate() == this.date.getDate()
    })
  }

  retailerCheckBox(retailer:string) {
    if (this.retailersFilter.includes(retailer)==true) {
      let index = this.retailersFilter.indexOf(retailer)
      this.retailersFilter.splice(index,1);
    }
    else {
      this.retailersFilter.push(retailer);
    }

    this.onChangeFilter();

  }

  onChangeFilter() {

    if (this.retailersFilter.length!==0)
    {
      this.invoices=[];
      this.retailersFilter.forEach(retailer=> {

        this.invoices=this.invoices.concat(this.unfilteredInvoices.filter(invoice => {
          return invoice.retailer==retailer
        }))
        
      });
    }

    //this.invoices=this.unfilteredInvoices;
    if(this.fromDate) {
      this.invoices=this.invoices.filter(invoice => {
        if(this.fromDate)
        return  invoice.issueDate >= this.fromDate
        else return
      })
    }

    if(this.toDate) {
      this.invoices=this.invoices.filter(invoice => {
        if(this.toDate)
        return  invoice.issueDate < this.toDate
        else return
      })
    }

    

  }   
    


}
