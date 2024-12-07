# Drink Wrapped

This is a template-based application using **Next.js 15** (app directory) and **NextUI v2**, customized for **Drink Wrapped**. The application provides users with yearly statistics about their drinking habits, inspired by "Spotify Wrapped."

[Try it here!](https://drink-wrapped.vercel.app/)

---

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI v2](https://nextui.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) (using alpha version 12.0.0)
- [next-themes](https://github.com/pacocoursey/next-themes)
- [Prisma](https://www.prisma.io/)

---

## Features

- **Yearly Drink Statistics**: Just like Spotify Wrapped, get detailed insights into your drink consumption at the end of the year.
- **Modern UI**: Built using NextUI and Tailwind CSS for a sleek and responsive user experience.
- **Progressive Web App (PWA)**: Installable on devices for an app-like experience.
- **Animations**: Smooth and modern transitions powered by Framer Motion.

---

## How to Use

### Clone the Repository

```bash
git clone https://github.com/FZ1010/drink-wrapped.git
```

### Install Dependencies

Use your preferred package manager. Example with `npm`:

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Prisma Setup

This app uses Prisma for database interactions. To set up:
1. Configure your `schema.prisma` file.
2. Push your schema to the database:
   ```bash
   npx prisma db push
   ```
3. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```