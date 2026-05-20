export default function BlogSection() {
  const blogs = ["blog-1.jpg", "blog-2.jpg", "blog-3.jpg"];

  return (
    <section className="blog-sec py-5">
      <div className="container">
        <h2 className="title text-center">News & Articles</h2>

        <div className="row mt-5">
          {blogs.map((img, index) => (
            <div key={index} className="col-md-4">
              <div className="blog-box">
                <div className="blog-img">
                  <img src={`/images/${img}`} alt="Blog thumbnail" />
                </div>
                <div className="blog-text">
                  <h3>
                    Best ways to reduce your belly fat with healthy eating!
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, cumque!
                  </p>
                  <div className="blog-arrow">
                    <a href="#blog-details">
                      Read More <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
