import { Link } from "react-router-dom";
import Button from "../../../ui/Button";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Link to={"/login"}>
        <Button variant="ghost" size="sm">
          Masuk
        </Button>
      </Link>
      <Link to={"/register"}>
        <Button variant="primary" size="sm">
          Daftar
        </Button>
      </Link>
    </div>
  );
}
