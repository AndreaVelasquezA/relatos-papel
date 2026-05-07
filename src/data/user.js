const mockUser = {
  id: 1,
  name: "Juan Pérez",
  email: "usuario@test.com",
  role: "USER",
  avatar: null,
  phone: "+57 300 123 4567",
  address: "Calle 123 #45-67, Dosquebradas, Risaralda",
  joinedAt: "2025-11-20T10:30:00Z",

  stats: {
    totalOrders: 8,
    totalSpent: 487500,
    averageOrder: 60937.5,
    favoriteCategory: "Misterio",
    completedOrders: 5,
    cancelledOrders: 1,
    pendingOrders: 2,
  },

  orders: [
    {
      id: "ORD-001",
      date: "2025-12-15T14:23:00Z",
      status: "Entregado",
      paymentMethod: "Tarjeta de crédito",
      shippingCost: 5000,
      subtotal: 89000,
      total: 94000,
      deliveryEstimate: "2025-12-20",
      tracking: {
        number: "TRK123456789CO",
        carrier: "Servientrega",
        history: [
          { status: "Pedido confirmado", date: "2025-12-15T14:25:00Z", location: "Online" },
          { status: "En preparación", date: "2025-12-16T09:00:00Z", location: "Almacén central" },
          { status: "En tránsito", date: "2025-12-17T15:30:00Z", location: "Centro de distribución" },
          { status: "Entregado", date: "2025-12-19T11:45:00Z", location: "Domicilio" },
        ],
      },
      items: [
        {
          id: 1,
          title: "El susurro del viento 1",
          author: "Ana Torres",
          quantity: 1,
          price: 45000,
          subtotal: 45000,
          image: "https://picsum.photos/seed/library1/300/450",
        },
        {
          id: 3,
          title: "El eco de la noche 3",
          author: "Laura Méndez",
          quantity: 1,
          price: 39000,
          subtotal: 39000,
          image: "https://picsum.photos/seed/novel3/300/450",
        },
      ],
    },
    {
      id: "ORD-002",
      date: "2026-01-10T11:15:00Z",
      status: "Cancelado",
      paymentMethod: "Nequi",
      shippingCost: 0,
      subtotal: 52000,
      total: 52000,
      deliveryEstimate: null,
      cancellationReason: "Cambio de dirección no soportado",
      tracking: {
        number: null,
        carrier: null,
        history: [
          { status: "Pedido confirmado", date: "2026-01-10T11:17:00Z", location: "Online" },
          { status: "Cancelado por el usuario", date: "2026-01-10T15:30:00Z", location: "Sistema" },
        ],
      },
      items: [
        {
          id: 2,
          title: "Sombras del pasado 2",
          author: "Carlos Ruiz",
          quantity: 1,
          price: 52000,
          subtotal: 52000,
          image: "https://picsum.photos/seed/books2/300/450",
        },
      ],
    },
    {
      id: "ORD-003",
      date: "2026-02-18T09:45:00Z",
      status: "Entregado",
      paymentMethod: "Tarjeta débito",
      shippingCost: 8000,
      subtotal: 118000,
      total: 126000,
      deliveryEstimate: "2026-02-25",
      tracking: {
        number: "TRK987654321CO",
        carrier: "Interrapidisimo",
        history: [
          { status: "Pedido confirmado", date: "2026-02-18T09:47:00Z", location: "Online" },
          { status: "En preparación", date: "2026-02-19T10:00:00Z", location: "Almacén central" },
          { status: "En tránsito", date: "2026-02-20T14:20:00Z", location: "Centro de distribución" },
          { status: "En destino final", date: "2026-02-22T08:30:00Z", location: "Oficina local" },
          { status: "Entregado", date: "2026-02-23T16:15:00Z", location: "Domicilio" },
        ],
      },
      items: [
        {
          id: 6,
          title: "El guardián del tiempo 6",
          author: "Daniel Ortega",
          quantity: 2,
          price: 55000,
          subtotal: 110000,
          image: "https://picsum.photos/seed/mystery6/300/450",
        },
        {
          id: 9,
          title: "La biblioteca infinita 9",
          author: "Ana Torres",
          quantity: 1,
          price: 42000,
          subtotal: 42000,
          image: "https://picsum.photos/seed/oldbook9/300/450",
        },
      ],
    },
    {
      id: "ORD-004",
      date: "2026-03-05T16:20:00Z",
      status: "Pendiente",
      paymentMethod: "Contraentrega",
      shippingCost: 5000,
      subtotal: 49000,
      total: 54000,
      deliveryEstimate: "2026-03-12",
      tracking: {
        number: "TRK456123789CO",
        carrier: "Servientrega",
        history: [
          { status: "Pedido confirmado", date: "2026-03-05T16:22:00Z", location: "Online" },
          { status: "En preparación", date: "2026-03-06T11:00:00Z", location: "Almacén central" },
          { status: "En tránsito", date: "2026-03-07T09:15:00Z", location: "Centro de distribución" },
        ],
      },
      items: [
        {
          id: 7,
          title: "Secretos en la niebla 7",
          author: "Lucía Gómez",
          quantity: 1,
          price: 49000,
          subtotal: 49000,
          image: "https://picsum.photos/seed/reading7/300/450",
        },
      ],
    },
    {
      id: "ORD-005",
      date: "2026-03-20T13:30:00Z",
      status: "Pendiente",
      paymentMethod: "Tarjeta crédito",
      shippingCost: 0,
      subtotal: 78000,
      total: 78000,
      deliveryEstimate: "2026-03-28",
      tracking: {
        number: "TRK789123456CO",
        carrier: "Coordinadora",
        history: [
          { status: "Pedido confirmado", date: "2026-03-20T13:32:00Z", location: "Online" },
          { status: "En preparación", date: "2026-03-22T10:00:00Z", location: "Almacén central" },
        ],
      },
      items: [
        {
          id: 5,
          title: "La última página 5",
          author: "Sofía Ramírez",
          quantity: 1,
          price: 47000,
          subtotal: 47000,
          image: "https://picsum.photos/seed/fantasy5/300/450",
        },
        {
          id: 10,
          title: "El código perdido 10",
          author: "Carlos Ruiz",
          quantity: 1,
          price: 70000,
          subtotal: 70000,
          image: "https://picsum.photos/seed/bookstore10/300/450",
        },
      ],
    },
    {
      id: "ORD-006",
      date: "2026-04-01T10:00:00Z",
      status: "Entregado",
      paymentMethod: "Tarjeta débito",
      shippingCost: 8000,
      subtotal: 96000,
      total: 104000,
      deliveryEstimate: "2026-04-08",
      tracking: {
        number: "TRK321654987CO",
        carrier: "Interrapidisimo",
        history: [
          { status: "Pedido confirmado", date: "2026-04-01T10:02:00Z", location: "Online" },
          { status: "En preparación", date: "2026-04-02T09:00:00Z", location: "Almacén central" },
          { status: "En tránsito", date: "2026-04-03T14:30:00Z", location: "Centro de distribución" },
          { status: "Entregado", date: "2026-04-05T10:15:00Z", location: "Domicilio" },
        ],
      },
      items: [
        {
          id: 4,
          title: "Caminos olvidados 4",
          author: "Javier Castillo",
          quantity: 2,
          price: 61000,
          subtotal: 122000,
          image: "https://picsum.photos/seed/literature4/300/450",
        },
      ],
    },
    {
      id: "ORD-007",
      date: "2026-04-08T15:45:00Z",
      status: "En_camino",
      paymentMethod: "Nequi",
      shippingCost: 5000,
      subtotal: 45000,
      total: 50000,
      deliveryEstimate: "2026-04-15",
      tracking: {
        number: "TRK951753486CO",
        carrier: "Servientrega",
        history: [
          { status: "Pedido confirmado", date: "2026-04-08T15:47:00Z", location: "Online" },
          { status: "En preparación", date: "2026-04-09T11:00:00Z", location: "Almacén central" },
          { status: "En tránsito", date: "2026-04-10T08:15:00Z", location: "Centro de distribución" },
        ],
      },
      items: [
        {
          id: 1,
          title: "El susurro del viento 1",
          author: "Ana Torres",
          quantity: 1,
          price: 45000,
          subtotal: 45000,
          image: "https://picsum.photos/seed/library1/300/450",
        },
      ],
    },
    {
      id: "ORD-008",
      date: "2026-04-14T11:30:00Z",
      status: "En_camino",
      paymentMethod: "Tarjeta crédito",
      shippingCost: 0,
      subtotal: 32000,
      total: 32000,
      deliveryEstimate: "2026-04-21",
      tracking: {
        number: "TRK753159486CO",
        carrier: "Coordinadora",
        history: [
          { status: "Pedido confirmado", date: "2026-04-14T11:32:00Z", location: "Online" },
          { status: "En preparación", date: "2026-04-15T09:30:00Z", location: "Almacén central" },
        ],
      },
      items: [
        {
          id: 8,
          title: "Voces del silencio 8",
          author: "Miguel Ángel",
          quantity: 1,
          price: 58000,
          subtotal: 58000,
          image: "https://picsum.photos/seed/bookshelf8/300/450",
        },
      ],
    },
  ],

  // Métodos útiles para el frontend
  getOrderById: (orderId) => {
    return mockUser.orders.find(order => order.id === orderId);
  },

  getOrdersByStatus: (status) => {
    return mockUser.orders.filter(order => order.status === status);
  },

  getRecentOrders: (limit = 5) => {
    return [...mockUser.orders]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
  },

  getOrderStats: () => {
    const orders = mockUser.orders;
    const totalOrders = orders.length;
    const completedOrders = orders.filter(o => o.status === "Entregado").length;
    const totalSpent = orders.reduce((sum, o) => sum + o.total, 0);
    
    return {
      totalOrders,
      completedOrders,
      totalSpent,
      avgOrderValue: totalSpent / totalOrders,
      completionRate: (completedOrders / totalOrders) * 100,
    };
  },
};

export default mockUser;