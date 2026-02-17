import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB',
      description: 'Смартфон Apple iPhone 15 Pro Max, 256 ГБ, титан, эко-коробка. A17 Pro чип, 48 МП камера, USB-C.',
      price: 649990,
      rating: 4.8,
      image: 'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_1%202023-10-05_09-47-44.608334%200633e4c8a3b4dc33efbee90b.jpg&w=1080&q=100',
      images: [
        'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_2%202023-10-05_09-47-44.609836%208c25b19171da5708be315562.jpg&w=1080&q=100',
        'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_3%202023-10-05_09-47-44.610351%202296bb48e1bef1f41dd78fee.jpg&w=1080&q=100',
        'https://fmobile.kz/_next/image?url=https%3A%2F%2Fapi.fmobile.kz%2Fimage%2Fmedia%2Fsale%2Fimage%2Fsmartfon_apple_iphone_15_pro_max_256gb_black_titanium_mu773_274418_4%202023-10-05_09-47-44.610730%205ad4cefc98e475f32cbbe9d8.jpg&w=1080&q=100'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-chernyi-113138363/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hNWqHQTNndQD9RMtbtdRK0v&gclid=Cj0KCQiA18DMBhDeARIsABtYwT0tiSF-MjRBIE7Qula3mT8_ab7zGEHFhn0tm9F3UxX0cvG6w3papQYaAquvEALw_wcB'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB',
      description: 'Смартфон Samsung Galaxy S24 Ultra, 512 ГБ, титановый черный. 200 МП камера, S-Pen, AI функциялар',
      price: 549990,
      rating: 4.9,
      image: 'https://img.joomcdn.net/b7728bc636ec3ea6456629b9e08ed7cecca41b0e_1024_1024.jpeg',
      images: [
        'https://img.joomcdn.net/b7728bc636ec3ea6456629b9e08ed7cecca41b0e_1024_1024.jpeg',
        'https://img.joomcdn.net/9e2507d1b88a3c9ac234f5f10e2a0c952c0a7a40_1024_1024.jpeg',
        'https://img.joomcdn.net/9c5818146d0e4a5138df497e9b894e4d55ebb040_1024_1024.jpeg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hNWqHQTNndQD9RMtbtdRK0v&gclid=Cj0KCQiA18DMBhDeARIsABtYwT0tiSF-MjRBIE7Qula3mT8_ab7zGEHFhn0tm9F3UxX0cvG6w3papQYaAquvEALw_wcB'
    },
    {
      id: 3,
      name: 'MacBook Pro 16" M3 Pro 18GB/512GB',
      description: 'Ноутбук Apple MacBook Pro 16, M3 Pro чип, 18ГБ, 512ГБ SSD, Space Black',
      price: 1299990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pa4/15675603.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/pa4/15675604.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2e3-137220943/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_sports_nutrition_brand&gbraid=0AAAAAC7-v7hNWqHQTNndQD9RMtbtdRK0v&gclid=Cj0KCQiA18DMBhDeARIsABtYwT0tiSF-MjRBIE7Qula3mT8_ab7zGEHFhn0tm9F3UxX0cvG6w3papQYaAquvEALw_wcB'
    },
    {
      id: 4,
      name: 'Xiaomi Mi TV Q2 65" 4K UHD',
      description: 'Телевизор Xiaomi Mi TV Q2 65" (165 см), 4K UHD, QLED, Google TV, Dolby Vision',
      price: 349990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h10/h78/64440241930270.jpg',
      images: [
        'https://neom.kz/upload/iblock/97d/aye3wia96nj0s4r5dojn798h7q7af7b1.webp',
        'https://neom.kz/upload/iblock/5ff/394j152cup3mveuh0zu9pgo6m3wv0aja.webp',
        'https://neom.kz/upload/iblock/f02/ukitiq4x3cuneywzogoqleltd12n1oic.webp'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-tv-s-pro-mini-led-2026-l55mb-sru-140-sm-chernyi-149014051/?c=750000000'
    },
    {
      id: 5,
      name: 'AirPods Pro 2 with USB-C',
      description: 'TWS наушники Apple AirPods Pro 2, активное шумоподавление, USB-C зарядка',
      price: 98990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
    },
    {
      id: 6,
      name: 'Dyson V15 Detect Absolute',
      description: 'Пылесос Dyson V15 Detect Absolute, цифровой мотор, лазерная подсветка, 60 мин работы',
      price: 349990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc3/hd0/64291504308254.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p00/68409016.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pdc/p32/77965057.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      id: 7,
      name: 'PlayStation 5 Slim Digital',
      description: 'Игровая приставка Sony PlayStation 5 Slim Digital Edition, 1TB SSD, белая',
      price: 249990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h46/h1c/85603201548318.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h1c/85603201548318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h40/hd8/84708771790878.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/hbe/84708771856414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-digital-geimpad-charging-station-117975912/?c=750000000'
    },
    {
      id: 8,
      name: 'Samsung 980 Pro 1TB NVMe SSD',
      description: 'SSD накопитель Samsung 980 Pro 1TB, NVMe M.2, PCIe 4.0, скорость чтения 7000 МБ/с',
      price: 54990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h70/h5d/64208848896030.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pdb/p7e/56729222.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/p7e/56729223.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p14/p7f/56729224.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/ssd-samsung-980-mz-v8v1t0bw-1000-gb-101507567/?c=750000000'
    },
    {
      id: 9,
      name: 'Canon EOS R10 Kit 18-45mm',
      description: 'Зеркальный фотоаппарат Canon EOS R10 Kit 18-45mm, 24.2 МП, 4K видео, RF-S объектив',
      price: 369990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302558.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9d/h58/64898689302558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h68/64898724298782.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h6a/64898729148446.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/canon-eos-r10-kit-18-45mm-is-stm-106795757/?c=750000000'
    },
    {
      id: 10,
      name: 'Huawei Watch GT 4 46mm',
      description: 'Смарт-часы Huawei Watch GT 4 46mm, черный корпус, коричневый ремешок, гармония здоровья',
      price: 69990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p07/pc3/73398201.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p07/pc3/73398201.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pad/73833220.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/pad/73833222.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-watch-gt-6-pro-46-mm-chernyi-chernyi-148240615/?c=750000000'
    }
  ];

  Math = Math;
}