import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'angular-ci' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-ci');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular-ci');
  });

  it('Retrieve test element with debugElement.query', () => {
    const fixture = TestBed.createComponent(AppComponent);

    let testField = fixture.debugElement.query(By.css('[id="test"]')).nativeElement;
    expect(testField.innerHTML).toBeTruthy("test");
  });

  //test
  it('Retrieve test element with nativeElement.querySelector', () => {
    const fixture = TestBed.createComponent(AppComponent);

    let testField = fixture.nativeElement.querySelector('[id="test"]');
    expect(testField.innerHTML).toBeTruthy("test");
  });
});
