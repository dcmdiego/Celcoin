import Post from "../Post";
import "./content.css"

export default function Content() {

  return (

    <div className="posts">

      <Post 
      titulo="High five, Hyperlink!" 
      img="img/hyperlink.webp" 
      alt="Hyperlink"
      />

      <Post 
      titulo="Sorry, bro." 
      img="img/sorry_bro.webp" 
      alt="Sorry, bro."
      />

    </div>

  );
}