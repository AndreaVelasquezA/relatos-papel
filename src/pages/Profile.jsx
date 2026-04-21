import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="empty">No hay usuario logueado</p>;
  }

  return (
    <div className="profileContainer">
      {/* 🔥 PERFIL */}
      <div className="profileCard">
        <div className="avatar">
          {user.avatar ? (
            <img src={user.avatar} alt="avatar" />
          ) : (
            user.name.charAt(0).toUpperCase()
          )}
        </div>

        <h2>{user.name}</h2>
        <p className="email">{user.email}</p>

        <div className="info">
          <p>📞 {user.phone}</p>
          <p>📍 {user.address}</p>
          <p>📅 Desde: {user.joinedAt}</p>
        </div>

        <button className="primaryBtn">Editar perfil</button>
      </div>

      {/* 🔥 STATS */}
      <div className="statsCard">
        <div className="stat">
          <h3>{user.stats?.totalOrders || 0}</h3>
          <p>Pedidos</p>
        </div>

        <div className="stat">
          <h3>${(user.stats?.totalSpent || 0).toLocaleString()}</h3>
          <p>Gastado</p>
        </div>
      </div>

      {/* 🔥 PEDIDOS */}
      <div className="orders">
        <h2>Mis pedidos</h2>

        {user.orders?.map((order) => (
          <div key={order.id} className="orderCard">
            <div>
              <p className="orderId">{order.id}</p>
              <p className="orderDate">{order.date}</p>
            </div>

            <div className="orderRight">
              <p className="orderTotal">
                ${order.total.toLocaleString()}
              </p>

              <span className={`status ${order.status}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}