import seth from "./seth.jpg";

export default function Header() {
  return (
    <>
      <div className="container">
        <img src={seth} alt="profile picture" className="profile-pic" />

        <div className="top-half">
          <br />
          <h1>Seth Johnson</h1>
          <h2>FullStack Developer</h2>
          <h3>samaritanbrotherseth@gmail.com</h3>
          <div className="buttons">
            <button className="email">
              <i className="fa-solid fa-envelope" id="email-envelope"></i>
              <a href="#" target="_blank">
                Email
              </a>
            </button>
            <button className="linkedin">
              <i className="fa-brands fa-square-linkedin" id="linkedin-in"></i>
              <a href="https://www.linkedin.com/in/seth-johnson-10a6a217b/">
                linkedIn
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
