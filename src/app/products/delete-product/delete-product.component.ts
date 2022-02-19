import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productId = 0;
  productDetails: any;
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id; // Capture the ID which i want delete product

      this.productService.deleteProduct(this.productId).subscribe(deleteddata => {
        this.productDetails = deleteddata;
        console.log("Product has been Deleted") //delete Data  selected id

      })
    });
  }
}


