import Link from 'next/link';

const RefugioItem = (props) => {
    const { name, username, email } = props;

    return (
        <div className='p-4 lg:w-1/3'>
            <div className='h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left'>
                <img className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200" alt="blog" />
                <div className='flex-grow sm:pl-8'>
                    <h1 className='title-font font-medium text-lg text-gray-900'>{ name }</h1>
                    <h2 className="text-gray-500 mb-3">Argentina, Buenos Aires, CABA</h2>
                    <p className="leading-relaxed mb-3">{ email }</p>
                    <Link href={ '/' + username } className="flex items-center flex-wrap">
                        <a className="text-purple-500 inline-flex items-center">Go somewhere
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default RefugioItem;