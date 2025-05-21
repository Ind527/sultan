import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};

// Testimonial data
export const testimonials = [
  {
    id: 1,
    name: "Siti Rahmawati",
    company: "PT Kuliner Nusantara, Jakarta",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    content: "Kami telah bekerja sama dengan Ekspor Daun Pisang Indonesia selama 3 tahun dan sangat puas dengan konsistensi kualitas produk mereka. Daun pisang yang mereka pasok selalu segar dan dalam kondisi sempurna, yang sangat penting untuk bisnis makanan tradisional kami. Layanan pelanggan mereka juga luar biasa, selalu responsif dan membantu.",
    rating: 5
  },
  {
    id: 2,
    name: "Budi Santoso",
    company: "Eco Packaging Solutions, Surabaya",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    content: "Sebagai perusahaan yang fokus pada kemasan ramah lingkungan, menemukan pemasok daun pisang yang andal sangat penting bagi kami. Ekspor Daun Pisang Indonesia telah menjadi mitra ideal dengan komitmen mereka terhadap praktik berkelanjutan dan produk berkualitas tinggi. Pengiriman selalu tepat waktu dan dukungan mereka luar biasa.",
    rating: 4.5
  },
  {
    id: 3,
    name: "Rina Wijaya",
    company: "Global Green Imports, Singapura",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
    content: "Kami mengimpor daun pisang untuk jaringan restoran di Singapura, dan Ekspor Daun Pisang Indonesia selalu menjadi pemasok pilihan kami. Produk mereka konsisten, pengiriman internasional lancar, dan mereka sangat memahami persyaratan peraturan. Tim mereka juga sangat proaktif dalam menangani masalah apa pun yang mungkin muncul.",
    rating: 5
  }
];

// Product data
export const products = [
  {
    id: 1,
    name: "Daun Pisang Segar",
    description: "Daun pisang segar berkualitas tinggi, dipanen dan dikemas dengan hati-hati untuk menjaga kesegaran maksimal.",
    image: "https://pixabay.com/get/g5cbceebbea108bb284b981652eee2923e9872384abd49b04785978a18988e7e08a57842a48dfe5b86d8e406c0b920533b167edd15cf6bf3976866d61be98f83c_1280.jpg"
  },
  {
    id: 2,
    name: "Daun Pisang Kering",
    description: "Daun pisang yang dikeringkan dengan proses khusus untuk penggunaan jangka panjang, ideal untuk kerajinan.",
    image: "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Daun Pisang Potong",
    description: "Daun pisang yang dipotong sesuai ukuran standar untuk pembungkus makanan dan keperluan katering.",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Kemasan Eco-Friendly",
    description: "Kemasan ramah lingkungan berbahan daun pisang untuk berbagai kebutuhan makanan dan produk.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Gallery images
export const galleryImages = [
  {
    id: 1,
    category: "plantation",
    title: "Kebun daun pisang",
    image: "https://images.unsplash.com/photo-1599933190257-ade62d308472?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "plantation",
    title: "Kebun daun pisang close-up",
    image: "https://images.unsplash.com/photo-1575844264771-892081089af5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "plantation",
    title: "Proses panen daun pisang",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "plantation",
    title: "Pemandangan kebun dari atas",
    image: "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    category: "warehouse",
    title: "Gudang ekspor modern",
    image: "https://images.unsplash.com/photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    category: "warehouse",
    title: "Persiapan pengiriman",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    category: "products",
    title: "Daun pisang siap ekspor",
    image: "https://pixabay.com/get/g5e591e7a545f86df153f85134916b9664077d65539b975d3227a4a047ff33a3611ce747b792c3d6a15c00044950d4f7fa3abc72ebb7c042314293f25ccdcdc57_1280.jpg"
  },
  {
    id: 8,
    category: "products",
    title: "Produk jadi daun pisang",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// About us images
export const aboutImages = [
  {
    id: 1,
    title: "Operasi ekspor",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Proses penanganan",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Pemeriksaan kualitas",
    image: "https://pixabay.com/get/g9f4dd0d003d63425d4f2decfd6ca2e48b47660edb4ca98fc50d026d0aceef5b0ba7d7a3ae92580d50cb3e5f8304f5c9ee46f48330a2adf3bd3bc61666185ae74_1280.jpg"
  },
  {
    id: 4,
    title: "Produk siap kirim",
    image: "https://pixabay.com/get/gaf8b1c4896d4ad2ba034f5bf3092372e8cb4f539a61ab7f6699bcfd5c10307f252af6d2ff022d35ea6f0068a9729e32378da5cfe92d5c07dcb1653433395ee7f_1280.jpg"
  }
];
