import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Appmodule } from './app.module';


const platform = platformBrowserDynamic();
platform.bootstrapModule(Appmodule);