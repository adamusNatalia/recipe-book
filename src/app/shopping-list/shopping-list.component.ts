import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Pears', 6),
    new Ingredient('Bananas', 4),

  ];
  constructor() { }

  onIngredientAdded(ingredientData: Ingredient) {
    this.ingredients.push(ingredientData);
  }
  ngOnInit() {
  }

}
