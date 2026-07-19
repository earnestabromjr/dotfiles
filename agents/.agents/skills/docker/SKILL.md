---
name: docker-expert
description: Expert in Docker containerization, Docker Compose orchestration, and homelab deployment. Use when the user asks about Dockerfiles, docker-compose.yml, container management, networking, volumes, or deploying services on their homelab Proxmox host at 192.168.2.86.
---

# Docker & Docker Compose Expert

Expert guidance on Docker containerization and Docker Compose for homelab deployments on Proxmox (192.168.2.86).

## Core Principles

- Always use specific image tags, never `latest` in production
- Prefer `restart: unless-stopped` for homelab services
- Use named volumes for persistent data
- Follow least-privilege: drop capabilities, run as non-root when possible
- Use health checks for service dependency management

## Dockerfile Best Practices

- Use multi-stage builds to minimize image size
- Order layers from least to most frequently changing
- Use `.dockerignore` to exclude unnecessary files
- Pin package versions in `RUN` commands
- Use `COPY --chown` instead of separate `chown` commands

## Docker Compose Conventions

- Always include `version` field for clarity (or omit for modern Compose)
- Use `depends_on` with `condition: service_healthy` over simple ordering
- Define networks explicitly; avoid relying on default bridge
- Use `.env` files for secrets and environment-specific values, never hardcode
- Label services with `com.homelab.*` for organization

## Homelab Patterns (Proxmox @ 192.168.2.86)

### Network Architecture

```yaml
networks:
  homelab:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
```

- Use dedicated subnets per stack to avoid IP conflicts
- Expose only necessary ports; prefer Traefik/nginx reverse proxy
- For LAN access, use `host` network mode sparingly; prefer explicit port mappings

### Volume Strategy

```yaml
volumes:
  app_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /mnt/pve/data/appdata/service-name
```

- Store persistent data on Proxmox storage, not container layer
- Use bind mounts with explicit paths for critical data
- Back up volumes via Proxmox backup or `docker volume` export

### Common Homelab Stack Pattern

```yaml
services:
  app:
    image: app:1.2.3
    container_name: app
    restart: unless-stopped
    environment:
      - TZ=America/New_York
    volumes:
      - app_data:/data
    networks:
      - homelab
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 5s
      retries: 3
    labels:
      - "com.homelab.service=app"
      - "com.homelab.environment=production"

volumes:
  app_data:

networks:
  homelab:
    external: true
```

### Proxmox Integration

- Store compose files in `/opt/docker/stacks/<service>/` on the Proxmox host
- Use `docker compose -f /opt/docker/stacks/<service>/docker-compose.yml up -d`
- Monitor with `docker stats`, `docker logs`, or Portainer
- For Proxmox VM vs container: prefer Docker inside a VM for isolation, LXC for lightweight workloads
- Mount Proxmox ZFS datasets into containers for snapshots and backups

## Security Checklist

- Never mount Docker socket (`/var/run/docker.sock`) unless absolutely required
- Use `read_only: true` for filesystem-sensitive containers
- Set `security_opt: [no-new-privileges:true]` on all services
- Scan images with `docker scout cves` or Trivy
- Rotate secrets via environment variables, never baked into images

## Debugging Commands

```bash
# Inspect running containers
docker ps -a --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

# View logs
docker logs -f --tail 100 <container>

# Enter container for debugging
docker exec -it <container> /bin/sh

# Check resource usage
docker stats --no-stream

# Clean up
docker system prune -af --volumes
```

## Compose Commands

```bash
# Start stack
docker compose up -d

# Rebuild after changes
docker compose up -d --build

# View logs
docker compose logs -f <service>

# Scale a service
docker compose up -d --scale <service>=3

# Stop and remove
docker compose down -v  # -v removes volumes
```
