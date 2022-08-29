import stylesUrl from "~/styles/index.css";

export const links = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
    return (
        <div>
            <h3>Home</h3>
            <hr />
            <p>Hello, World!</p>
        </div>
    )
}