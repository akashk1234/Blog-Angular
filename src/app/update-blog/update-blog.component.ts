import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit{
  
  bid:any
  bdata:any

  constructor(private ar:ActivatedRoute, private bs:BlogServiceService, private router:Router) {}
  
  
  
  ngOnInit(): void {

    this.ar.params.subscribe((data:any)=>{
      this.bid=data["id"]
      console.log(this.bid);
      
    })


    this.bs.viewBlog(this.bid).subscribe((datas:any)=>{
      this.bdata=datas
      console.log(datas);
      
    })

  }

  updateBlogData(form:any){

    this.bs.updateBlog(this.bid,this.bdata).subscribe((item:any)=>{
      alert("Blog Updated")
      this.router.navigateByUrl("")
    })
  }

}

