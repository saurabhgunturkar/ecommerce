import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CardserviceService } from 'src/app/service/cardservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-selectedCategory',
  templateUrl: './selectedCategory.component.html',
  styleUrls: ['./selectedCategory.component.css']
})
export class selectCategoryComponent implements OnInit {

  selectedCategoryData: any[] = [];
  pname: any; pprice: any; pdiscount: any;
  searchitem: string = '';
  searchResults: any[] = [];
  selected: any = '';
  backbutton:any = "<< back";

  constructor(private cardService: CardserviceService, private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const newselectedValue = params.get('selectedValue');
      console.log(newselectedValue);
      this.dataService.callCategory(newselectedValue).subscribe(
        (res: any) => {
          console.log(res);
          this.selectedCategoryData = res;
        }
      );
    });
  }

  addItemToCard(item: any) {
    console.log(item);
    this.cardService.addToCart(item);

  }

  search(){
    this.searchResults = this.selectedCategoryData.filter(item =>
      item.productname.toLowerCase().includes(this.searchitem)
    );
  }

}
