

function HotNews({post}) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <img src={post.image} className="card-img-top" alt="..." />
            </div>
            <div className="col-md-6">
              <p className="card-text">
                {post.title.substring(0,30)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotNews;
