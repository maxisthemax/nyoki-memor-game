import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import { useRouter } from "next/router";

export default function Home(props) {
  const router = useRouter();
  const { url } = props;
  const rows = parseInt(props.rows) || 6;
  const columns = parseInt(props.columns) || 6;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <h2>NYOKI PUZZLE</h2>
      <JigsawPuzzle
        imageSrc={url}
        rows={rows && rows > 0 ? rows : 6}
        columns={columns && columns > 0 ? columns : 6}
        onSolved={() => alert("Solved!")}
        className="jigsaw-puzzle"
      />
      <button
        style={{ marginTop: "10px" }}
        onClick={() => {
          router.push({
            pathname: "/",
            query: { rows, columns },
          });
        }}
      >
        Back
      </button>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { ...context.query }, // will be passed to the page component as props
  };
}
