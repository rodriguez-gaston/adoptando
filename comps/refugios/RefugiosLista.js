import RefugioItem from "./RefugioItem";

const RefugioLista = (props) => {
    const { refugios } = props;

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            { refugios.map(refugio => (
                <RefugioItem key={refugio.id} name={refugio.name} username={refugio.username} email={refugio.email} />)
            ) }
        </div>
    );
}
 
export default RefugioLista;