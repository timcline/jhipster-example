# JHipster generated Docker-Compose configuration

## Usage
1. Build the projects: `./build_projects.sh`
2. Launch the infrastructure: `docker-compose up -d`
3. Follow the logs: `docker-compose logs -f`

## Configured Docker services

### Service registry and configuration server:
- [JHipster Registry](http://localhost:8761)

### Applications and dependencies:
- enotaryGateway (gateway application)
- enotaryGateway's mariadb database
- enotaryUAA (uaa application)
- enotaryUAA's mariadb database

### Additional Services:
- smtp server (used as a mock smtp server for local testing)

### Notes:
* The Registry is exposed at http://localhost:8761
* The Gateway (webapp) is exposed at http://localhost:8080
* The mock SMTP server is exposed at http://localhost:8180

