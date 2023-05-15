


export default function NewPost() {
    return (
        <div className="bg-slate-800 w-full text-white p-4">
            <main className='flex flex-col gap-4 justify-between h-full'>
                <h1 className='text-4xl'>New Post</h1>
                <form className='flex flex-col gap-4' method="post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="text-black" />
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" cols={30} rows={10} className="text-black" ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </main>
        </div>
    )
}