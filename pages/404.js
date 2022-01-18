import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div className="not-found max-w-screen-xl mx-auto">
            <h1 className='title-font sm:text-4xl text-3xl mb-4 my-5 font-medium text-gray-900'>Oops...</h1>
            <h2>That page cannot be found.</h2>
            <p>Go back to the <Link href="/"><a>Home Page</a></Link>.</p>
        </div>
    );
}
 
export default NotFound;