import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Album } from '../models/album';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';
  
  private albumsSubject = new BehaviorSubject<Album[] | null>(null);
  albums$ = this.albumsSubject.asObservable();

  constructor(private http: HttpClient) { }

  loadAlbums(): void {
    if (this.albumsSubject.value === null) {
      this.http.get<Album[]>(`${this.apiUrl}/albums`).subscribe({
        next: (albums) => {
          this.albumsSubject.next(albums);
        },
        error: (err) => {
          console.error('Ошибка загрузки альбомов:', err);
        }
      });
    }
  }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.apiUrl}/albums`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.apiUrl}/albums/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/albums/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/albums/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/albums/${id}`).pipe(
      tap(() => {
        const currentAlbums = this.albumsSubject.value;
        if (currentAlbums) {
          const updatedAlbums = currentAlbums.filter(album => album.id !== id);
          this.albumsSubject.next(updatedAlbums);
        }
      })
    );
  }

  createAlbum(payload: { userId: number; title: string }): Observable<Album> {
    return this.http.post<Album>(`${this.apiUrl}/albums`, payload).pipe(
      tap((newAlbum) => {
        const currentAlbums = this.albumsSubject.value;
        if (currentAlbums) {
          this.albumsSubject.next([newAlbum, ...currentAlbums]);
        } else {
          this.albumsSubject.next([newAlbum]);
        }
      })
    );
  }
}