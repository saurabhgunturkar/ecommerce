import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  addproductform!: FormGroup;
  categorieslength: any;
  categoryList: any[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.addproductform = this.fb.group({
      selectCategory: ['', Validators.required],
      productimage: ['', Validators.required],
      productname: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      ratings: [0, [Validators.required, Validators.min(0)]],
      discounts: [0, [Validators.required, Validators.min(0)]],
      features: ['']
    });
  }

  addproduct(): void {
    if (this.addproductform && this.addproductform.valid) {
      const formData = this.addproductform.value;
      const category = formData.selectCategory;
      debugger;
      this.dataService.addProductToCategory(category, this.addproductform.value).subscribe({
        next: (val: any) => {
          alert('Product added successfully');
        }
      });
    } else {
      console.log("Form is invalid");
    }
  }
}
