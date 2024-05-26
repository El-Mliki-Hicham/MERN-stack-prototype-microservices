import { log } from "console";
import React, { useEffect, useState } from "react";

interface Post{
    id:number
    title : string
};

const BASE_URL  = "http://localhost:4000"
export default function PostData(){

    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
    
        const  fetchPosts = async () =>{
            const response = await fetch(`${BASE_URL}/getPosts`);
            const postsFetch = await response.json();
            console.log(postsFetch);
            setPosts(postsFetch)
        }
        fetchPosts();
    
    }, [])
    

    return (
        <>
        <h1>Posts</h1>
        {/* <div>{posts}</div> */}
            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </>
    )
    
}