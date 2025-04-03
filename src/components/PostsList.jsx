import { useContext } from "react"
import PostContext from "../context/PostContext"

export default function PostsList() {
    const { posts } = useContext(PostContext);

    return (
        <>
            <div className="container">
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            </div>


        </>
    )
}