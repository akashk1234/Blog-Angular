import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit{
 
  blogId:any
  blogData:any

  constructor(private ar:ActivatedRoute, private bs:BlogServiceService) {}
 
 
  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{

      this.blogId=data["id"]
      console.log(this.blogId);
      
      this.bs.viewBlog(this.blogId).subscribe((data:any)=>{
        this.blogData=data
        console.log(this.blogData);
        
      })
    })
  }

}
