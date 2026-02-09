# Customer Management Dashboard

A modern, responsive customer management application built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.

## 🚀 Features

### Completed
- [x] **Dashboard**: View all customers in a responsive table/card layout.
- [x] **Customer Details**: Dynamic routing (`/customers/[id]`) to view detailed customer info.
- [x] **Search & Filtering**: Real-time client-side filtering by name or email with debounced input.
- [x] **Static Generation**: Utilizing `generateStaticParams` for optimal performance.
- [x] **Responsive Design**: Mobile-friendly UI with adaptive layouts.
- [x] **Error Handling**: Custom 404 and Error boundaries.

### Pending / Future
- [ ] Pagination (currently displays all fetched users).
- [ ] Authentication / Login.
- [ ] Create / Edit Customer functionality.

## 🛠️ Technical Decisions

- **Framework**: **Next.js 15 (App Router)** was chosen for its robust server-side rendering capabilities and simplified routing.
- **Styling**: **Tailwind CSS** with **Shadcn UI** components for a consistent, professional, and accessible design system.
- **Data Fetching**:
  - **Server Components**: Used for initial data fetching to reduce client-side JavaScript.
  - **SSG (`generateStaticParams`)**: Implemented for customer detail pages to ensure fast load times and SEO benefits.
- **State Management**: **React Hooks (`useState`, `useMemo`)** are sufficient for the current scope (search/filtering), avoiding unnecessary complexity from external libraries like Redux.
- **Type Safety**: **TypeScript** is strictly enforced to ensure code reliability and better developer experience.

## 📦 Project Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nithis-coder-08/Customer-Management-task.git
    cd Customer-management-task
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the app:**
    Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Production

To create a production build and start the server:

```bash
npm run build
npm start
```
