export default [
  { to: "/", display: "Home" },
  { to: "work", display: "Work" },
  { to: "about", display: "About" },
  { to: "contact", display: "Contact" },
  { to: "blog", display: "Blog" },
];

export interface LinkType {
  to: string;
  display: string;
}
