interface IPortfolioFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function Filter({
  activeFilter,
  onFilterChange,
}: IPortfolioFilterProps) {
  const menuItems = [
    { label: "All", filter: "*" },
    { label: "UX/UI Design", filter: "uxui" },
    { label: "Web Design", filter: "web" },
    { label: "Apps Design", filter: "apps" },
    { label: "Mockup Design", filter: "mockup" },
  ];

  return (
    <div className="portfolio-menu d-flex justify-content-center mb-4">
      {menuItems.map((item) => (
        <button
          key={item.filter}
          onClick={() => onFilterChange(item.filter)}
          className={`btn btn-link ${
            activeFilter === item.filter ? "active" : ""
          }`}
          style={{ textDecoration: "none" }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
