export default function Header() {
    return (
        <div>
            <header>
                <nav className="flex gap-4 bg-slate-800 w-full text-white p-4">
                    <a href="/">Start</a>
                    <a href="/home">Home</a>
                    <a href="/posts">Posts</a>
                </nav>
            </header>
        </div>
    )
}