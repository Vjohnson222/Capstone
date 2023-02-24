import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div
      className="intro navbar4"
      style={{
        marginLeft: "40px",
        marginTop: "32px",
        marginBottom: "20px",
        color: "white",
        fontSize: "25px",
      }}
    >
      Welcome to Dance Flow!
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            marginLeft: "90px",
            marginRight: "120px",
            color: "white",
            textIndent: "5%",
            fontSize: "25px",
          }}
        >
          <div>
            <br />
            <p>
              Here, you'll be able to brush up on commonly known dance
              movements, as well as discover new ones. Try it for yourself.
              Simply<span style={{ color: "red" }}> "Hover"</span> over the
              image to reveal the dance term and then physically try it out
              while repeating the proper terminology. Enjoy!
            </p>
          </div>
        </div>

        <div className="flip-card2">
          <div className="flip-card-inner2">
            <div className="flip-card-front2">
              <br />

              <img src="tendu.jpg" alt="" />
            </div>
            <div className="flip-card-back2">
              <div>TENDU</div>
              <p>
                Tendu is a French word that means "stretched". Often used to
                describe the position of the foot with a straight leg where the
                leg is fully extended and the foot points.
              </p>
            </div>
          </div>
        </div>

        <p>
          Now that you've got the hang of it
          <Link
            to="/terminology"
            style={{ textDecoration: "none", color: "red", fontSize: "30px" }}
          >
            {" "}
            Click here
          </Link>{" "}
          to proceed.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
