export default function Todo({ params }: {
    params: { id: string }
}) {
    return <h1>Todos {params.id}</h1>
}