import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ArrowRight, Phone, MapPin, Calendar } from "lucide-react";
import "./Profile.css";

export default function Profile() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <p className="empty">No hay usuario logueado</p>;
  }

  return (
    <div className="profileContainer">
      {/* PERFIL */}
      <div className="profileCard">
        <div className="avatar">
          {user.avatar ? (
            <img src={user.avatar} alt="avatar" />
          ) : (
            user.name.charAt(0).toUpperCase()
          )}
        </div>

        <div className="profileInfo">
          <h2>{user.name}</h2>
          <p className="email">{user.email}</p>
          <div className="infoDivider" />
          <div className="info">
            <p><Phone size={18} aria-hidden /> {user.phone}</p>
            <p><MapPin size={18} aria-hidden /> {user.address}</p>
            <p><Calendar size={18} aria-hidden /> Desde: {user.joinedAt}</p>
          </div>
        </div>
      </div>

      {/* PEDIDOS */}
      <div className="orders">
        <div className="ordersHeader">
          <h2>Últimos pedidos</h2>
          <span>
            Ver todos <ArrowRight size={18} aria-hidden />
          </span>
        </div>
        {user.orders?.map((order) => (
          <div key={order.id} className="orderCard">
            <div>
              <p className="orderId">{order.id}</p>
              <p className="orderDate">{order.date}</p>
            </div>

            <div className="orderRight">
              <p className="orderTotal">${order.total.toLocaleString()}</p>

              <span className={`status ${order.status}`}>{order.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
