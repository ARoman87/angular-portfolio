import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading = true

  ngOnInit() {
    this.load()
  }

  load() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
  
}
