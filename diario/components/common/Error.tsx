export default function Error({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-red-600">
            <h1 className="text-3xl font-bold">Erro</h1>
            <p>{message}</p>
        </div>
    );
}
