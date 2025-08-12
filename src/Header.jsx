import seth from "./seth.jpg";

export default function Header() {
  return (
    <div className="top-half">
      <img src={seth} alt="profile picture" class="profile-pic" />
      <br />
      <h1>Seth Johnson</h1>
      <h2>FullStack Developer</h2>
      <h3>samaritanbrotherseth@gmail.com</h3>
      <div className="buttons">
        <button className="email">
          <i className="fa-solid fa-envelope" id="email-envelope"></i>Email
        </button>
        <button className="linkedin">
          <i className="fa-brands fa-square-linkedin" id="linkedin-in"></i>
          linkedIn
        </button>
      </div>
    </div>
  );
}
