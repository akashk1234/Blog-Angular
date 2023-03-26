import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { DeleteBlogComponent } from './delete-blog/delete-blog.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

const routes: Routes = [
  {path:'', component:AllBlogsComponent},
  {path:"view_blog/:id", component:ViewBlogComponent},
  {path:"add_blog", component:AddBlogComponent},
  {path: "delete_blog/:id", component:DeleteBlogComponent},
  {path: "update_blog/:id", component:UpdateBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
