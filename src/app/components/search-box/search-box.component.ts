import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  template: `
    <div class="search-box">
      <input 
        [(ngModel)]="location" 
        placeholder="ZIP CODE"
        (keyup.enter)="onSearch()"
      >
      <button class="search-button" (click)="onSearch()">
        <mat-icon inline=true>search</mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
    .search-box {
      display: flex;
      gap: var(--sizeBase);
      margin-bottom: var(--size2);
    }
    input {
      padding: var(--sizeBase) var(--size1);
      border: var(--size03) dotted var(--color-orange);
      border-radius: var(--size2);
      background: repeating-linear-gradient(
        -45deg,
        var(--color-goldenrod),
        var(--color-goldenrod) 2px,
        var(--color-ghostwhite) 1px,
        var(--color-ghostwhite) 4px
      );
      transition: background-color 1s, border-color 0.618s;
    }
    input:focus {    
      border-color: var(--color-deepblue);;
      outline: none;
      background: repeating-linear-gradient(
        -45deg,
        var(--color-ghostwhite),
        var(--color-ghostwhite) 2px,
        var(--color-goldenrod) 1px,
        var(--color-goldenrod) 4px
      );
    }
    input::placeholder {    
      color: var(--color-blue);
      font-style: italic;
      overflow: hidden;
    }

    button.search-button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
    .search-button mat-icon {
      color: var(--color-deepblue);
      font-size: var(--size2);
    }
  `,
  ],
})
export class SearchBoxComponent {
  location = '';
  @Output() searchEvent = new EventEmitter<string>();

  onSearch() {
    if (this.location.trim()) {
      this.searchEvent.emit(this.location);
    }
  }
}