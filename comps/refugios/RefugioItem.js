import Link from 'next/link';
import Image from 'next/image';

const RefugioItem = (props) => {
    const { name, username, email } = props;

    return (
        <div className="justify-center mx-auto text-center shadow-md p-3 rounded-md w-full">
            <Link href={ '/' + username } className="flex items-center flex-wrap" passHref={true}>
                <a>
                    <img className="mx-auto rounded-full" src="https://dummyimage.com/100x100" alt="blog" />
                    <div>
                        <h1 className='title-font font-medium text-lg text-gray-900'>{ name }</h1>
                        <h2 className="text-gray-500">Argentina, Buenos Aires, CABA</h2>
                        <p className="leading-relaxed">{ email }</p>
                        <a className="text-purple-500 inline-flex items-center">Go somewhere
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </a>
            </Link>
        </div>
    );
}
 
export default RefugioItem;