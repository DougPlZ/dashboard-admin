import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Admin</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Usuários</Link>
        <Link to="/tasks">Tarefas</Link>
      </nav>
    </aside>
  );
}
