# Panduan Deployment Website IndoGreen Export

## Solusi Deployment Vercel

Untuk deployment menggunakan Vercel, Anda bisa menggunakan folder `vercel-ready-app` yang telah disiapkan secara khusus.

### Langkah Deployment di Vercel:

1. Upload folder `vercel-ready-app` ke repository GitHub Anda
2. Buka Vercel.com dan login
3. Klik "Add New Project"
4. Pilih repository GitHub yang berisi folder `vercel-ready-app`
5. Di pengaturan project:
   - Root Directory: `vercel-ready-app`
   - Framework Preset: `Other`
   - Build Command: biarkan kosong
   - Output Directory: `.` (titik)
6. Klik "Deploy"

### Alternatif Deployment di GitHub Pages:

1. Pastikan repository GitHub Anda berisi folder `vercel-ready-app`
2. Buka repository di GitHub
3. Pergi ke Settings > Pages
4. Source: pilih "GitHub Actions"
5. Pilih "Static HTML" workflow
6. Configure workflow dengan path direktori: `vercel-ready-app`
7. Commit file workflow
8. GitHub Pages akan menjalankan workflow dan memproses deployment

## Kenapa Menggunakan Solusi Ini?

Website fullstack React/Express seringkali mengalami masalah saat deployment di platform seperti Vercel. Untuk mengatasi ini, kita membuat versi statis website yang:

1. Tidak memerlukan build step kompleks
2. Tidak memiliki dependensi eksternal
3. Berisi semua elemen penting website
4. Mudah diupdate dan dimodifikasi

## Mengembangkan Website Lebih Lanjut

Setelah berhasil deployment versi statis, Anda dapat melanjutkan dengan:

1. Menambahkan lebih banyak halaman statis
2. Mengintegrasikan dengan API eksternal jika diperlukan
3. Mengembangkan fitur interaktif dengan JavaScript murni