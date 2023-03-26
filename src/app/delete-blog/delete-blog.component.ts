import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-delete-blog',
  templateUrl: './delete-blog.component.html',
  styleUrls: ['./delete-blog.component.css']
})
export class DeleteBlogComponent implements OnInit{
  
  bid:any


  constructor(private ar:ActivatedRoute, private bs:BlogServiceService, private router:Router) {}
  
  ngOnInit(): void {

    // access params
    this.ar.params.subscribe((data:any)=>{
      this.bid=data["id"]
      console.log(this.bid);
      

    })

    this.bs.deleteBlog(this.bid).subscribe((item:any)=>{
      alert("Blog Deleted")
      this.router.navigateByUrl("")
    })
  }

}
