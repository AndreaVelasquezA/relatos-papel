import { useContext, useState } from 'react';
import {
    Package,
    Wallet,
    Star,
    CheckCircle2,
    Phone,
    MapPin,
    CalendarDays,
    Pencil,
    Truck,
    Clock3,
    XCircle,
    Eye,
    CreditCard,
    Navigation,
} from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import './Profile.css';

export default function Profile() {
    const { user } = useContext(AuthContext);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showOrderModal, setShowOrderModal] = useState(false);

    if (!user) {
        return <p className="empty">No hay usuario logueado</p>;
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const getStatusText = (status) => {
        const statusMap = {
            Entregado: 'Entregado',
            En_camino: 'En camino',
            Pendiente: 'Pendiente',
            Cancelado: 'Cancelado',
        };

        return statusMap[status] || status;
    };

    const getStatusIcon = (status) => {
        const icons = {
            Entregado: <CheckCircle2 size={14} />,
            En_camino: <Truck size={14} />,
            Pendiente: <Clock3 size={14} />,
            Cancelado: <XCircle size={14} />,
        };

        return icons[status] || <Package size={14} />;
    };

    const handleViewOrder = (order) => {
        setSelectedOrder(order);
        setShowOrderModal(true);
    };

    const closeModal = () => {
        setShowOrderModal(false);
        setSelectedOrder(null);
    };

    return (
        <>
            <div className="profileContainer">
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

                    <p className="role">{user.role}</p>

                    <div className="info">
                        <p>
                            <Phone size={15} />
                            {user.phone}
                        </p>

                        <p>
                            <MapPin size={15} />
                            {user.address}
                        </p>

                        <p>
                            <CalendarDays size={15} />
                            Desde: {formatDate(user.joinedAt)}
                        </p>
                    </div>

                    <button className="primaryBtn">
                        <Pencil size={16} />
                        Editar perfil
                    </button>
                </div>

                <div className="statsGrid">
                    <div className="statCard">
                        <div className="statIcon">
                            <Package size={22} />
                        </div>

                        <div className="statContent">
                            <h3>{user.stats?.totalOrders || 0}</h3>
                            <p>Pedidos totales</p>
                        </div>
                    </div>

                    <div className="statCard">
                        <div className="statIcon">
                            <Wallet size={22} />
                        </div>

                        <div className="statContent">
                            <h3>
                                {formatCurrency(user.stats?.totalSpent || 0)}
                            </h3>

                            <p>Total gastado</p>
                        </div>
                    </div>

                    <div className="statCard">
                        <div className="statIcon">
                            <Star size={22} />
                        </div>

                        <div className="statContent">
                            <h3>
                                {user.stats?.averageOrder?.toLocaleString() ||
                                    0}
                            </h3>

                            <p>Promedio por pedido</p>
                        </div>
                    </div>

                    <div className="statCard">
                        <div className="statIcon">
                            <CheckCircle2 size={22} />
                        </div>

                        <div className="statContent">
                            <h3>{user.stats?.completedOrders || 0}</h3>
                            <p>Completados</p>
                        </div>
                    </div>
                </div>

                <div className="ordersSummary">
                    <div className="summaryHeader">
                        <h2>Mis pedidos recientes</h2>

                        <span className="totalOrders">
                            Total: {user.orders?.length || 0} pedidos
                        </span>
                    </div>

                    {user.orders?.length === 0 ? (
                        <div className="emptyOrders">
                            <p>No tienes pedidos aún</p>

                            <button className="secondaryBtn">
                                Explorar libros
                            </button>
                        </div>
                    ) : (
                        <div className="ordersList">
                            {user.orders.slice(0, 5).map((order) => (
                                <div key={order.id} className="orderCard">
                                    <div className="orderInfo">
                                        <div className="orderHeader">
                                            <p className="orderId">
                                                {order.id}
                                            </p>

                                            <span
                                                className={`status ${order.status}`}
                                            >
                                                {getStatusIcon(order.status)}
                                                {getStatusText(order.status)}
                                            </span>
                                        </div>

                                        <p className="orderDate">
                                            <CalendarDays size={13} />
                                            {formatDate(order.date)}
                                        </p>

                                        <p className="orderItems">
                                            {order.items?.length || 0} productos
                                        </p>
                                    </div>

                                    <div className="orderDetails">
                                        <p className="orderTotal">
                                            {formatCurrency(order.total)}
                                        </p>

                                        <button
                                            className="viewDetailsBtn"
                                            onClick={() =>
                                                handleViewOrder(order)
                                            }
                                        >
                                            <Eye size={15} />
                                            Ver detalles
                                        </button>
                                    </div>
                                </div>
                            ))}

                            {user.orders?.length > 5 && (
                                <button className="viewAllBtn">
                                    Ver todos los pedidos ({user.orders.length})
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {showOrderModal && selectedOrder && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div
                        className="modalContent"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modalHeader">
                            <h2>Detalle del pedido</h2>

                            <button className="closeModal" onClick={closeModal}>
                                ×
                            </button>
                        </div>

                        <div className="orderSummary">
                            <div className="summaryRow">
                                <span className="label">Número de orden:</span>

                                <span className="value">
                                    {selectedOrder.id}
                                </span>
                            </div>

                            <div className="summaryRow">
                                <span className="label">Fecha:</span>

                                <span className="value">
                                    {formatDate(selectedOrder.date)}
                                </span>
                            </div>

                            <div className="summaryRow">
                                <span className="label">Estado:</span>

                                <span
                                    className={`statusBadge ${selectedOrder.status}`}
                                >
                                    {getStatusIcon(selectedOrder.status)}
                                    {getStatusText(selectedOrder.status)}
                                </span>
                            </div>

                            <div className="summaryRow">
                                <span className="label">Método de pago:</span>

                                <span className="value paymentMethod">
                                    <CreditCard size={14} />
                                    {selectedOrder.paymentMethod ||
                                        'No especificado'}
                                </span>
                            </div>

                            <div className="summaryRow">
                                <span className="label">Costo de envío:</span>

                                <span className="value">
                                    {formatCurrency(
                                        selectedOrder.shippingCost || 0,
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="itemsList">
                            <h3>Productos</h3>

                            {selectedOrder.items?.map((item, index) => (
                                <div key={index} className="orderItem">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="itemImage"
                                    />

                                    <div className="itemInfo">
                                        <p className="itemTitle">
                                            {item.title}
                                        </p>

                                        <p className="itemAuthor">
                                            por {item.author}
                                        </p>

                                        <p className="itemQuantity">
                                            Cantidad: {item.quantity}
                                        </p>
                                    </div>

                                    <div className="itemPrice">
                                        {formatCurrency(
                                            item.price * item.quantity,
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {selectedOrder.tracking?.history && (
                            <div className="trackingHistory">
                                <h3>Seguimiento</h3>

                                <div className="timeline">
                                    {selectedOrder.tracking.history.map(
                                        (event, index) => (
                                            <div
                                                key={index}
                                                className="timelineItem"
                                            >
                                                <div className="timelineDot"></div>

                                                <div className="timelineContent">
                                                    <p className="timelineStatus">
                                                        {event.status}
                                                    </p>

                                                    <p className="timelineDate">
                                                        {formatDate(event.date)}
                                                    </p>

                                                    {event.location && (
                                                        <p className="timelineLocation">
                                                            <Navigation
                                                                size={12}
                                                            />
                                                            {event.location}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </div>
                        )}

                        <div className="orderTotalSummary">
                            <div className="totalRow">
                                <span>Subtotal:</span>

                                <span>
                                    {formatCurrency(selectedOrder.subtotal)}
                                </span>
                            </div>

                            <div className="totalRow">
                                <span>Envío:</span>

                                <span>
                                    {formatCurrency(
                                        selectedOrder.shippingCost || 0,
                                    )}
                                </span>
                            </div>

                            <div className="totalRow grandTotal">
                                <span>Total:</span>

                                <span>
                                    {formatCurrency(selectedOrder.total)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
