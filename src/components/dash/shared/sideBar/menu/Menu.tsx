import LogoutButton from "./logobutton/LogoutButton";
import MenuLinks from "./menulinks/MenuLinks";
export function Menu() {
  return (
    <nav
      style={{
        borderLeft: "8px",
        borderLeftColor: "var(--color-accent)",
        borderLeftStyle: "solid",
      }}
      className="menu"
    >
      <MenuLinks />
      <LogoutButton />
    </nav>
  );
}
