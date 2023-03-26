import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit{
  
  constructor(private fb:FormBuilder, private bs:BlogServiceService, private router:Router) {}
  
  
  ngOnInit(): void {
  }


  // model form
  addBlogForm = this.fb.group({
    id: [""],
    title: [""],
    name : [""],
    date: [""],
    about: [""],
    description: [""],
    image: [""]
  })


  addBlog(){
   let blogDatas={
    id: this.addBlogForm.value.id,
    title: this.addBlogForm.value.title,
    name: this.addBlogForm.value.name,
    date: this.addBlogForm.value.date,
    about: this.addBlogForm.value.about,
    description: this.addBlogForm.value.description,
    image: this.addBlogForm.value.image
   }

   this.bs.addBlog(blogDatas).subscribe((data:any)=>{
    alert("New Blog added")
    this.router.navigateByUrl("")
   })
  }


}
