const mockUser = {
  id: 1,
  name: "Usuario Test",
  email: "usuario@test.com",
  role: "USER",

  avatar: null,

  phone: "+57 300 123 4567",
  address: "Dosquebradas, Risaralda",

  joinedAt: "2025-11-20",

  orders: [
    {
      id: "ORD-101",
      date: "2026-04-10",
      total: 45000,
      status: "Entregado",
    },
    {
      id: "ORD-102",
      date: "2026-04-12",
      total: 32000,
      status: "Cancelado",
    },
    {
      id: "ORD-103",
      date: "2026-04-14",
      total: 78000,
      status: "En_camino",
    },
    {
      id: "ORD-104",
      date: "2026-04-15",
      total: 21000,
      status: "Pendiente",
    },
    {
      id: "ORD-105",
      date: "2026-04-17",
      total: 99000,
      status: "Entregado",
    },
  ],
};

export default mockUser;