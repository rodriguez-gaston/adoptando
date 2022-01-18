import RefugioLista from '../../comps/refugios/RefugiosLista';
import listaDeRefugios from '../api/dummiebase';

export const getStaticProps = async () => {
    // const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = listaDeRefugios;

    return {
        props: { refugios: data }
    }
}

const Refugios = ({ refugios }) => {
    return ( 
        <div className="max-w-screen-xl mx-auto px-5">
            <h1 className='title-font sm:text-4xl text-3xl my-5 font-medium text-gray-900'>Organizaciones</h1>
            <RefugioLista refugios={refugios}/>
        </div>
    );
}
 
export default Refugios;