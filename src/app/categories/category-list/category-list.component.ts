import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  user1Data: any;
  categoryName: any[] = ['Sunglasses', 'Watches', 'Shoes', 'Jewellary', 'Bags and Luggae', 'Kids Apperal', 'Mens Apperal',
    'Womens Apperal', 'Grocery', 'Household', 'Beauty Products', 'Medical', ' Home', 'Kitchen',
    'Sports', 'Furniture', 'Books', 'Electronics', 'Computer Accessories', 'Musical Instruments'];
  selectedValue: any;
  searchCategory: any;
  searchResults: any[] = [];

  constructor(private route: Router) { }

  ngOnInit(): void { }

  selectCategory() {
    const newSelectedValue = this.selectedValue.toLowerCase();
    console.log(newSelectedValue);
    this.route.navigate(['/selectCategory', { selectedValue: newSelectedValue }]);
  }

  search() {
    debugger
    this.searchResults = this.categoryName.filter(item =>
      item.toLowerCase().includes(this.searchCategory.toLowerCase())
    );
  }

}
