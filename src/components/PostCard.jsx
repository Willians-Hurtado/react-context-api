import { useContext } from "react"
import PostContext from "../context/PostContext"

export default function PostCard() {
    const { posts } = useContext(PostContext);

    return (
        <>
            <div className="card m-5 border border-primary">
                {
                    posts.map((post) => (
                        <div className="card-body border border-primary" key={post.id}>
                            <h3 className="card-title ">{post.title}</h3>
                            <p className="card-text ">{post.content}</p>
                        </div>

                    ))


                }
            </div>

        </>
    )
}