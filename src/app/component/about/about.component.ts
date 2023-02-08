import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
  constructor(private renderer: Renderer2) {}
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'appear' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active')
  }
}

