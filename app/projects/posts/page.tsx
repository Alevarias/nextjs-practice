import Card from "@/components/card";

export default async function PostsPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Hello, we're practicing api calls here
            </h1>
            <ul>
                {posts.slice(0, 10).map((post: any) => (
                    <li key={post.id}>
                        <Card id={post.id} userId={post.userId} title={post.title} body={post.body}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}