import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'admin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Title],
})
export class AppComponent implements OnInit {
  readonly title = inject(Title);
  ngOnInit() {
    this.title.setTitle(environment.app_name);
  }
}
