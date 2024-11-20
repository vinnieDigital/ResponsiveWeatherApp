import { Component, EventEmitter, Input, Output, ViewChild, ElementRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule, MatIconModule],
  template: `
      <input 
        #searchInput
        [(ngModel)]="location" 
        [placeholder]="placeholder"
        (keyup.enter)="onSearch()"
      >
  `,
  styles: [
    `
    :host {
      display: block;
      margin-bottom: var(--step-0);
    }
    input {
      width: 100%;
      padding-block-end: var(--step--2);
      font-size: var(--step-2);
      font-family: inherit;
      font-weight: 700;
      color: var(--color-orange);
      border-bottom: var(--step--4) dotted var(--color-ghostgrey);
      background: transparent;
      transition: border-bottom 0.168s ease-in;
    }
    
    input:focus {    
      border-color: var(--color-orange);
      outline: none;
    }
    input::placeholder {
      color: var(--color-ghostgrey);
      overflow: hidden;
      transition: color 0.168s ease-in;
    }
    input:focus::placeholder {
      color: var(--color-orange);
    }

    :host.searched input {    
      border-color: var(--color-orange);
    }
    :host.searched input:focus {    
      border-color: var(--color-ghostgrey);
    }

    :host.searched input:focus:not(:placeholder-shown) {
      border-color: var(--color-orange);
    }

    :host.searched input::placeholder {
      color: var(--color-orange);
    }
    
    :host.searched input:focus::placeholder {
      color: var(--color-ghostgrey);
    }
  `
  ],
})
export class SearchBoxComponent {
  location = '';

  @Input() placeholder = 'Zip Code or City';
  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;;


  onSearch() {
    if (this.location.trim()) {
      this.searchEvent.emit(this.location);
      this.location = '';
      this.searchInput.nativeElement.blur();
    }
  }
}