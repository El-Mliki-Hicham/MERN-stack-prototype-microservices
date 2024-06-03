import { log } from "console";
import React, { useEffect, useState } from "react";
import { Post } from "./interfaces/post"


const BASE_URL  = "http://localhost:4000"
export default function PostData(){

    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
    
        const  fetchPosts = async () =>{
            const response = await fetch(`${BASE_URL}/posts/getAllPosts`);
            const postsFetch = await response.json();
             setPosts(postsFetch.data)
             console.log(postsFetch);
            }
            fetchPosts();
        
    }, [])
    

    return (
        <>
        <h1>Posts</h1>
      
            <ul>
            {posts.map((post) => (
        <div key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.postId}</p>
        
        </div>
      ))}
            </ul>
        </>
    )
    
}