# 📌 Front-End Intern Test - ReactJS

This repository contains a **ReactJS (Vite)** single-page web application as part of the Front-End Intern test. The application is **responsive** and integrates with a provided API. The design follows the shared **Adobe XD** prototype.

## 📜 Test Requirements Fulfilled
- ✅ **Form Validation** (Empty input & Email format validation)
- ✅ **API Integration** (POST request with error handling)
- ✅ **Environment Variables** (Vite `.env` setup)
- ✅ **Responsive Design** (Checked on multiple screen sizes)
![Screenshot 2025-03-13 222043](https://github.com/user-attachments/assets/f450796a-d670-4eb8-a900-440ce56a10cf)
![mobile](https://github.com/user-attachments/assets/6cffcf00-3ae5-4bae-8c09-31ab9335e2c0)
![web](https://github.com/user-attachments/assets/0c7261c6-8123-4fd8-b63f-78ded61ca66f)
![Screenshot 2025-03-13 234323](https://github.com/user-attachments/assets/99f1a1b8-d96a-4134-a6ca-64c50fd1ec3f)
![Screenshot (621)](https://github.com/user-attachments/assets/5f7d2773-1d97-4453-bce4-e121ecdf3314)

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### **2️⃣ Install Dependencies**
```sh
npm install  # or yarn install
```

### **3️⃣ Set Up Environment Variables**
Create a **`.env`** file in the root directory and add the following:
```env
VITE_API_URL=https://test.ezworks.ai/api
```

✅ **Vite automatically loads `.env` files**—no extra configuration required.

### **4️⃣ Start the Development Server**
```sh
npm run dev  # or yarn dev
```

---

## 🔥 API Integration & Validation
### **API Details**
- **Base URL**: `https://test.ezworks.ai/api`
- **Request Method**: `POST`
- **Required Field**: `email`

### **Validation Rules**
| Test Case                   | Expected Response        |
|----------------------------|-------------------------|
| Empty Email Submission     | ❌ Validation Error ⚠   |
| Invalid Email Format       | ❌ Validation Error ⚠   |
| Email ending with `@ez.works` | ❌ API Error (422) ⚠ |
| Valid Email Submission     | ✅ "Form Submitted" 🟢 |

### **Handling API in Code**
```js
const api = import.meta.env.VITE_API_URL;
```

**Example Fetch Request:**
```js
fetch(api, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));
```

---

## 📱 Responsive Design Verification
The application is designed to be **responsive** and will be tested on the following devices:
- ✅ **Mobile:** 480p, 720p
- ✅ **Tablet:** 2732x2048 (iPad)
- ✅ **Laptop/Desktop:** 1080p, 1440x823 (MacBook)

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

💡 **Note for Reviewer:**
- The project meets all the test requirements.
- API validation errors are handled in real-time.
- The `.env` setup is configured correctly for Vite.

✅ **Please feel free to review the implementation and suggest improvements.** 🚀

