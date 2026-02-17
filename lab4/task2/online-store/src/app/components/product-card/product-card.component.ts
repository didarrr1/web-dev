import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  selectedImage: string = '';
  protected readonly Math = Math;
  ngOnInit() {
    this.selectedImage = this.product.image;
  }

  changeImage(image: string) {
    this.selectedImage = image;
  }

  nextImage() {
    const currentIndex = this.product.images.indexOf(this.selectedImage);
    const nextIndex = (currentIndex + 1) % this.product.images.length;
    this.selectedImage = this.product.images[nextIndex];
  }

  prevImage() {
    const currentIndex = this.product.images.indexOf(this.selectedImage);
    const prevIndex = (currentIndex - 1 + this.product.images.length) % this.product.images.length;
    this.selectedImage = this.product.images[prevIndex];
  }

  shareWhatsApp() {
    const text = `Посмотрите этот товар: ${this.product.name} - ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasHalfStar(rating: number): boolean {
    return rating % 1 >= 0.5;
  }
}