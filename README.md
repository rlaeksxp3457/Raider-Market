# Raider Market

Arc Raiders Exchange - A full-stack marketplace application built with modern web technologies.

## 🏗️ Technology Stack

### Frontend
- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **shadcn/ui** - Beautiful and accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Powerful data synchronization

### Backend
- **NestJS** - Progressive Node.js framework
- **Prisma** - Next-generation ORM
- **MySQL 8.0** - Relational database
- **TypeScript** - Type-safe development

### Infrastructure
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - High-performance web server & reverse proxy

## 📁 Project Structure

```
raider-market/
├── frontend/           # React + TypeScript application
│   ├── src/
│   │   ├── components/ # UI components
│   │   ├── lib/       # Utility functions
│   │   ├── App.tsx    # Main application component
│   │   └── main.tsx   # Application entry point
│   ├── Dockerfile     # Frontend container configuration
│   └── nginx.conf     # Nginx reverse proxy configuration
│
├── backend/           # NestJS API server
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── prisma.service.ts
│   ├── prisma/
│   │   └── schema.prisma
│   └── Dockerfile     # Backend container configuration
│
└── docker-compose.yml # Multi-container orchestration
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 20+ (for local development)
- npm or yarn

### Running with Docker Compose (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/rlaeksxp3457/Raider-Market.git
   cd Raider-Market
   ```

2. **Start all services**
   ```bash
   docker-compose up -d
   ```

   This will start:
   - MySQL database on port 3306
   - Backend API on port 3000
   - Frontend application on port 80

3. **Access the application**
   - Frontend: http://localhost
   - Backend API: http://localhost:3000
   - Health Check: http://localhost:3000/api/health

4. **Stop all services**
   ```bash
   docker-compose down
   ```

### Local Development

#### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at http://localhost:5173

#### Backend Development

```bash
cd backend
npm install

# Copy environment variables
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Run migrations (requires MySQL to be running)
npx prisma migrate dev

# Start development server
npm run start:dev
```

The backend will be available at http://localhost:3000

## 📝 Database Schema

The application includes sample models for a marketplace:

- **User** - User accounts
- **Listing** - Marketplace listings

To modify the schema, edit `backend/prisma/schema.prisma` and run:

```bash
cd backend
npx prisma migrate dev --name your_migration_name
```

## 🐳 Docker Commands

```bash
# Build and start all services
docker-compose up --build

# Start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down

# Remove all data (including database)
docker-compose down -v

# Rebuild specific service
docker-compose up --build backend
```

## 🔧 Environment Variables

### Backend (.env)
```env
DATABASE_URL="mysql://raider:raider123@mysql:3306/raider_market"
NODE_ENV="development"
PORT=3000
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm run test           # Unit tests
npm run test:e2e       # End-to-end tests
npm run test:cov       # Test coverage
```

### Frontend Tests
```bash
cd frontend
npm run test
```

## 🛠️ Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Prisma Studio** - Database management UI

To open Prisma Studio:
```bash
cd backend
npx prisma studio
```

## 📦 Building for Production

### Frontend
```bash
cd frontend
npm run build
```

### Backend
```bash
cd backend
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎮 About Arc Raiders

Raider Market is a marketplace platform for the Arc Raiders game ecosystem.
