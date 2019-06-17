import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

    printPdf(href: string, downlaodFileName: string) {
      console.log('href: '+href)
      console.log('file name: '+downlaodFileName)
      const link = document.createElement('a');
      link.href = href;
      link.download = downlaodFileName;
      link.setAttribute('type', 'hidden');
      document.body.append(link);
      link.click();
      link.remove();
  }
}
