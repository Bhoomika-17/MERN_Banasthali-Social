import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useState, useEffect } from "react";
import axios from "axios"

export default function Feed() {
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    const fetchPosts = async () =>{
    const res = await axios.get("posts/timeline/622c0c47d1d4a6725c1bd3be")
    setPosts(res.data) 
  }
    fetchPosts();
  },[]);
  
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(
            <Post key={p.id} post={p}/>
        ))} 
      </div>
    </div>
  )
}
