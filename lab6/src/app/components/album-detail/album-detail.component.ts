import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <div style="padding: 20px;">
      <div *ngIf="loading">Загрузка...</div>
      
      <div *ngIf="!loading && album">
        <h2>Альбом #{{ album.id }}</h2>
        <p>{{ album.title }}</p>
        <button (click)="goBack()">Назад</button>
      </div>
    </div>
  `
})
export class AlbumDetailComponent implements OnInit {
  album: any = null;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}