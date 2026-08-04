import { notFound } from "next/navigation";

interface Props {
    params: Promise<{ id: string }>;
}

export default async function PostPage({params}: Props) {
    const {id} = await params; /** Here, we use the {id} instead of just id. It's for object destructuring, since the params is an object. */
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    if (!post.id) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-3xl font-bold">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h1>
            <p className="text-gray-700 text-base">{post.body}</p>
        </div>
    );
}