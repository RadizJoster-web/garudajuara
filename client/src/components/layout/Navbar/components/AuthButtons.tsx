import Button from "../../../ui/Button";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="sm">
        Masuk
      </Button>
      <Button variant="primary" size="sm">
        Daftar
      </Button>
    </div>
  );
}
    