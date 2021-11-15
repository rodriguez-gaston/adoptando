import RefugioItem from "./RefugioItem";

const RefugioLista = (props) => {
    const { refugios } = props;

    return (
        <div className='flex flex-wrap -m-4'>
            { refugios.map(refugio => (
                <RefugioItem key={refugio.id} name={refugio.name} username={refugio.username} email={refugio.email} />)
            ) }
        </div>
    );
}
 
export default RefugioLista;