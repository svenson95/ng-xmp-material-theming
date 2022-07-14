import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { STORAGE_PROVIDERS } from './services/storage.service';
import { windowProvider, WindowToken } from './services/windows';

@NgModule({
  declarations: [
    AppComponent,
    ThemeToggleComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [
    STORAGE_PROVIDERS,
    { provide: WindowToken, useFactory: windowProvider },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
