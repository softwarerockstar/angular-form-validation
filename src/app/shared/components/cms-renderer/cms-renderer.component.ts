import { Component, Input } from '@angular/core';

@Component({
  selector: 'cms-renderer',
  template: '<div [innerHtml]="content"></div>',
  styleUrls: ['./cms-renderer.component.css'],
  standalone: true
})
export class CmsRendererComponent {
  @Input() content?: string;
}
