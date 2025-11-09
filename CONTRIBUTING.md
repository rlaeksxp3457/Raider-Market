# Contributing to Raider Market

Thank you for your interest in contributing to Raider Market! This document provides guidelines and instructions for contributing to the project.

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn
- Docker and Docker Compose (for containerized development)
- Git

### Setting Up Development Environment

1. **Fork and Clone**
   ```bash
   git clone https://github.com/your-username/Raider-Market.git
   cd Raider-Market
   ```

2. **Install Dependencies**
   ```bash
   # Using make
   make install

   # Or manually
   cd frontend && npm install
   cd ../backend && npm install
   ```

3. **Set Up Environment Variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   
   # Frontend (optional)
   cp frontend/.env.example frontend/.env
   ```

4. **Start Development Services**
   ```bash
   # Using Docker Compose (recommended)
   make dev
   
   # Or manually start each service
   # Terminal 1: Start database
   docker-compose up mysql
   
   # Terminal 2: Start backend
   cd backend && npm run start:dev
   
   # Terminal 3: Start frontend
   cd frontend && npm run dev
   ```

## 📝 Development Workflow

### Branch Naming Convention

- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications

Example: `feature/user-authentication`

### Commit Messages

Follow the Conventional Commits specification:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Test updates
- `chore:` - Build process or auxiliary tool changes

Example: `feat: add user authentication endpoint`

## 🧪 Testing

### Running Tests

```bash
# Backend unit tests
cd backend && npm run test

# Backend e2e tests
cd backend && npm run test:e2e

# Backend test coverage
cd backend && npm run test:cov

# Frontend tests (when available)
cd frontend && npm run test
```

### Writing Tests

- Write unit tests for all new backend services and controllers
- Ensure all tests pass before submitting a PR
- Aim for at least 80% code coverage for new code

## 🎨 Code Style

### Linting

```bash
# Frontend
cd frontend && npm run lint

# Backend
cd backend && npm run lint
```

### Formatting

- Frontend: ESLint with React and TypeScript rules
- Backend: ESLint with NestJS and TypeScript rules
- Use Prettier for consistent formatting (configured in both projects)

### TypeScript

- Use strict mode
- Avoid `any` types when possible
- Define proper interfaces and types
- Use meaningful variable and function names

## 🗄️ Database

### Prisma Migrations

```bash
# Create a new migration
cd backend && npx prisma migrate dev --name your_migration_name

# Apply migrations
cd backend && npx prisma migrate deploy

# Generate Prisma client
cd backend && npx prisma generate

# Open Prisma Studio
cd backend && npx prisma studio
```

### Schema Changes

1. Edit `backend/prisma/schema.prisma`
2. Create a migration: `npx prisma migrate dev`
3. Test the migration
4. Commit both schema and migration files

## 🐳 Docker

### Building Images

```bash
# Build all services
make build

# Build specific service
docker-compose build backend
docker-compose build frontend
```

### Best Practices

- Keep Dockerfiles lean
- Use multi-stage builds
- Don't include unnecessary files (use .dockerignore)
- Test Docker builds locally before pushing

## 📦 Pull Request Process

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, documented code
   - Follow the code style guide
   - Add tests for new functionality

3. **Test Locally**
   ```bash
   # Run linting
   cd frontend && npm run lint
   cd backend && npm run lint
   
   # Run tests
   cd backend && npm run test
   
   # Build to ensure no errors
   cd frontend && npm run build
   cd backend && npm run build
   ```

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: description of your changes"
   ```

5. **Push to GitHub**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open Pull Request**
   - Provide a clear description of the changes
   - Reference any related issues
   - Ensure CI checks pass
   - Request review from maintainers

## 🔍 Code Review

### For Authors

- Respond to feedback constructively
- Make requested changes promptly
- Keep PRs focused and reasonably sized
- Update documentation as needed

### For Reviewers

- Be respectful and constructive
- Focus on code quality and maintainability
- Check for security issues
- Verify tests are adequate

## 🛠️ Tech Stack Knowledge

### Frontend

- **React 19**: Component lifecycle, hooks, context
- **TypeScript**: Types, interfaces, generics
- **Vite**: Build configuration, plugins
- **Tailwind CSS**: Utility classes, responsive design
- **shadcn/ui**: Component library usage
- **React Query**: Data fetching, caching, mutations

### Backend

- **NestJS**: Modules, controllers, services, decorators
- **Prisma**: Schema definition, migrations, queries
- **TypeScript**: Advanced types, decorators
- **MySQL**: Database design, indexing

### DevOps

- **Docker**: Container creation, multi-stage builds
- **Docker Compose**: Service orchestration
- **Nginx**: Reverse proxy configuration

## 📚 Resources

- [React Documentation](https://react.dev)
- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Community

- Be respectful and inclusive
- Help others when you can
- Share knowledge and best practices
- Follow the code of conduct

## 📄 License

By contributing to Raider Market, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Raider Market! 🎮
