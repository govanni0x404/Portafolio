export const projects = [
  {
    id: 'integracion-maquinas-pos',
    title: 'Integración Máquinas POS',
    description:
      'Sistema en Python que conecta un punto de venta con las máquinas de pago (Mercado Pago, Transbank, Getnet): al cobrar, envía el monto directo a la máquina para asi no digitarlo el monto a mano.',
    tags: ['Python', 'APIFlask', 'Mercado Pago', 'Transbank', 'Getnet'],
    link: '',
    repo: 'https://github.com/govanni0x404/Integracion_Maquinas_Pos',
    images: [
      { src: '/projects/integracion-pos-flujo.svg', alt: 'Diagrama animado: la caja envía el monto a la API y la máquina de pago lo cobra' },
    ],
  },
  {
    id: 'label-app',
    title: 'LabelApp',
    description:
      'App móvil que usa la conexion Bluetooth de una impresora térmica portátil para imprimir etiquetas y tickets, con diferentes atributos, ademas de contart con código QR, todo desde el celular.',
    tags: ['React Native', 'Bluetooth'],
    link: '',
    repo: 'https://github.com/govanni0x404/LabelApp',
  },
  {
    id: 'api-patentes',
    title: 'API Patentes',
    description:
      'API desarrollada en Python, la cual recibe la patente de un vehículo y entrega los datos de dicha patente (marca, modelo, año), todoo obtenido automáticamente desde sitios públicos.',
    tags: ['Python', 'Web Scraping', 'API'],
    link: '',
    repo: 'https://github.com/govanni0x404/Api_Patentes',
    images: [
      { src: '/projects/api-patentes-flujo.svg', alt: 'Diagrama animado: patente o foto, web scraping y respuesta JSON con los datos del vehículo' },
    ],
  },
  {
    id: 'sistema-inventario',
    title: 'Sistema de Inventario y Ventas (POS)',
    description:
      'Sistema de administracion para tiendas: control de stock, clientes y proveedores, con caja de ventas integrada, que ayuda con el descuento de inventario automáticamente en cada venta.',
    tags: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    link: '',
    repo: 'https://github.com/govanni0x404/Sistema-Inventario',
    images: [
      { src: '/projects/inventario-dashboard.png', alt: 'Dashboard con ventas del período' },
      { src: '/projects/inventario-caja.png', alt: 'Caja con ticket de venta' },
      { src: '/projects/inventario-productos.png', alt: 'Listado de productos con alertas de stock bajo' },
      { src: '/projects/inventario-historial.png', alt: 'Historial de ventas por método de pago' },
    ],
  },
  {
    id: 'data-shopy',
    title: 'DataShopy',
    description:
      'App móvil que funciona como directorio de comercios: Ofrece y muestra locales cercanos, ademas de sus promociones vigentes, para econtrar mejores ofertas sin recorrer muchas tiendas.',
    tags: ['React Native'],
    link: '',
    repo: 'https://github.com/govanni0x404/DataShopy',
    //status: 'En desarrollo',
  },
  {
    id: 'sistema-reservas',
    title: 'Sistema de Reservas (Smart Booking)',
    description:
      'Plataforma de reservas de horas para distintos negocios de servicios (barberías, spas, salones, etc): El usuario cliente selecciona servicio y trabajador. El sistema calcula en tiempo real los horarios y disponibilidad para evitar choques o reservas duplicadas. Clientes, trabajadores y dueños disponen de vistas personalizadas, para la mejor administracion.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    link: '',
    repo: 'https://github.com/govanni0x404/Sistema-Reserva',
    images: [
      { src: '/projects/reservas-reservar.png', alt: 'Formulario de reserva con horarios disponibles' },
      { src: '/projects/reservas-panel.png', alt: 'Panel del dueño con reservas y sus estados' },
      { src: '/projects/reservas-negocios.png', alt: 'Listado de negocios disponibles' },
    ],
    //status: 'En desarrollo',
  },
  {
    id: 'job-notifier',
    title: 'Job Notifier',
    description:
      'Bot ejecutado automáticamente cada dia, busca y analisa ofertas de empleo mediante una API, compara dichas ofertas con perfil del usuario y notifica por correo únicamente las que coinciden con el perfil del usuario, sin duplicar avisos ya entregados o analisados.',
    tags: ['Node.js', 'GitHub Actions', 'Resend', 'JSearch API'],
    link: '',
    repo: 'https://github.com/govanni0x404/job-notifier',
    images: [
      { src: '/projects/job-notifier-flujo.svg', alt: 'Diagrama animado: GitHub Actions, JSearch API, match con perfil y correo' },
      { src: '/projects/job-notifier-correo.png', alt: 'Correo de ejemplo con ofertas que coinciden con el perfil' },
    ],
  },
]
