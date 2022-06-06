
import img from './images/rx6600.jpg'
import img1 from './images/rtx3050.jpg'
import img2 from './images/ram.jpg'
import img3 from './images/i512400k.jpg'
import img4 from './images/rtx3080.jpg'
import img5 from './images/rtx2060.jpg'


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
    imagen:img,
    categoria:"placa-video",
    precio: "$ " + 75000
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
    imagen:img1,
    categoria:"placa-video",
    precio: "$ " + 80000
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
    imagen:img2,
    categoria:"ram",
    precio: "$ " + 6200
},
{
    id:4,
    nombre:"RTX 3080",
    descripcion:"RTX 3080 Palit version 10GB DDR6",
    imagen:img4,
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
    precio: "$ " + 200000
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
    imagen:img3,
    categoria:"procesador",
    precio: "$ " + 25000
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
    imagen:img5,
    categoria:"placa-video",
    precio: "$ " + 90000
}]

export default productos