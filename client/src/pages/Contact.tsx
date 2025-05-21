import SectionTitle from "@/components/shared/SectionTitle";
import ContactForm from "@/components/contact/ContactForm";
import GoogleMaps from "@/components/shared/GoogleMaps";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative pt-16 pb-20 flex content-center items-center justify-center"
        style={{ minHeight: "40vh" }}
      >
        <div className="absolute top-0 w-full h-full bg-center bg-cover">
          <div
            className="w-full h-full bg-gradient-to-r from-primary/60 to-secondary/40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
              backgroundBlendMode: "overlay",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full text-center">
              <h1 className="text-white font-heading font-bold text-4xl md:text-5xl mb-6">
                Hubungi Kami
              </h1>
              <p className="text-white text-lg">
                Kami siap membantu menjawab pertanyaan Anda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Informasi Kontak"
            subtitle="Hubungi kami melalui kontak di bawah ini atau kirimkan pesan melalui formulir."
          />

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="p-6 bg-light rounded-lg shadow-md flex items-start">
                <div className="mr-4 text-primary text-2xl">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Alamat</h4>
                  <p className="text-gray-600">
                    Jl. Raya Cisoka, RT.02/RW.01
                    <br />
                    Kec. Sukamaju, Kabupaten Bogor
                    <br />
                    Jawa Barat, Indonesia 16810
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="p-6 bg-light rounded-lg shadow-md flex items-start">
                <div className="mr-4 text-primary text-2xl">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Telepon</h4>
                  <p className="text-gray-600">
                    +62 812 3456 7890
                    <br />
                    +62 21 8765 4321
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 mb-8">
              <div className="p-6 bg-light rounded-lg shadow-md flex items-start">
                <div className="mr-4 text-primary text-2xl">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Email</h4>
                  <p className="text-gray-600">
                    info@eksporpisang.com
                    <br />
                    sales@eksporpisang.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 light-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12 px-4 mb-10 lg:mb-0">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  Kirim Pesan
                </h3>
                <ContactForm />
              </div>
            </div>

            <div className="w-full lg:w-7/12 px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-2xl font-heading font-semibold mb-6 text-primary">
                  Lokasi Kami
                </h3>
                <div className="h-[400px]">
                  <GoogleMaps className="h-full" />
                </div>

                <div className="mt-6">
                  <h4 className="text-lg font-bold mb-2">Jam Operasional</h4>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Senin - Jumat</span>
                        <span className="text-gray-600">08.00 - 17.00</span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Sabtu</span>
                        <span className="text-gray-600">08.00 - 12.00</span>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Minggu</span>
                        <span className="text-gray-600">Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Pertanyaan Umum"
            subtitle="Berikut beberapa pertanyaan yang sering ditanyakan mengenai produk kami."
          />

          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">
                Apa saja dokumen yang diperlukan untuk ekspor?
              </h4>
              <p className="text-gray-600">
                Dokumen yang diperlukan untuk ekspor daun pisang meliputi
                sertifikat kesehatan tanaman, sertifikat asal, faktur komersial,
                packing list, dan dokumen pengiriman. Kami akan membantu
                menyiapkan semua dokumen yang diperlukan.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">
                Berapa lama waktu pengiriman?
              </h4>
              <p className="text-gray-600">
                Waktu pengiriman bervariasi tergantung negara tujuan, biasanya
                berkisar antara 7-21 hari untuk pengiriman laut dan 3-5 hari
                untuk pengiriman udara. Kami akan memberikan estimasi yang lebih
                akurat setelah konfirmasi pesanan.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">
                Apakah ada minimum order?
              </h4>
              <p className="text-gray-600">
                Ya, kami memiliki jumlah pesanan minimum untuk memastikan
                efisiensi pengiriman. Minimum order biasanya 100 kg untuk
                pengiriman domestik dan 500 kg untuk ekspor internasional.
                Namun, kami bisa membahas lebih lanjut untuk kebutuhan khusus.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">
                Bagaimana cara menjaga kualitas daun pisang selama pengiriman?
              </h4>
              <p className="text-gray-600">
                Kami menggunakan metode pengemasan khusus dengan pengaturan suhu
                dan kelembaban untuk menjaga kesegaran daun pisang. Untuk produk
                kering, kami memastikan kemasan kedap udara untuk mencegah
                kerusakan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
