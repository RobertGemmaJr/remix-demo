export default function JokesNewRoute() {
    return (
        <form>
            <label>
                Joke Name:
            </label>
            <br />
            <input type="text" name="name" /><br />

            <label>
                Joke:
            </label>
            <br />
            <textarea type="text" name="joke" />
        </form>
    )
}