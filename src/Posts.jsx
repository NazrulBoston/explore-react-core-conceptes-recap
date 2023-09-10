import { useEffect, useState } from "react"
import Post from "./Post"

export default function Posts(){
// 1. create a state to store the data,
// data jodi object hoi empty object hobe akhane data 
// array tai empty array nia hoese, number hole 0, bollean hole true of false hobe
const [posts, setPosts] = useState([])
//2. create use effect with no dependencies 
// useEffect function a 2 ta parameter nite hobe, prothom ta callback function and 2nd ta akhane hobe empty array
// 2nd parameter na dile ba vule gele infinity loop ar moddhe jabe 
// useEffect lekhar sathe sathe auto import hoe jabe
useEffect(()=>{
//3. use fetch to load data
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
// .then(data => console.log(data))
.then(data => setPosts(data))

}, [])

    return(
        <div>
            <h3>Posts:{posts.length}</h3>

       {/* array of object ar jodi ui k amra dekhaite chai tokhon dynamically dekhabo.
       posts jotogulo ase tarmoddhe akat map karbo, loop kare j amra prottek ta data/post (jkno
       nam dite paro) pabo, tarpor amra prottek tar jonno amra Post component use karbo (<Post></Post>)
       tarpore akhane post component ar vitore post namer akta props pathabo and value hobe
       loop thrugh kare j amra prottekta object (post) paisi oita */}

            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    ) 
}


/**
 * 1. create a state to store the data
 * 2. create use effect with no dependencies 
 * 3. use fetch to load data
 */
