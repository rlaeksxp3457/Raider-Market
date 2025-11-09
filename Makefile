.PHONY: help build up down logs clean dev install test

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build all Docker images
	docker-compose build

up: ## Start all services in production mode
	docker-compose up -d

down: ## Stop all services
	docker-compose down

logs: ## View logs from all services
	docker-compose logs -f

clean: ## Remove all containers, volumes, and images
	docker-compose down -v
	docker system prune -f

dev: ## Start services in development mode
	docker-compose -f docker-compose.dev.yml up

dev-down: ## Stop development services
	docker-compose -f docker-compose.dev.yml down

install: ## Install dependencies for frontend and backend
	cd frontend && npm install
	cd backend && npm install

test: ## Run tests
	cd backend && npm run test
	cd frontend && npm run test

migrate: ## Run database migrations
	cd backend && npx prisma migrate dev

studio: ## Open Prisma Studio
	cd backend && npx prisma studio

rebuild: ## Rebuild and restart all services
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d
