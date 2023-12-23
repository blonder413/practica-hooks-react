import { useFetch } from "../hooks/useFetch";

export const UsuariosComponent = () => {
    const { data, isLoading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return (
        <>
            <h1>Lista de usuarios</h1>
            {isLoading ? (
                <h4>Cargando...</h4>
            ) : error ? (
                <h4>Ha ocurrido un error: {error}</h4>
            ) : (
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => {
                            return (
                                <tr key={user.id}>
                                    <td scope="row">{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.website}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </>
    );
};
