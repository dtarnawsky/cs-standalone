import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routing';
import { environment } from './environments/environment';

// Not sure why this is needed
import '@angular/compiler';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      IonicModule.forRoot(),
      RouterModule.forRoot(routes),
    )
  ]
})
.catch(err => console.log(err));
