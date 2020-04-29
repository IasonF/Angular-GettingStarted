import {Component, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  // selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private errorMessage: String;

  constructor(private productService: ProductService) {
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFileter(this.listFilter) : this.products;
  }

  private _listFilter: string;
  filteredProducts: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: value => {
        this.products = value;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });

  }

  pageTitle: string = "Product List!!";
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: Product[];
  showImage: boolean = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }


  private performFileter(listFilter: string) {
    listFilter = listFilter.toLowerCase();
    return this.products.filter(value => value.productName.toLowerCase().indexOf(listFilter) !== -1);
  }

  onRatingClicked(message: string) {
    this.pageTitle = this.pageTitle + message;
  }
}
