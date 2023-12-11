import { Link } from "react-router-dom";
import { Button } from "antd";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ paddingTop: 48, fontSize: 36 }}>
        Sorry, the page you visited does not exist.
      </p>

      <Link to="/">
        <Button
          style={{
            backgroundColor: "#08979C",
            color: "#FFFFFF",

            marginTop: 36,
            width: 170,
            height: 48,
          }}
        >
          Back Home
        </Button>
      </Link>
    </div>
  );
};
export default NotFound;
