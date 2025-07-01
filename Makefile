# Caravela AI Landing Page Makefile
# A comprehensive build system for the React + TypeScript + Vite project

# Variables
NODE_VERSION := 18
PACKAGE_MANAGER := npm
PROJECT_NAME := caravela-ai-landingpage
DEV_PORT := 8080
BUILD_DIR := dist

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
YELLOW := \033[0;33m
BLUE := \033[0;34m
PURPLE := \033[0;35m
CYAN := \033[0;36m
WHITE := \033[0;37m
RESET := \033[0m

# Default target
.DEFAULT_GOAL := help

# Help target
.PHONY: help
help: ## Show this help message
	@echo "$(CYAN)Caravela AI Landing Page - Available Commands:$(RESET)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "$(GREEN)%-20s$(RESET) %s\n", $$1, $$2}'
	@echo ""
	@echo "$(YELLOW)Package Manager:$(RESET) $(PACKAGE_MANAGER)"
	@echo "$(YELLOW)Node Version:$(RESET) $(NODE_VERSION)"
	@echo "$(YELLOW)Dev Port:$(RESET) $(DEV_PORT)"

# Installation targets
.PHONY: install install-npm install-pnpm install-bun
install: ## Install dependencies using the default package manager
	@echo "$(BLUE)Installing dependencies with $(PACKAGE_MANAGER)...$(RESET)"
	@$(PACKAGE_MANAGER) install

install-npm: ## Install dependencies using npm
	@echo "$(BLUE)Installing dependencies with npm...$(RESET)"
	@npm install

install-pnpm: ## Install dependencies using pnpm
	@echo "$(BLUE)Installing dependencies with pnpm...$(RESET)"
	@pnpm install

install-bun: ## Install dependencies using bun
	@echo "$(BLUE)Installing dependencies with bun...$(RESET)"
	@bun install

# Development targets
.PHONY: dev dev-npm dev-pnpm dev-bun
dev: ## Start development server
	@echo "$(GREEN)Starting development server on port $(DEV_PORT)...$(RESET)"
	@$(PACKAGE_MANAGER) run dev

dev-npm: ## Start development server with npm
	@echo "$(GREEN)Starting development server with npm on port $(DEV_PORT)...$(RESET)"
	@npm run dev

dev-pnpm: ## Start development server with pnpm
	@echo "$(GREEN)Starting development server with pnpm on port $(DEV_PORT)...$(RESET)"
	@pnpm run dev

dev-bun: ## Start development server with bun
	@echo "$(GREEN)Starting development server with bun on port $(DEV_PORT)...$(RESET)"
	@bun run dev

# Build targets
.PHONY: build build-prod build-dev
build: ## Build for production
	@echo "$(PURPLE)Building for production...$(RESET)"
	@$(PACKAGE_MANAGER) run build

build-prod: ## Build for production (alias for build)
	@$(MAKE) build

build-dev: ## Build for development
	@echo "$(PURPLE)Building for development...$(RESET)"
	@$(PACKAGE_MANAGER) run build:dev

# Linting and code quality
.PHONY: lint lint-fix
lint: ## Run ESLint
	@echo "$(YELLOW)Running ESLint...$(RESET)"
	@$(PACKAGE_MANAGER) run lint

lint-fix: ## Run ESLint with auto-fix
	@echo "$(YELLOW)Running ESLint with auto-fix...$(RESET)"
	@$(PACKAGE_MANAGER) run lint -- --fix

# Preview targets
.PHONY: preview preview-npm preview-pnpm preview-bun
preview: ## Preview production build
	@echo "$(CYAN)Starting preview server...$(RESET)"
	@$(PACKAGE_MANAGER) run preview

preview-npm: ## Preview production build with npm
	@echo "$(CYAN)Starting preview server with npm...$(RESET)"
	@npm run preview

preview-pnpm: ## Preview production build with pnpm
	@echo "$(CYAN)Starting preview server with pnpm...$(RESET)"
	@pnpm run preview

preview-bun: ## Preview production build with bun
	@echo "$(CYAN)Starting preview server with bun...$(RESET)"
	@bun run preview

# Cleanup targets
.PHONY: clean clean-all
clean: ## Clean build directory
	@echo "$(RED)Cleaning build directory...$(RESET)"
	@rm -rf $(BUILD_DIR)
	@rm -rf .vite

clean-all: ## Clean all generated files
	@echo "$(RED)Cleaning all generated files...$(RESET)"
	@rm -rf $(BUILD_DIR)
	@rm -rf .vite
	@rm -rf node_modules
	@rm -rf .cache

# Type checking
.PHONY: type-check
type-check: ## Run TypeScript type checking
	@echo "$(BLUE)Running TypeScript type checking...$(RESET)"
	@npx tsc --noEmit

# Dependency management
.PHONY: update-deps update-deps-npm update-deps-pnpm update-deps-bun
update-deps: ## Update dependencies
	@echo "$(YELLOW)Updating dependencies...$(RESET)"
	@$(PACKAGE_MANAGER) update

update-deps-npm: ## Update dependencies with npm
	@echo "$(YELLOW)Updating dependencies with npm...$(RESET)"
	@npm update

update-deps-pnpm: ## Update dependencies with pnpm
	@echo "$(YELLOW)Updating dependencies with pnpm...$(RESET)"
	@pnpm update

update-deps-bun: ## Update dependencies with bun
	@echo "$(YELLOW)Updating dependencies with bun...$(RESET)"
	@bun update

# Development workflow
.PHONY: setup dev-setup
setup: ## Initial project setup
	@echo "$(GREEN)Setting up Caravela AI Landing Page...$(RESET)"
	@$(MAKE) install
	@echo "$(GREEN)Setup complete! Run 'make dev' to start development.$(RESET)"

dev-setup: ## Setup and start development
	@echo "$(GREEN)Setting up and starting development...$(RESET)"
	@$(MAKE) setup
	@$(MAKE) dev

# Production workflow
.PHONY: production-build
production-build: ## Full production build process
	@echo "$(PURPLE)Starting production build process...$(RESET)"
	@$(MAKE) clean
	@$(MAKE) install
	@$(MAKE) lint
	@$(MAKE) type-check
	@$(MAKE) build
	@echo "$(GREEN)Production build complete!$(RESET)"

# Git workflow helpers
.PHONY: git-status git-add git-commit git-push
git-status: ## Show git status
	@echo "$(BLUE)Git status:$(RESET)"
	@git status

git-add: ## Add all changes to git
	@echo "$(GREEN)Adding all changes to git...$(RESET)"
	@git add .

git-commit: ## Commit changes (use MESSAGE="your message")
	@echo "$(GREEN)Committing changes...$(RESET)"
	@git commit -m "$(MESSAGE)"

git-push: ## Push changes to remote
	@echo "$(GREEN)Pushing changes to remote...$(RESET)"
	@git push

# Quick commit and push
.PHONY: quick-commit
quick-commit: ## Quick commit and push (use MESSAGE="your message")
	@$(MAKE) git-add
	@$(MAKE) git-commit
	@$(MAKE) git-push

# Node version check
.PHONY: check-node
check-node: ## Check if correct Node.js version is installed
	@echo "$(BLUE)Checking Node.js version...$(RESET)"
	@node --version
	@echo "$(GREEN)Node.js version check complete!$(RESET)"

# Package manager detection
.PHONY: detect-pm
detect-pm: ## Detect available package managers
	@echo "$(CYAN)Detecting available package managers:$(RESET)"
	@echo -n "npm: " && (command -v npm >/dev/null 2>&1 && echo "$(GREEN)✓$(RESET)" || echo "$(RED)✗$(RESET)")
	@echo -n "pnpm: " && (command -v pnpm >/dev/null 2>&1 && echo "$(GREEN)✓$(RESET)" || echo "$(RED)✗$(RESET)")
	@echo -n "bun: " && (command -v bun >/dev/null 2>&1 && echo "$(GREEN)✓$(RESET)" || echo "$(RED)✗$(RESET)")

# Project info
.PHONY: info
info: ## Show project information
	@echo "$(CYAN)Caravela AI Landing Page - Project Information:$(RESET)"
	@echo "$(YELLOW)Project Name:$(RESET) $(PROJECT_NAME)"
	@echo "$(YELLOW)Package Manager:$(RESET) $(PACKAGE_MANAGER)"
	@echo "$(YELLOW)Development Port:$(RESET) $(DEV_PORT)"
	@echo "$(YELLOW)Build Directory:$(RESET) $(BUILD_DIR)"
	@echo "$(YELLOW)Node Version:$(RESET) $(NODE_VERSION)"
	@echo ""
	@echo "$(BLUE)Available Scripts:$(RESET)"
	@$(PACKAGE_MANAGER) run --silent

# Watch mode for development
.PHONY: watch
watch: ## Start development server in watch mode (alias for dev)
	@$(MAKE) dev

# Quick development start
.PHONY: start
start: ## Quick start development (alias for dev)
	@$(MAKE) dev

# Quick build and preview
.PHONY: build-preview
build-preview: ## Build and preview in one command
	@$(MAKE) build
	@$(MAKE) preview 