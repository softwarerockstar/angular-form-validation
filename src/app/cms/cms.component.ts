import { Component } from '@angular/core';
import { CmsRendererComponent } from '../shared/components/cms-renderer/cms-renderer.component';
@Component({
    selector: 'cms',
    template: `
    <cms-renderer [content]="myHtmlContent"></cms-renderer>
  `,
    standalone: true,
    styleUrls: ['./cms.component.css'],
    imports: [CmsRendererComponent]
})
export class CmsComponent {
  myHtmlContent = '<p class="uhcBlue">Hello, <strong>Angular!</strong></p>';
}
