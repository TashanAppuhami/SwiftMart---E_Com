import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: number;
  leftInStock?: number;
  rating?: number;
  reviews?: number;
  isAd?: boolean;
}

interface Category {
  name: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  lightningDeals: Product[] = [
    {
      id: 1,
      name: 'White Sneakers',
      image: 'https://via.placeholder.com/300x300/ffdddd?text=White+Sneakers',
      price: 3652.68,
      originalPrice: 9070.24,
      discount: 59,
      leftInStock: 2,
      isAd: true
    },
    {
      id: 2,
      name: '150PCS Tool + 1 Toolbox',
      image: 'https://via.placeholder.com/300x300/ddffdd?text=Toolbox',
      price: 64711.33,
      originalPrice: 107090.58,
      discount: 39,
      leftInStock: 2
    },
    {
      id: 3,
      name: 'Shoe Rack',
      image: 'https://via.placeholder.com/300x300/ddddff?text=Shoe+Rack',
      price: 16010.01,
      originalPrice: 28042.73,
      discount: 42,
      leftInStock: 13
    }
  ];

  clearanceDeals: Product[] = [
    {
      id: 4,
      name: 'Casual Shoes',
      image: 'https://via.placeholder.com/300x300/ffffdd?text=Shoes',
      price: 4695.85,
      originalPrice: 11440.22,
      discount: 58,
      leftInStock: 3,
      rating: 4.5,
      reviews: 1424
    },
    {
      id: 5,
      name: '4pcs Zipper Pulls',
      image: 'https://via.placeholder.com/300x300/ffddff?text=Zipper',
      price: 390.80,
      originalPrice: 12650.43,
      discount: 96,
      rating: 4.5,
      reviews: 13814,
      isAd: true
    },
    {
      id: 6,
      name: 'Black Handbag',
      image: 'https://via.placeholder.com/300x300/ddffff?text=Bag',
      price: 2637.87,
      originalPrice: 5685.44,
      discount: 53,
      rating: 5,
      reviews: 187
    }
  ];

  categories: Category[] = [
    { name: 'Recommended' },
    { name: 'Beauty & Health' },
    { name: 'Women\'s Clothing' },
    { name: 'Home & Kitchen' },
    { name: 'Men\'s Clothing' },
    { name: 'Women\'s Shoes' },
    { name: 'Men\'s Underwear & Sleepwear' },
    { name: 'Sports & Outdoors' },
    { name: 'Office & School Supplies' },
    { name: 'Toys & Games' }
  ];

  exploreProducts: Product[] = [
    {
      id: 7,
      name: 'Anklet',
      image: 'https://via.placeholder.com/300x300/ffeddd?text=Anklet',
      price: 1250.00,
      originalPrice: 2000.00,
      discount: 37,
      rating: 4.8,
      reviews: 320,
      isAd: true
    },
    {
      id: 8,
      name: 'Hats',
      image: 'https://via.placeholder.com/300x300/eefddd?text=Hats',
      price: 850.50,
      originalPrice: 1500.00,
      discount: 43,
      rating: 4.2,
      reviews: 145
    },
    {
      id: 9,
      name: 'No-Drill Shelf',
      image: 'https://via.placeholder.com/300x300/ddeffd?text=Shelf',
      price: 2500.00,
      originalPrice: 5000.00,
      discount: 50,
      leftInStock: 5
    }
  ];
}
