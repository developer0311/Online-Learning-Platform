# 🎯 **Online Course Dashboard — React Project Overview**

## ⚙️ **Tech Stack**

- **React.js, HTML, CSS** (Frontend Framework)
- **Bootstrap** (Styling & Responsiveness)
- **React Router DOM** (Routing)
- **Local JSON / JS Objects** (Simulated backend data)

---

## 🧩 **App Structure**

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Card.jsx
│   ├── PageLoader.jsx
│   ├── ScrollToTop.jsx
│
├── views/
│   ├── Home.jsx
│   ├── Courses.jsx
│   ├── CourseDetails.jsx
│   ├── MyCourses.jsx
│   ├── Profile.jsx
│
├── App.jsx
└── index.jsx
```

---

## 🌐 **Routes (Pages)**

### 1. **Home (`/`)**

- Landing page with hero banner & tagline.
- Shows featured/popular courses using reusable `Card` components.
- Includes a CTA like “Explore Courses.”

---

### 2. **Courses (`/courses`)**

- Displays all available courses in a responsive grid.
- Each course card includes title, short text, image, and a “View Details” button.
- Data loaded from a local array or JSON file.

---

### 3. **Course Details (`/courses/:id`)**

- Displays detailed info for a selected course.
- Includes course title, image, description, and “Enroll Now” button.
- Use `useParams()` from React Router to load the correct course.

---

### 4. **My Courses (`/my-courses`)**

- Shows all “enrolled” courses.
- Data can be stored in `localStorage` or a React `useState` hook.
- Each card shows course progress and a “Continue Learning” button.

---

### 5. **Profile (`/profile`)**

- Displays user info (mock data).
- Includes editable fields (name, email, profile image — optional).
- Shows total enrolled courses count.

---

### 🧱 **Common Components**

| Component       | Description                                           |
| --------------- | ----------------------------------------------------- |
| **Navbar**      | Navigation links (Home, Courses, My Courses, Profile) |
| **Footer**      | Footer with navigation and contact info               |
| **Card**        | Reusable course display card                          |
| **PageLoader**  | Spinner displayed while switching routes              |
| **ScrollToTop** | Scrolls page to top on route change                   |

---

## 🎁 **Optional Features**

- 🔍 Search / Filter by course title or category
- 🌙 Light & Dark mode toggle
- 💾 Persistent enrollment with `localStorage`

---

## 🚀 **Setup Instructions**

### 1️⃣ **Clone the repository**

```bash
git clone https://github.com/developer0311/Online-Learning-Platform
```

### 2️⃣ **Navigate to project folder**

```bash
cd my-react-app
```

### 3️⃣ **Install dependencies**

```bash
npm install
```

### 4️⃣ **Run the development server**

```bash
npm run dev
```

### 5️⃣ **Open in browser**

Visit the link shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

---

## 🧾 **Deliverables**

- ✅ Fully functional frontend project
- ✅ Source code pushed to GitHub
- ✅ README file (this one)

---

## **🔗 Live Preview**

Hosted on Vercel, click the link to visit the site [https://online-learning-platform-two-tau.vercel.app/](https://online-learning-platform-two-tau.vercel.app/)
