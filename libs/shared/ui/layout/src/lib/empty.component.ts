import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'empty-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `<!-- Wrapper -->
    <div class="flex flex-col flex-auto w-full">
      <!-- Content -->
      <div class="flex flex-col flex-auto">
        <p>empty works!</p>
        <!-- *ngIf="true" hack is required here for router-outlet to work correctly.
             Otherwise, layout changes won't be registered and the view won't be updated! -->
        <router-outlet *ngIf="true">
          <p>empty works!</p>
        </router-outlet>
      </div>
    </div>`,
  styles: [],
})
export class EmptyComponent {}
