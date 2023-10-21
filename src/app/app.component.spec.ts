import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/module';
import { ContentModule } from './components/content/module';
import {ProfileModule} from "./components/profile/module";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
		RouterTestingModule,
		HeaderModule,
		ContentModule,
		ProfileModule
	],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
