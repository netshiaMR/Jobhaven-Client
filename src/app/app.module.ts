import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { LoginComponent } from './login/login.component';
import { ApplyComponent } from './apply/apply.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SearchComponent } from './search/search.component';
import { SaveJobComponent } from './save-job/save-job.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    UpdateAccountComponent,
    LoginComponent,
    ApplyComponent,
    PostJobComponent,
    SearchComponent,
    SaveJobComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
