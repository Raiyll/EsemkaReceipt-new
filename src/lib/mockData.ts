export const mockUsers = [
  {
    id: 1,
    name: "Siti Nurhaliza",
    email: "siti@email.com",
    password: "hashed_password_1",
    address: "Jl. Merdeka No. 123, Jakarta Pusat",
    created_at: "2024-01-15T08:30:00Z",
    updated_at: "2024-01-15T08:30:00Z",
  },
  {
    id: 2,
    name: "Budi Santoso",
    email: "budi@email.com",
    password: "hashed_password_2",
    address: "Jl. Sudirman No. 45, Bandung",
    created_at: "2024-01-20T10:15:00Z",
    updated_at: "2024-01-20T10:15:00Z",
  },
  {
    id: 3,
    name: "Dewi Kusuma",
    email: "dewi@email.com",
    password: "hashed_password_3",
    address: "Jl. Diponegoro No. 78, Yogyakarta",
    created_at: "2024-02-01T14:20:00Z",
    updated_at: "2024-02-01T14:20:00Z",
  },
];

export const mockCategories = [
  {
    id: 1,
    name: "Jamu Kesehatan",
    description: "Jamu untuk menjaga kesehatan tubuh secara umum",
    created_at: "2024-01-10T09:00:00Z",
    updated_at: "2024-01-10T09:00:00Z",
  },
  {
    id: 2,
    name: "Jamu Kecantikan",
    description: "Jamu untuk perawatan kecantikan dan kulit",
    created_at: "2024-01-10T09:05:00Z",
    updated_at: "2024-01-10T09:05:00Z",
  },
  {
    id: 3,
    name: "Jamu Stamina",
    description: "Jamu untuk meningkatkan stamina dan vitalitas",
    created_at: "2024-01-10T09:10:00Z",
    updated_at: "2024-01-10T09:10:00Z",
  },
  {
    id: 4,
    name: "Jamu Herbal Tradisional",
    description: "Jamu tradisional warisan nenek moyang",
    created_at: "2024-01-10T09:15:00Z",
    updated_at: "2024-01-10T09:15:00Z",
  },
];

export const mockProducts = [
  {
    id: 1,
    category_id: 1,
    title: "Jamu Kunyit Asam",
    value: 15000,
    description:
      "Jamu tradisional kunyit asam untuk menjaga kesehatan pencernaan dan meningkatkan daya tahan tubuh",
    picture_url:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400",
    created_at: "2024-01-12T10:00:00Z",
    updated_at: "2024-01-12T10:00:00Z",
  },
  {
    id: 2,
    category_id: 2,
    title: "Jamu Beras Kencur",
    value: 12000,
    description:
      "Jamu beras kencur segar untuk menjaga stamina dan kesegaran tubuh",
    picture_url:
      "https://images.unsplash.com/photo-1577234286642-fc512a5f8f11?w=400",
    created_at: "2024-01-12T10:15:00Z",
    updated_at: "2024-01-12T10:15:00Z",
  },
  {
    id: 3,
    category_id: 2,
    title: "Jamu Temulawak",
    value: 18000,
    description:
      "Jamu temulawak untuk menjaga kesehatan liver dan meningkatkan nafsu makan",
    picture_url:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400",
    created_at: "2024-01-13T11:00:00Z",
    updated_at: "2024-01-13T11:00:00Z",
  },
  {
    id: 4,
    category_id: 3,
    title: "Jamu Kuat Lelaki",
    value: 25000,
    description:
      "Jamu tradisional untuk meningkatkan stamina dan vitalitas pria",
    picture_url:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400",
    created_at: "2024-01-13T11:30:00Z",
    updated_at: "2024-01-13T11:30:00Z",
  },
  {
    id: 5,
    category_id: 2,
    title: "Jamu Sari Rapet",
    value: 20000,
    description: "Jamu khusus wanita untuk kesehatan dan kecantikan dari dalam",
    picture_url:
      "https://images.unsplash.com/photo-1556910831-704756572c99?w=400",
    created_at: "2024-01-14T09:00:00Z",
    updated_at: "2024-01-14T09:00:00Z",
  },
  {
    id: 6,
    category_id: 4,
    title: "Jamu Gendong Tradisional",
    value: 10000,
    description:
      "Jamu gendong racikan tradisional dari berbagai rempah pilihan",
    picture_url:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400",
    created_at: "2024-01-14T09:30:00Z",
    updated_at: "2024-01-14T09:30:00Z",
  },
  {
    id: 7,
    category_id: 1,
    title: "Jamu Cabe Puyang",
    value: 13000,
    description: "Jamu cabe puyang untuk meredakan pegal linu dan masuk angin",
    picture_url:
      "https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?w=400",
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-15T10:00:00Z",
  },
  {
    id: 8,
    category_id: 1,
    title: "Jamu Pahitan",
    value: 14000,
    description: "Jamu pahitan untuk membersihkan darah dan menjaga kesehatan",
    picture_url:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-15T10:30:00Z",
  },
];

export const mockReviews = [
  {
    id: 1,
    title: "Jamu Kunyit Asam Enak!",
    description:
      "Rasanya enak, tidak terlalu asam. Setelah minum rutin, pencernaan jadi lebih lancar. Recommended!",
    picture_url:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400",
    stars: 5,
    created_at: "2024-01-20T15:30:00Z",
    updated_at: "2024-01-20T15:30:00Z",
  },
  {
    id: 2,
    title: "Beras Kencur Segar",
    description:
      "Jamu beras kencurnya segar banget. Cocok diminum setelah beraktivitas seharian. Badan jadi lebih fit.",
    picture_url: null,
    stars: 4,
    created_at: "2024-01-22T08:45:00Z",
    updated_at: "2024-01-22T08:45:00Z",
  },
  {
    id: 3,
    title: "Temulawak Berkhasiat",
    description:
      "Sudah sebulan rutin minum jamu temulawak, nafsu makan meningkat dan badan terasa lebih sehat.",
    picture_url:
      "https://images.unsplash.com/photo-1556910634-e55c0f6faef2?w=400",
    stars: 5,
    created_at: "2024-01-25T11:20:00Z",
    updated_at: "2024-01-25T11:20:00Z",
  },
  {
    id: 4,
    title: "Pelayanan Cepat",
    description:
      "Pesanan datang cepat dan jamu dalam kondisi baik. Rasanya juga mantap, akan order lagi!",
    picture_url: null,
    stars: 5,
    created_at: "2024-01-28T14:00:00Z",
    updated_at: "2024-01-28T14:00:00Z",
  },
  {
    id: 5,
    title: "Lumayan",
    description:
      "Rasanya standar, tidak terlalu istimewa tapi juga tidak mengecewakan. Harga sesuai kualitas.",
    picture_url: null,
    stars: 3,
    created_at: "2024-01-30T16:15:00Z",
    updated_at: "2024-01-30T16:15:00Z",
  },
];

export const mockResponses = [
  {
    id: 1,
    name: "Ahmad Fauzi",
    email: "ahmad.fauzi@email.com",
    phone_number: "081234567890",
    content:
      "Halo, saya mau tanya apakah jamu kunyit asam aman untuk ibu hamil? Terima kasih.",
    created_at: "2024-01-18T09:30:00Z",
    updated_at: "2024-01-18T09:30:00Z",
  },
  {
    id: 2,
    name: "Linda Wijaya",
    email: "linda.w@email.com",
    phone_number: "082345678901",
    content:
      "Apakah ada paket bundling untuk pembelian jamu dalam jumlah banyak? Saya tertarik untuk reseller.",
    created_at: "2024-01-19T13:45:00Z",
    updated_at: "2024-01-19T13:45:00Z",
  },
  {
    id: 3,
    name: "Rina Melati",
    email: "rina.melati@email.com",
    phone_number: "083456789012",
    content:
      "Pengiriman ke luar kota berapa lama ya? Saya di Surabaya. Terima kasih.",
    created_at: "2024-01-21T10:00:00Z",
    updated_at: "2024-01-21T10:00:00Z",
  },
  {
    id: 4,
    name: "Hendra Gunawan",
    email: "hendra.g@email.com",
    phone_number: "084567890123",
    content:
      "Bagus sekali produknya! Saya sudah order 3 kali dan selalu puas. Keep up the good work!",
    created_at: "2024-01-23T14:30:00Z",
    updated_at: "2024-01-23T14:30:00Z",
  },
  {
    id: 5,
    name: "Sari Indah",
    email: "sari.indah@email.com",
    phone_number: "085678901234",
    content:
      "Mau komplain nih, kemarin pesanan saya datang botolnya pecah. Bisa dikirim ulang?",
    created_at: "2024-01-26T11:15:00Z",
    updated_at: "2024-01-26T11:15:00Z",
  },
];

// Untuk simulasi API response
export const mockApiResponses = {
  users: {
    success: true,
    message: "Users retrieved successfully",
    data: mockUsers,
  },
  categories: {
    success: true,
    message: "Categories retrieved successfully",
    data: mockCategories,
  },
  products: {
    success: true,
    message: "Products retrieved successfully",
    data: mockProducts,
  },
  reviews: {
    success: true,
    message: "Reviews retrieved successfully",
    data: mockReviews,
  },
  responses: {
    success: true,
    message: "Responses retrieved successfully",
    data: mockResponses,
  },
};

// import { mockProducts, mockCategories, mockReviews } from './mockData';

// function ProductList() {
//   const [products, setProducts] = useState(mockProducts);

//   // Nanti tinggal ganti dengan fetch ke API
//   // useEffect(() => {
//   //   fetch('/api/products')
//   //     .then(res => res.json())
//   //     .then(data => setProducts(data));
//   // }, []);

//   return (
//     // render products
//   );
// }
