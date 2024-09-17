import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

export const menuCategories = [
  {
    id: 1,
    name: "mujeres",
    sub_category: [
      { name: "vestidos", img: "/assets/submenu_mujer_vestido.png" },
      { name: "blusas", img: "/assets/submenu_mujer_blusa.png" },
      { name: "pantalones", img: "/assets/submenu_mujer_pantalon.png" },
      { name: "zapatos", img: "/assets/submenu_mujer_zapato.png" },
      { name: "chaquetas", img: "/assets/submenu_mujer_chaqueta.png" },
      { name: "accesorios", img: "/assets/submenu_mujer_accesorios.png" },
    ]
  },
  {
    id: 2,
    name: "hombres",
    sub_category: [
      { name: "remeras", img: "/assets/submenu_hombre_remera.png" },
      { name: "camisas", img: "/assets/submenu_hombre_camisa.png" },
      { name: "pantalones", img: "/assets/submenu_hombre_pantalon.png" },
      { name: "zapatos", img: "/assets/submenu_hombre_zapato.png" },
    ]
  },
  {
    id: 3,
    name: "ninos",
    sub_category: [
      { name: "remeras", img: "/assets/submenu_nino_remera.png" },
      { name: "pantalones", img: "/assets/submenu_nino_pantalon.png" },
      { name: "zapatos", img: "/assets/submenu_nino_zapatilla.png" },
    ]
  },
  { id: 4, name: "ofertas", sub_category: [] },
  { id: 5, name: "premiun", sub_category: [] },
  { id: 6, name: "showrooms", sub_category: [] },
]


export const socials = [  
  { id: 1, name: "instagram", icon: faInstagram },
  { id: 2, name: "facebook", icon: faFacebookF }
]
