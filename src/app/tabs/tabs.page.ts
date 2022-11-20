import { Component, EnvironmentInjector } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule],
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public environmentInjector: EnvironmentInjector) { }

}
