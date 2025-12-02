# DevSecOps Demo Pipeline

A demonstration of a complete DevSecOps pipeline with security scanning, automated testing, and containerization.

## Features

- Express.js REST API
- Automated testing with Jest
- Security scanning with Trivy
- Dependency vulnerability checking
- Docker containerization
- GitHub Actions CI/CD

## Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint

# Start server
npm start

# Build Docker image
docker build -t devsecops-demo .

# Run Docker container
docker run -p 8080:8080 devsecops-demo
```

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check

## Security

This project implements multiple layers of security scanning:

- **Trivy**: Filesystem and container image scanning
- **Dependency-Check**: Third-party dependency vulnerabilities
- **SonarQube**: Static code analysis (to be configured)
