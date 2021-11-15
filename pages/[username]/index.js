export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        paths: data.map(refugio => {
            return {
                params: { username: refugio.username }
            }
        }),
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const username = context.params.username;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await res.json();
    const userData = data.find(x => x.username === username);

    return {
        props: { refugio: userData }
    }
}

const PerfilRefugio = ({ refugio }) => {
    return (
        <div>
            <h1>{ refugio.name }</h1>
        </div>
    );
}
 
export default PerfilRefugio;