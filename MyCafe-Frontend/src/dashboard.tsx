import React from "react";

const DashboardWithSidebar: React.FC = () => {
  const orders = [
    { id: 1, customer: "Alice", total: "$12.50", status: "Completed" },
    { id: 2, customer: "Bob", total: "$8.00", status: "Pending" },
    { id: 3, customer: "Charlie", total: "$15.75", status: "Completed" },
  ];

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <h2 style={styles.sidebarTitle}>MyCafe</h2>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Dashboard</li>
            <li style={styles.navItem}>Orders</li>
            <li style={styles.navItem}>Menu</li>
            <li style={styles.navItem}>Reports</li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main style={styles.main}>
        <header style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
        </header>

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <h2>Total Sales</h2>
            <p>$1,250</p>
          </div>
          <div style={styles.card}>
            <h2>Orders Today</h2>
            <p>35</p>
          </div>
          <div style={styles.card}>
            <h2>Low Stock Items</h2>
            <p>5</p>
          </div>
        </div>

        <div style={styles.tableContainer}>
          <h2 style={styles.sectionTitle}>Recent Orders</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.total}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DashboardWithSidebar;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#e6f2e6", // light green
  },
  sidebar: {
    width: "220px",
    backgroundColor: "#2e7d32", // dark green
    color: "white",
    padding: "20px",
  },
  sidebarTitle: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "30px",
  },
  navList: {
    listStyle: "none",
    padding: 0,
  },
  navItem: {
    marginBottom: "15px",
    cursor: "pointer",
    fontWeight: 500,
  },
  main: {
    flex: 1,
    padding: "20px",
  },
  header: {
    marginBottom: "20px",
  },
  title: {
    color: "#2e7d32",
    textAlign: "center",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "30px",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    flex: "1 1 200px",
    textAlign: "center",
    color: "#2e7d32",
  },
  tableContainer: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  sectionTitle: {
    color: "#2e7d32",
    marginBottom: "10px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
};
