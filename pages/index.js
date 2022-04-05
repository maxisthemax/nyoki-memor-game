import Gallery from "react-photo-gallery";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
  const photos = [
    {
      src: "/1.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/2.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/3.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/4.png",
      width: 1,
      height: 1,
    },
    {
      src: "/5.png",
      width: 1,
      height: 1,
    },
    {
      src: "/6.png",
      width: 1,
      height: 1,
    },
    {
      src: "/7.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/8.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/9.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/10.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/11.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/12.jpg",
      width: 1,
      height: 1,
    },
    {
      src: "/13.png",
      width: 1,
      height: 1,
    },
    {
      src: "/14.png",
      width: 1,
      height: 1,
    },
    {
      src: "/15.jpg",
      width: 1,
      height: 1,
    },
  ];
  const router = useRouter();
  const {
    query: { rows, columns },
  } = router;
  const handleClick = (url) => {
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    console.log(rows);
    router.push(`jigsaw?url=${url}&rows=${rows}&columns=${columns}`);
  };

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
      <div style={{ paddingBottom: "20px" }}>
        <div style={{ fontSize: "20px" }}>
          Rows
          <input
            defaultValue={rows}
            id="rows"
            style={{ marginLeft: "10px" }}
            type="text"
            pattern="\d*"
            maxLength={2}
          />
        </div>
        <div style={{ fontSize: "20px" }}>
          Column
          <input
            defaultValue={columns}
            id="columns"
            style={{ marginLeft: "10px" }}
            type="text"
            pattern="\d*"
            maxLength={2}
          />
        </div>
      </div>
      <Gallery
        photos={photos}
        renderImage={(props) => (
          <Image
            style={{ cursor: "pointer" }}
            src={props.photo}
            alt={props.photo}
            onClick={() => handleClick(props.photo.src)}
          />
        )}
      />
    </div>
  );
}
