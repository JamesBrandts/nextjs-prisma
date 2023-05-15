import {useRouter} from "next/router";
const router = useRouter();

console.log(router.query.formData)

// Path: app/posts/new/[formData].tsx
export default function NewPost() {
    return (
        <div>
            <h1>New Post</h1>
            <form>
                <input type="text" placeholder="Title" />
                <input type="text" placeholder="Content" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}