---
sidebar_position: 2
---

# Installation Guide

This guide will walk you through the local installation process for MAESTRE. Please note that any possible changes made to the proyect shall not affect the production environment.

## Prerequisites

Before installing MAESTRE, ensure your system meets the following requirements:

### System Requirements
- Operating System: Linux (Ubuntu/Debian recommended), macOS, or Windows with WSL
- CPU: 2+ cores recommended
- RAM: 4GB minimum, 8GB recommended
- Storage: 20GB free space

### Software Dependencies
- Git
- Python 3.8 or higher
- Node.js 16.x or higher
- PostgreSQL 12 or higher
- Nginx or Apache (for production deployments)

## Backend Installation

### 1. Clone the Repository

```bash
git clone https://github.com/MAESTRE-TFG/maestre.git
cd maestre
```

### 2. Set Up Python Environment

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Linux/macOS
source venv/bin/activate
# On Windows
.\venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Configure Database

```bash
# Create PostgreSQL database
psql -U postgres -c "CREATE DATABASE maestre;"
psql -U postgres -c "CREATE USER maestre_user WITH PASSWORD 'your_password';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE maestre TO maestre_user;"
```

### 4. Configure Environment Variables

Create a `.env` file in the backend directory:

```
DEBUG=False
SECRET_KEY=your_secret_key
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'maestre',
        'USER': 'maestre_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

### 5. Run Migrations

```bash
cd backend
python manage.py migrate
```

### 6. Create Superuser

```bash
python manage.py createsuperuser
```

### 7. Start Backend Server

```bash
python manage.py runserver
```

## Frontend Installation

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Build and Start Frontend

```bash
# For development
npm run dev

# For production
npm run build
npm run start
```

## Troubleshooting

### Common Issues

#### Database Connection Errors
- Verify PostgreSQL is running: `sudo systemctl status postgresql`
- Check database credentials in `.env` file
- Ensure the database exists: `psql -U postgres -l`

#### Frontend Build Errors
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

#### Permission Issues
- Check file permissions: `ls -la`
- Ensure the application user has appropriate permissions