import {Component, OnInit} from '@angular/core';
import {Product} from "./product";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Welcome";
  product: Product;

  constructor(private route: ActivatedRoute
    , private router: Router) {

  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.pageTitle += `:${id}`;
    this.product = {
      description: "",
      imageUrl: "",
      price: 0,
      productCode: "",
      productName: "",
      rating: 0,
      releaseDate: undefined,
      productId: id
    };
  }

}
