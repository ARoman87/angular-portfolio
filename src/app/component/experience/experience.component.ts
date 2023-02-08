import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Employer } from 'src/app/Employer';
import { DATA } from "../../data/employerData"

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {

  constructor(private renderer: Renderer2) {}
  public onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'appear' : 'inactive');
    this.renderer.removeClass(target, visible ? 'inactive' : 'active')
  }

  data: Employer[] = DATA
  @Input() employerData!: Employer
  @Output() onChosenEmployer: EventEmitter<Employer> = new EventEmitter

  dataId = 0


  onChosen(employerData) {
    this.dataId = employerData.id - 1
  }
}
