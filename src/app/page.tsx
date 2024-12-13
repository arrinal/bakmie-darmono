'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { MenuViewer } from "@/components/menu-viewer"
import { useState } from "react"

export const dynamic = 'force-dynamic'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Header / Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/bg-bakmie-darmono.jpeg"
            alt="Bakmie Darmono"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Bakmie Darmono</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Bakmie karet otentik, bakmie karet pedas dengan topping paling lengkap di Jakarta
          </p>
          <Button size="lg" className="bg-green-800 hover:bg-green-900" onClick={() => setIsMenuOpen(true)}>
            Lihat Menu
          </Button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/about-bakmie-darmono.jpeg"
                alt="Bakmie Darmono"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Tentang Darmono</h2>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                Pemilik Bakmie Darmono merupakan maniak mie. Setelah mencoba berbagai macam hidangan mie di banyak tempat, kami mencoba mengolahnya dengan resep ala kami.
                </p>
                <p>
                Terinspirasi dari mie lokal, kami menggabungkan berbagai rasa varian ala Indonesia.
                </p>
                <p>
                  Sebagai pioner, Bakmie Darmono menawarkan topping lengkap dengan berbagai macam pilihan, yang kami pastikan belum pernah ditemukan di Jakarta!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Sosial Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Facebook */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>Facebook</CardTitle>
                <CardDescription>
                  {/* Join our community */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full bg-green-800 hover:bg-green-900 text-white">
                  <a
                    href="https://www.facebook.com/bakmiedarmono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Instagram */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>Instagram</CardTitle>
                <CardDescription>
                  {/* Follow us for daily food inspiration */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full bg-green-800 hover:bg-green-900 text-white">
                  <a
                    href="https://instagram.com/bakmiedarmono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* TikTok */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>TikTok</CardTitle>
                <CardDescription>
                  {/* Join our community */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full bg-green-800 hover:bg-green-900 text-white">
                  <a
                    href="https://tiktok.com/@bakmiedarmono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* X */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <CardTitle>X (Twitter)</CardTitle>
                <CardDescription>
                  {/* Watch our behind-the-scenes content */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="secondary" className="w-full bg-green-800 hover:bg-green-900 text-white">
                  <a
                    href="https://x.com/@bakmiedarmono"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Follow Us
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kunjungi Cabang Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Cabang 1 - Kemang */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Cabang 1 - Kemang</CardTitle>
                <CardDescription className="text-green-600 font-semibold">
                  Now Open!
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Alamat</h3>
                  <p className="text-muted-foreground">
                    Jalan Kemang Raya No.16, Mampang Prapatan, Jakarta Selatan
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Jam Operasional</h3>
                  <p className="text-muted-foreground">
                    Setiap Hari: 10:00-01:00 WIB
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pemesanan/Order</h3>
                  <p className="text-muted-foreground">
                    <a href="https://wa.me/6281299992796" target="_blank" rel="noopener noreferrer" className="hover:text-green-800 inline-flex items-center gap-2">
                      <Image
                        src="/wa-icon.png"
                        alt="WhatsApp"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                      +62 812-9999-2796
                    </a>
                  </p>
                </div>
                <Button asChild className="w-full mt-4 bg-green-800 hover:bg-green-900">
                  <a
                    href="https://maps.app.goo.gl/MBfz9Y6Khir9YhRY6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Maps
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Cabang 2 - Blok M */}
            <Card className="hover:shadow-lg transition-shadow bg-gray-50">
              <CardHeader>
                <CardTitle>Cabang 2 - Blok M</CardTitle>
                <CardDescription className="text-amber-600 font-semibold">
                  Coming Soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                Kami sedang menyiapkan cabang selanjutnya! Segera!
                </p>
              </CardContent>
            </Card>

            {/* Cabang 3 - Tebet */}
            <Card className="hover:shadow-lg transition-shadow bg-gray-50">
              <CardHeader>
                <CardTitle>Cabang 3 - Tebet</CardTitle>
                <CardDescription className="text-amber-600 font-semibold">
                  Coming Soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                Kami sedang menyiapkan cabang selanjutnya! Segera!
                </p>
              </CardContent>
            </Card>

            {/* Cabang 4 - PIK */}
            <Card className="hover:shadow-lg transition-shadow bg-gray-50">
              <CardHeader>
                <CardTitle>Cabang 4 - PIK</CardTitle>
                <CardDescription className="text-amber-600 font-semibold">
                  Coming Soon
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                Kami sedang menyiapkan cabang selanjutnya! Segera!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-green-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bakmie Darmono. All rights reserved.
          </p>
          <Button variant="link" asChild className="mt-2">
            <a href="#" className="text-sm">
              Back to Top
            </a>
          </Button>
        </div>
      </footer>

      <MenuViewer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}
