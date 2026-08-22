# E-Commerce Platform

A full-stack e-commerce application built with Spring Boot and Next.js. The project includes user authentication, product browsing, cart management, checkout flow, and order processing in a modular monolithic architecture.

## Overview

This repository contains a full-stack e-commerce application built with a Spring Boot backend and a Next.js frontend. It provides a basic online shopping flow for users, including authentication, product browsing, cart management, and order processing.

## Core Features

- Secure authentication and authorization using JWT-based access control
- Product catalog browsing and inventory-aware ordering workflows
- Shopping cart and checkout experience for end users
- Order creation and lifecycle tracking

## Technology Stack

| Layer | Technology |
|---|---|
| Backend | Java 21, Spring Boot, Spring Security, JPA, PostgreSQL |
| Frontend | Next.js 14, React, TypeScript |
| Architecture | Modular monolith with domain-oriented boundaries |

## Architecture

The application follows a modular monolith pattern to balance maintainability, scalability, and implementation speed. The backend exposes a REST API for storefront and administrative workflows, while the frontend consumes these APIs to provide a responsive user-facing experience.

## Project Structure

```text
.
├── backend/
│   ├── src/main/java/
│   ├── src/main/resources/
│   ├── src/test/java/
│   ├── pom.xml
│   └── Dockerfile
├── frontend/
│   ├── app/
│   ├── components/
│   ├── context/
│   ├── lib/
│   ├── package.json
│   └── tsconfig.json
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Java 21+
- Maven or the Maven wrapper included in the repository
- Node.js 18+
- PostgreSQL
- Docker (optional, for container-based local setup)

### Backend Setup

1. Navigate to the backend directory.
2. Configure your database and environment settings.
3. Start the application:

```bash
cd backend
./mvnw spring-boot:run
```

### Frontend Setup

1. Navigate to the frontend directory.
2. Install dependencies:

```bash
cd frontend
npm install
```

3. Start the development server:

```bash
npm run dev
```

