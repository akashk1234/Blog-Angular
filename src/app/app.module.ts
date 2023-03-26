import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBlogsComponent,
    ViewBlogComponent,
    AddBlogComponent,
    DeleteBlogComponent,
    UpdateBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
