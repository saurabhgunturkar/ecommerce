export class Categories {
    categoryList: any[] = [
      { 'computerAccessories': [] },
      { 'musicalInstruments': [] }
    ];
  
    addItemToCategory(category: any, item: any): void {
      debugger;
      let foundCategory = this.categoryList.find(cat => category in cat);
      if (foundCategory) 
      {
        foundCategory[category].push(item);
      } 
      else 
      {
        console.error(`Category "${category}" does not exist.`);
      }
      console.log(foundCategory);
      debugger;
    }
  }
  