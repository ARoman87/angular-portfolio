import { Component, Renderer2 } from '@angular/core';
import { Projects } from 'src/app/Projects';
import { ProjectData } from 'src/app/data/projectData';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private renderer: Renderer2) {}

  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'appear' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active')
  }
  data: Projects[] = ProjectData
}
