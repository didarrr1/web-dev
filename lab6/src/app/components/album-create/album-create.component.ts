import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-create',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})
export class AlbumCreateComponent {
  albumData = {
    userId: 1,
    title: ''
  };

  loading = false;
  error: string | null = null;

  constructor(
    private albumService: AlbumService,
    private router: Router
  ) {}

  onSubmit(): void {
    if (!this.albumData.title.trim()) {
      this.error = 'Введите название';
      return;
    }

    if (this.albumData.userId < 1 || this.albumData.userId > 10) {
      this.error = 'User ID должен быть от 1 до 10';
      return;
    }

    this.loading = true;
    this.error = null;

    const newAlbum = {
      userId: this.albumData.userId,
      title: this.albumData.title.trim()
    };

    this.albumService.createAlbum(newAlbum).subscribe({
      next: (createdAlbum) => {
        console.log('✅ Альбом создан:', createdAlbum);
        this.loading = false;
        this.router.navigate(['/albums']);
      },
      error: (err) => {
        console.error('❌ Ошибка:', err);
        this.error = 'Не удалось создать альбом';
        this.loading = false;
      }
    });
  }

  onCancel(): void {
    this.router.navigate(['/albums']);
  }
}