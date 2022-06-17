


const productos= [
{
    id:1,
    nombre:"RX 6600 XT",
    descripcion:"RX 6600 XT Gigabite version 8GB DDR6 OC",
    descripcionLarga:`
    Descripción 
    Especificaciones
    Cantidad de memoria: 8 GB
    Interfaz de memoria: 128 bits 
    Tipo de DRAM: GDDR6
    Reloj gráfico: 1552 MHz
    Reloj Boost: 1777 MHz
    Núcleos CUDA: 2560
    HDMI: HDMI 2.1
    DisplayPort: DP1.4a x 3
    Altura: 2 Ranura
    Tamaño de la placa: 245x119x40mm
    Potencia de la tarjeta gráfica: 130 W
    `,
    imagen:'../assets/placas-video/rx6600.jpg',
    categoria:"placa-video",
    precio:75000
},
{
    id:2,
    nombre:"RTX 3050",
    descripcion: "RTX 3050 Gigabite version Eagle 8GB DDR6 OC",
    descripcionLarga:
    `Descripción 
    Especificaciones
    Cantidad de memoria: 8 GB
    Interfaz de memoria: 128 bits 
    Tipo de DRAM: GDDR6
    Reloj gráfico: 1552 MHz
    Reloj Boost: 1777 MHz
    Núcleos CUDA: 2560
    HDMI: HDMI 2.1
    DisplayPort: DP1.4a x 3
    Altura: 2 Ranura
    Tamaño de la placa: 245x119x40mm
    Potencia de la tarjeta gráfica: 130 W`,
    imagen:"../assets/placas-video/rtx3050.jpg",
    categoria:"placa-video",
    precio:80000
},
{
    id:3,
    nombre:"ram Kingston 8gb",
    descripcion:"Memoria ram Kingston Fury 8 GB DDR4",
    descripcionLarga:
    `Optimizá el rendimiento de tu máquina con la tecnología DDR4 SDRAM.
    Memoria con formato UDIMM.
    Alcanza una velocidad de 2666 MHz.
    Apta para computadoras de escritorio.
    Línea Fury DDR4.
    Cuenta con una tasa de transferencia de 21300 MB/s.
    Compatible con AMD Ryzen, Intel.`,
    imagen:"../assets/ram/ram.jpg",
    categoria:"ram",
    precio:6200
},
{
    id:4,
    nombre:"RTX 3080",
    descripcion:"RTX 3080 Palit version 10GB DDR6",
    imagen:"../assets/placas-video/rtx3080.jpg",
    descripcionLarga:
    `Descripción 
    Especificaciones
    Cantidad de memoria: 8 GB
    Interfaz de memoria: 128 bits 
    Tipo de DRAM: GDDR6
    Reloj gráfico: 1552 MHz
    Reloj Boost: 1777 MHz
    Núcleos CUDA: 2560
    HDMI: HDMI 2.1
    DisplayPort: DP1.4a x 3
    Altura: 2 Ranura
    Tamaño de la placa: 245x119x40mm
    Potencia de la tarjeta gráfica: 130 W`,
    categoria:"placa-video",
    precio:200000
},
{
    id:5,
    nombre:"I5 12400",
    descripcion:"I5 12400 6 Nucleos/12 Hilos 2.5 GHZ",
    descripcionLarga:
    `Especificaciones de la CPU
    Núcleos totales: 6
    N.º de núcleos de rendimiento: 6
    Subprocesos totales: 12
    Frecuencia turbo máxima: 4,40 GHz
    Frecuencia turbo máxima de núcleo de rendimiento: 4,40 GHz
    Frecuencia base de núcleo de rendimiento: 2,50 GHz
    Cache: Caché inteligente Intel de 18 MB
    Caché L2 total: 7,5 MB
    Potencia base del procesador: 65W
    Máxima potencia turbo: 117 vatios`,
    imagen:"../assets/procesador/i512400k.jpg",
    categoria:"procesadores",
    precio:25000
},
{
    id:6,
    nombre:"RTX 2060",
    descripcion:"RTX 2060 Asus 6GB DDR6 OC VERSION",
    descripcionLarga:
    `Descripción 
    Especificaciones
    Cantidad de memoria: 8 GB
    Interfaz de memoria: 128 bits 
    Tipo de DRAM: GDDR6
    Reloj gráfico: 1552 MHz
    Reloj Boost: 1777 MHz
    Núcleos CUDA: 2560
    HDMI: HDMI 2.1
    DisplayPort: DP1.4a x 3
    Altura: 2 Ranura
    Tamaño de la placa: 245x119x40mm
    Potencia de la tarjeta gráfica: 130 W`,
    imagen:"../assets/placas-video/rtx2060.jpg",
    categoria:"placa-video",
    precio:90000
},
{
    id:7,
    nombre:"Motherboard Z390",
    descripcion:"Motherboard Asrock Z390",
    descripcionLarga:`
    Soporta procesadores Intel® Core™ de 9ª y 8ª Generación (Socket 1151)
    Soporta memoria DDR4 4300MHz+ (OC)
    2 PCIe 3.0 x16, 3 PCIe 3.0 x1, 1 M.2 Key E para WiFi
    AMD Quad CrossFireX™ y CrossFireX™
    Opciones de salida gráficos: HDMI
    Soporta tecnología HDMI 1.4 con maxima resolución hasta 4K x 2K (4096x2160) @ 30Hz
    Audio 7.1 canales HD (Códec de audio Realtek ALC1200), Capacitadores de audio ELNA
    6 SATA3, 1 Ultra M.2 (PCIe Gen3 x4 & SATA3)
    8 USB 3.2 Gen1 (4 Frontales, 4 Traseros)
    `,
    imagen:"../Assets/motherboard/asrock-z390.jpg",
    categoria:"motherboards",
    precio:16000
},
{
    id:8,
    nombre:"Motherboard B450M-A 2",
    descripcion:"Motherboard B450M-A 2 Asus",
    descripcionLarga:`
    CPU: AMD AM4 Socket for 3rd/2nd/1st Gen AMD Ryzen
    Gráficos: 1 x D-Sub
    1 x DVI-D
    1 x HDMI 2.0b
    LAN: Realtek RTL8111H
    ASUS LANGuard
    Puertos USB:
    Rear USB Port ( Total 6 )
    2 x USB 3.2 Gen 2 (up to 10Gbps) port(s)(2 x Type-A)
    4 x USB 3.2 Gen 1 port(s)(4 x Type-A)
    Front USB Port ( Total 6 )
    2 x USB 3.2 Gen 1 port(s)
    4 x USB 2.0 port(s)`,
    imagen:"../assets/motherboard/asus-b450m-a2.jpg",
    categoria:"motherboards",
    precio:19300
},
{
    id:9,
    nombre:"Motherboard A320M-H",
    descripcion:"Motherboard A320M-H Gigabyte",
    descripcionLarga:`
    CPU: AMD AM4 Socket for 3rd/2nd/1st Gen AMD Ryzen
    Memoria: 3rd/2nd/1st Gen AMD Ryzen
    Gráficos: 1 x D-Sub
    1 x DVI-D
    1 x HDMI 2.0b
    LAN: Realtek RTL8111H
    ASUS LANGuard
    Puertos USB:
    Rear USB Port ( Total 6 )
    2 x USB 3.2 Gen 2 (up to 10Gbps) port(s)(2 x Type-A)
    4 x USB 3.2 Gen 1 port(s)(4 x Type-A)
    Front USB Port ( Total 6 )
    2 x USB 3.2 Gen 1 port(s)
    4 x USB 2.0 port(s)
    `,
    imagen:"../assets/motherboard/gigabyte-a320m-h.jpg",
    categoria:"motherboards",
    precio:12700
},
{
    id:10,
    nombre:"Motherboard H510M-E",
    descripcion:"Motherboard Asus H510M-E",
    descripcionLarga:`
    LGA1200 package: 11th Generation Intel Core i9 / i7 / i5 processors - 10th Generation Intel Core i9 / i7 / i5 / i3 / Pentium / Celeron processors
    Chipset: Intel® H510 Express Chipset
    Memoria Max: Hasta 64gb 3200mhz
    Gráficos Integrados: 1 x D-Sub / 1 x HDMI
    Audio: Realtek Audio CODEC / High Definition Audio
    LAN: Realtek GbE LAN chip (1 Gbit/100 Mbit)
    Puertos de Expansión: 1 x PCI Express x16 slot, running at x16 (PCIEX16) / 1 x PCI Express x1 slot (PCIEX1_1)
    Interfaz de Almacenamiento: 1 x M.2 connector (Socket 3, M key, type 2260/2280/22110 SATA and PCIe 3.0 x4/x2 SSD support) - 4 x SATA 6Gb/s connectors
    Sistema Operativo: Support for Windows 10 64-bit
    Diseño: Micro ATX Form Factor; 24.4cm x 21.0cm`,
    imagen:"../assets/motherboard/h510m-e_asus.jpg",
    categoria:"motherboards",
    precio:14000
},
{
    id:11,
    nombre:"Ryzen 5 5500",
    descripcion:"Procesador Ryzen 5 5500",
    descripcionLarga:`
    Marca : AMD
    Línea : Ryzen 5
    Modelo : 5500
    Modelo alfanumérico : 100-100000457BOX
    Caché : 16 MB
    Cantidad de núcleos de CPU : 6
    Hilos : 12
    Tipos de memoria RAM soportadas : DDR4
    Socket : AM4
    Frecuencia mínima de reloj : 3,6 GHz
    Frecuencia máxima de reloj : 4,2 GHz
    Desbloqueado para OC : Si
    
    TDP : 65W
    `,
    imagen:"../assets/procesador/Ryzen-5-5500.jpg",
    categoria:"procesadores",
    precio:28000
},
{
    id:12,
    nombre:"Ryzen 7 Pro 4750",
    descripcion:"Procesador Ryzen 7 Pro 4750",
    descripcionLarga:`
    N.° de núcleos de CPU 8
    N.° de subprocesos 16
    Reloj de aumento máx. Hasta 4.4GHz
    Reloj base 3.6GHz
    Caché L1 total 512KB
    Caché L2 total 4MB
    Caché L3 total 8MB
    TDP/TDP predeterminado 65W
    `,
    imagen:"../assets/procesador/Ryzen7pro4750.jpg",
    categoria:"procesadores",
    precio:40000
},
{
    id:13,
    nombre:"Intel Pentium 7400g",
    descripcion:"Procesador Intel Pentium 7400g",
    descripcionLarga:`
    Especificaciones de la CPU
    Núcleos totales: 2
    Número de núcleos de rendimiento: 2
    Número de núcleos eficientes: 0
    Subprocesos totales: 4
    Frecuencia base de núcleo de rendimiento: 3,70 GHz
    Cache: Caché inteligente Intel de 6 MB
    Caché L2 total: 2,5 MB
    Potencia base del procesador: 46W
    `,
    imagen:"../assets/procesador/pentium-g7400.jpg",
    categoria:"procesadores",
    precio:14000
},
{
    id:14,
    nombre:"Disco Solido 120gb ",
    descripcion:"Disco solido 120gb Gigabyte",
    descripcionLarga:`
    Marca: Gigabyte
    Modelo: GP-GSTFS31120GNTD
    Interfaz: SATA 6.0Gb / s
    Factor de forma: SSD interno de 2.5 pulgadas
    Capacidad total: 120GB
    NAND: NAND Flash
    Caché DDR externo: N / A
    Velocidad de lectura secuencial: Hasta 500 MB / s
    Velocidad de escritura secuencial: Hasta 380 MB / s
    Lectura aleatoria IOPS: hasta 50k
    Escritura aleatoria IOPS: hasta 60k
    Dimensión (W x H x L): 69.85 x 7 x 100 mm
    Consumo de energía (activo)Promedio: R: 2240mW; W: 2610mW
    `,
    imagen:"../assets/almacenamiento/gigabyte-120gb.jpg",
    categoria:"almacenamiento",
    precio:3800
},
{
    id:15,
    nombre:"Disco solido 240gb",
    descripcion:"Disco solido WesternDigital green 240gb",
    descripcionLarga:`
    ESPECIFICACIONES

    Capacity
    240GB
    Interface
    SATA 6Gb/s
    Form Factor
    2.5”/7mm
    Endurance (TBW)
    120GB 40
    240GB 80
    `,
    imagen:"../assets/almacenamiento/wdgreen240gb.jpg",
    categoria:"almacenamiento",
    precio:5300
},
{
    id:16,
    nombre:" Disco Western Digital 1TB",
    descripcion:"Disco rigido Western Digital 1TB",
    descripcionLarga:`
    Capacidad: 1 TB
    Factor de forma: 3.5 "
    Aplicaciones: PC
    Tecnología de almacenamiento: HDD
    Interfaces: SATA III
    Velocidad de rotación: 7200 rpm
    `,
    imagen:"../assets/almacenamiento/wb-blue1tb.jpg",
    categoria:"almacenamiento",
    precio:5000
},
{
    id:17,
    nombre:"Fuente gigabyte 450B",
    descripcion:"Fuente de alimentacion Gigabyte 450B 450WATTS",
    descripcionLarga:`
    Modelo: P450B
    Tipo: Intel Form Factor ATX 12V v2.31
    PFC: PFC activo (>0.9 típico)
    Voltaje de entrada: 100-240 Vac (rango completo)
    Corriente de entrada: 8-4 A
    Frecuencia de entrada: 60-50 Hz
    Capacidad de salida: 450 W
    Dimensión: 150 x 140 x 86 mm
    Tipo de ventilador: Ventilador de cojinetes hidráulicos (HYB) de 120 mm
    80 MÁS: Bronce
    Eficacia: 85% a carga típica
    MTBF >100.000 horas
    Tipo de cable: Plano, Todo negro
    `,
    imagen:"../assets/fuentes/gigabytep450b.jpg",
    categoria:"fuentes",
    precio:8000
},
{
    id:18,
    nombre:"Fuente Gamermax 650w 80 plus",
    descripcion:"Fuente Gamermax 650WATTS 80 PLUS",
    descripcionLarga:`
    Elegante cubierta de PSU negro con cables mallados negros.
    ATX12V Ver.2.30 compatible.
    PSU de alta eficiencia, hasta un 85%.
    Carril extendido de 12V para alta compatibilidad
    Ventilador negro silencioso de 14 cm con circuito de control de velocidad inteligente
    Funciones de protección completa con OVP / UVP / OPP / SCP / SIP
    Seguridad y EMC certificados por CE
    ECO amigable según las directivas RoHS y Erp 2013
    Cables semi-modulares para un fácil mantenimiento
    `,
    imagen:"../assets/fuentes/gamermax650w80plus.jpg",
    categoria:"fuentes",
    precio:14000
},
{
    id:19,
    nombre:"AeroCool Cyclon 700w rgb",
    descripcion:"Fuente AeroCool Cyclon 700W RGB",
    descripcionLarga:`
    Características principales
    Marca de la fuente: Aerocool
    Línea: Cylon
    Modelo de la fuente: Cylon
    Potencia de salida: 600 W
    Otras características
    Tipo de fuente de alimentación para PC: ATX
    Con protección de bajo voltaje: No
    Con iluminación RGB: Sí
    Cantidad de conectores SATA: 5
    Cantidad de conectores PCI-E: 2
    Certificación de eficiencia: 80 Plus Bronze
    Cantidad de pines de la placa madre: 24
    `,
    imagen:"../assets/fuentes/AeroCool-Cylon-700w-rgb.jpg",
    categoria:"fuentes",
    precio:90000
},
{
    id:20,
    nombre:"Memoria ram Elite 8gb",
    descripcion:"Memoria ddr4 8gb Elite 2400MHZ",
    descripcionLarga:`
    Tipo de memoria interna: DDR4
    Memoria interna: 8 GB
    Diseño de memoria: 1 x 8 GB
    Velocidad de memoria del reloj: 3200 MHz
    Latencia CAS: 22
    `,
    imagen:"../assets/ram/ramElite8gb2400.jpg",
    categoria:"ram",
    precio:6130
},
{
    id:21,
    nombre:"Memoria Patriot Viper Steel 8gb",
    descripcion:"Memoria Patriot Viper Steel 8gb 3000MHZ",
    descripcionLarga:`
    Capacidad: 8GB
    Velocidad: 3200MHz
    Tipo: DDR4
    Cantidad De Memorias: 1
    Latencia: CL16-18-18
    Voltaje: 1.35V
    `,
    imagen:"../assets/ram/patriot-Viper-Steel-3000.jpg",
    categoria:"ram",
    precio:6450
},
{
    id:22,
    nombre:"Memoria Geil Evo Potenza 16gb",
    descripcion:"Memoria Geil Evo Potenza 16gb 3200MHZ",
    descripcionLarga:`
    Capacidad 16 gb
    Velocidad 3000 mhz
    Tipo DDR4
    Cantidad De Memorias 1
    Latencia 16 cl
    Voltaje 1.35 v
    `,
    imagen:"../assets/ram/16gb-3000evo-potenza-red-.jpg",
    categoria:"ram",
    precio:9179
},


]

export default productos