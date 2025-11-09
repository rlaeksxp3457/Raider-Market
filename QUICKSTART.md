# 🚀 Quick Start Guide

Get Raider Market up and running in 5 minutes!

## Prerequisites

- Docker & Docker Compose installed
- Git installed
- Ports 80, 3000, and 3306 available

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rlaeksxp3457/Raider-Market.git
cd Raider-Market
```

### 2. Start the Application

**Option A: Using Docker Compose (Recommended)**

```bash
docker-compose up -d
```

**Option B: Using Make**

```bash
make up
```

### 3. Wait for Services to Start

The services will start in the following order:
1. MySQL database (with health checks)
2. Backend API (after database is ready)
3. Frontend (after backend is ready)

Check status:
```bash
docker-compose ps
```

### 4. Access the Application

- **Frontend UI**: http://localhost
- **Backend API**: http://localhost:3000
- **Health Check**: http://localhost:3000/api/health

## Verification

### Check Frontend
Open http://localhost in your browser. You should see:
- Raider Market welcome page
- Technology stack information
- Backend connection status

### Check Backend
Visit http://localhost:3000/api/health. You should see:
```json
{
  "status": "ok",
  "message": "Backend is running",
  "timestamp": "2025-11-09T..."
}
```

### View Logs
```bash
docker-compose logs -f
```

## Stop the Application

```bash
docker-compose down
```

To stop and remove all data:
```bash
docker-compose down -v
```

## Troubleshooting

### Port Already in Use
If you get a port conflict error:

```bash
# Find and stop the process using the port
# For Linux/Mac:
sudo lsof -i :80
sudo lsof -i :3000
sudo lsof -i :3306

# For Windows:
netstat -ano | findstr :80
netstat -ano | findstr :3000
netstat -ano | findstr :3306
```

### Services Not Starting
```bash
# Rebuild images
docker-compose build --no-cache

# Check logs for errors
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mysql
```

### Database Connection Failed
```bash
# Ensure MySQL is healthy
docker-compose ps

# Restart backend
docker-compose restart backend
```

## Local Development

For development with hot-reload:

### 1. Install Dependencies

```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

### 2. Start Development Mode

**Using Docker:**
```bash
docker-compose -f docker-compose.dev.yml up
```

**Or manually:**

Terminal 1 - Database:
```bash
docker-compose up mysql
```

Terminal 2 - Backend:
```bash
cd backend
npm run start:dev
```

Terminal 3 - Frontend:
```bash
cd frontend
npm run dev
```

Access frontend at http://localhost:5173

## Next Steps

1. **Explore the Code**
   - Check `frontend/src/App.tsx` for the UI
   - Check `backend/src/app.controller.ts` for API endpoints

2. **Read Documentation**
   - [README.md](README.md) - Complete documentation
   - [CONTRIBUTING.md](CONTRIBUTING.md) - Development guidelines
   - [SETUP_VERIFICATION.md](SETUP_VERIFICATION.md) - Detailed verification

3. **Customize**
   - Edit `backend/prisma/schema.prisma` for database models
   - Add new API endpoints in backend
   - Create new UI components in frontend

## Useful Commands

```bash
# Start services
make up

# Stop services
make down

# View logs
make logs

# Rebuild everything
make rebuild

# Run tests
make test

# Install dependencies
make install

# Clean up
make clean
```

## Support

For issues or questions:
1. Check the [README.md](README.md)
2. Review [SETUP_VERIFICATION.md](SETUP_VERIFICATION.md)
3. Open an issue on GitHub

---

Happy coding! 🎮
