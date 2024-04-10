export default function Todo({ params }: {
    params: { id: string }
}) {
    return (
        <div>
            <h1>Todos {params.id}</h1>
        </div>
    )
}