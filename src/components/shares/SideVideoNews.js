import video from "../../statics/video.mp4";

function SideVideoNews() {
  return (
    <div className="my-3">
      <div className="row">
        <video width="100%" controls>
          <source src={video}></source>
        </video>

        <p className="card-text">
          Some quick example text to build on the card title and make up the
        </p>
      </div>
    </div>
  );
}

export default SideVideoNews;
