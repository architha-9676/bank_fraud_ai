# 🛡️ FraudGuard AI — Real-Time Fraud Detection System

[![Python](https://img.shields.io/badge/Python-3.12-blue)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-green)](https://flask.palletsprojects.com)
[![XGBoost](https://img.shields.io/badge/XGBoost-99.96%25-orange)](https://xgboost.readthedocs.io)
[![ML](https://img.shields.io/badge/Machine%20Learning-XGBoost-red)](https://xgboost.readthedocs.io)

> Built by **Barre Architha** | AI/ML Intern at **The Entrepreneurship Network (TEN)**
> Malla Reddy Institute of Technology and Science

---

## 📌 Project Overview

**FraudGuard AI** is a complete real-time fraud detection system that monitors financial transactions using machine learning and makes automatic decisions in under **38 milliseconds**.

The system monitors **6 types of Indian financial transactions:**
- 📱 UPI Payments
- 💳 Credit Card
- 🏧 Debit Card
- 💻 Net Banking
- 👛 Wallet Payments
- 🌍 International Transfers

---

## 🎯 Key Features

| Feature | Description |
|---|---|
| 🤖 AI Powered | XGBoost ML model with 99.96% accuracy |
| ⚡ Real Time | Auto monitors transactions every 10 seconds |
| 🔒 Auto Blocking | Critical fraud blocked instantly |
| 📋 Case Management | Every suspicious transaction becomes a trackable case |
| 🚨 Alert System | Real-time alerts for critical fraud |
| 📊 Analytics | Live charts showing fraud patterns |
| 📁 CSV Upload | Analyze real bank statements instantly |
| 🧪 Manual Testing | Test any transaction interactively |

---

## 🧠 Smart Fraud Detection Logic

Our system uses **5 conditions** to detect fraud intelligently:

> ⚠️ **High amount ALONE is NOT fraud.**
> High amount + suspicious condition = FRAUD!

| Condition | Details |
|---|---|
| 📍 Location | Foreign locations (Lagos, Moscow, Beijing etc.) |
| 🏪 Merchant | Suspicious merchants (Unknown, Crypto Exchange etc.) |
| 🕐 Time | Transactions between 12AM - 5AM |
| 💳 Type | High-value International transactions |
| 💰 Amount | Large amounts combined with above conditions |

**Decision Logic:**

```
Confidence >= 90% → 🔒 BLOCKED  (CRITICAL)
Confidence >= 70% → ⚠️ FLAGGED  (HIGH)
Confidence >= 50% → 👁️ MONITORING (MEDIUM)
Confidence <  50% → ✅ APPROVED  (LOW)
```

---

## 📊 ML Model Performance

| Model | Accuracy | Precision | Recall | F1 Score | Status |
|---|---|---|---|---|---|
| **XGBoost** | **99.96%** | **98.5%** | **88.04%** | **93%** | **Active 🏆** |
| Random Forest | 99.95% | 97.2% | 85.55% | 91% | Standby |
| Decision Tree | 99.91% | 92.1% | 74.37% | 82.3% | Standby |
| Logistic Regression | 97.20% | 78.4% | 11.81% | 20.6% | Inactive |

**Dataset:** 284,807 real credit card transactions | 492 fraud cases (0.17%)

---

## 🏗️ Project Structure

```
bank-fraud-system/
│
├── backend/
│   └── app.py              ← Flask API (8 routes)
│
├── dashboard/
│   ├── index.html          ← Home Page
│   ├── live.html           ← Live Monitor
│   ├── cases.html          ← Case Management
│   ├── test.html           ← Test Transaction + CSV Upload
│   ├── analytics.html      ← Analytics & Charts
│   ├── alerts.html         ← Alert Center
│   ├── performance.html    ← Model Performance
│   ├── style.css           ← Shared Styling
│   └── script.js           ← Shared JavaScript
│
├── data/
│   └── creditcard.csv      ← Real dataset (284,807 transactions)
│
├── models/
│   ├── fraud_model.pkl     ← Trained XGBoost model
│   └── scaler.pkl          ← StandardScaler
│
└── README.md
```

---

## 🚀 How to Run

### Prerequisites
```bash
pip install flask flask-cors xgboost scikit-learn pandas numpy faker
```

### Step 1 — Start Backend
```bash
cd backend
python app.py
```

Wait for:
```
Model loaded successfully!
Running on http://127.0.0.1:5000
```

### Step 2 — Open Dashboard
- Open `dashboard/index.html` with **Live Server** in VS Code
- Or open directly in browser

---

## 🌐 API Routes

| Route | Method | Description |
|---|---|---|
| `/stats` | GET | Dashboard metrics |
| `/live` | GET | Live transaction feed |
| `/cases` | GET | All fraud cases |
| `/alerts` | GET | Critical alerts |
| `/predict` | POST | Test single transaction |
| `/performance` | GET | ML model stats |
| `/analytics` | GET | Fraud analytics data |
| `/upload` | POST | Analyze CSV bank statement |

---

## 📱 Dashboard Pages

| Page | Description |
|---|---|
| 🏠 Home | Overview, metrics, how it works |
| 🔴 Live Monitor | Real-time transaction feed |
| 📋 Cases | Automated case management |
| 🧪 Test | Manual entry + CSV upload |
| 📊 Analytics | Charts and fraud insights |
| 🚨 Alerts | Critical fraud alerts |
| 🤖 Model | ML performance comparison |

---

## 🔬 Technical Details

**ML Pipeline:**
1. Load 284,807 real credit card transactions
2. Apply StandardScaler for feature scaling
3. Train-Test split: 80% training / 20% testing
4. Train XGBoost with 100 estimators
5. Threshold tuning: 0.5 → 0.3 (improved F1 from 84% to 88%)
6. Save model as `.pkl` file

**Tech Stack:**
- **Backend:** Python, Flask, Flask-CORS
- **ML:** XGBoost, Scikit-learn, Pandas, NumPy
- **Frontend:** HTML5, CSS3, JavaScript, Chart.js
- **Data:** Faker (Indian names/merchants), Real Kaggle dataset

---

## 📈 Real World Application

This system demonstrates how banks can:
- Monitor millions of transactions in real time
- Make intelligent fraud decisions (not just amount-based)
- Track and manage fraud cases automatically
- Analyze patterns to prevent future fraud
- Process any bank statement format via CSV upload

---

## 👩‍💻 About

**Barre Architha**
AI/ML Intern | The Entrepreneurship Network
Malla Reddy Institute of Technology and Science

> *"Context determines fraud, not just amount."*

---

## 📄 License

This project was built during internship at **The Entrepreneurship Network (TEN)**.
All intellectual property belongs to TEN as per internship agreement.
