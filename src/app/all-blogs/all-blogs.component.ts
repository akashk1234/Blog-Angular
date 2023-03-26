import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-all-blogs',
  templateUrl: './all-blogs.component.html',
  styleUrls: ['./all-blogs.component.css']
})
export class AllBlogsComponent implements OnInit {
  
  blogList:any

  constructor(private bs:BlogServiceService) {}


  ngOnInit(): void {

    this.bs.allBlogs().subscribe((data)=>{
      this.blogList=data
      console.log(data);
      
    })

    
    
  }

}
