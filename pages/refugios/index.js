import RefugioLista from '../../comps/refugios/RefugiosLista';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { refugios: data }
    }
}

const Refugios = ({ refugios }) => {
    return ( 
        <div>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 my-5 font-medium text-gray-900'>Refugios</h1>
            <RefugioLista refugios={refugios}/>
        </div>
    );
}
 
export default Refugios;