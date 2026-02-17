
export default function Header({ count }) {
  return (
    <div className="header">
      <div className="cart">
        🛒
        {count > 0 && <span className="badge">{count}</span>}
      </div>
    </div>
  );
}
