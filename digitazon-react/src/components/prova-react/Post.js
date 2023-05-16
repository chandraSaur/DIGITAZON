import { useEffect, useState } from "react"
import "./Post.css"

export default function Post({number}){

   const [post, setPost] = useState([])
   const [comments, setComments] = useState([])
   
   useEffect (()=>{
      async function asyncCall() {
         const res = await fetch('https://jsonplaceholder.typicode.com/posts')
         const json = await res.json()
         setPost(json.slice((parseInt(number)-1), parseInt(number)))
     }
     asyncCall()
   }, [])

   useEffect (()=>{
      async function asyncCallComments() {
         const result = await fetch('https://jsonplaceholder.typicode.com/comments')
         const json2 = await result.json()
         setComments(json2.filter((specificPost) => specificPost.postId == number))
     }
     asyncCallComments()
   }, [])


   return(
      <div className="post">
         {
            post.map((p)=>
               <div className="main-post">
                  <h1 key={p.id}>{p.title}</h1>
                  <p>"{p.body}"</p>
               </div>
            )
         }
         {
            comments.map((c) =>
            <div className="comments">
               <div className="comment">
                  <h4>{c.name}</h4>
                  <p>{c.email}</p>
                  <div>{c.body}</div>
               </div>
            </div>
            )
         }
      </div>
   )
}

