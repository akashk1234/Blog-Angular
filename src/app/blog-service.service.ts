import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlogServiceService implements OnInit{

  constructor(private http:HttpClient) { }
  
  ngOnInit(): void {
  }

  // api call to view all blogs
  allBlogs(){
    return this.http.get('http://localhost:3000/blogs')
  }


  // api call to view single blog
  viewBlog(blogId:any){
    return this.http.get('http://localhost:3000/blogs/'+blogId)
  }

  // api call to add blog
  addBlog(blogData:any){
    return this.http.post('http://localhost:3000/blogs',blogData)
  }

  // api call to delete blog
  deleteBlog(blogId:any){
    return this.http.delete('http://localhost:3000/blogs/'+blogId)
  }


  // api call to update blog
  updateBlog(blogId:any,blogData:any){
    return this.http.put('http://localhost:3000/blogs/'+blogId,blogData)
  }

}
