

export default function PostsList({ posts }) {

    return (
        <>
            <div className="container">
                <ul>
                    {
                        posts.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.content}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>


        </>
    )
}