---
sidebar_position: 5
---

# Troubleshooting Guide

This guide provides solutions for common issues you might encounter when running the MAESTRE platform, along with diagnostic steps and remediation procedures.

## Diagnosing Issues

### System Health Check

When experiencing problems, start with a basic system health check:

```bash
# Check system resources
top

# Check disk space
df -h

# Check service status
systemctl status maestre-backend
systemctl status maestre-frontend
systemctl status postgresql
systemctl status nginx
```

### Log Analysis

Logs are your primary diagnostic tool. Check these key log files:

```bash
# Database logs
tail -n 200 /var/log/postgresql/postgresql.log

# Web server logs
tail -n 200 /var/log/nginx/error.log
```

### Database Connectivity

Verify database connectivity:

```bash
# Connect to PostgreSQL
psql -U maestre_user -d maestre -c "SELECT 1;"
```

## Common Issues and Solutions

### Installation Problems

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Missing dependencies | Error messages during installation | Install required packages: `apt-get install python3-dev libpq-dev` |
| Database connection failure | "Could not connect to database" errors | Verify PostgreSQL is running and credentials are correct |
| Permission issues | "Permission denied" errors | Check file and directory permissions, especially for media and log directories |

### Login and Authentication Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Cannot log in as admin | Login attempts fail | Reset admin password using Django management command: `python manage.py changepassword admin` |

### Performance Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Slow page loads | Pages take >3 seconds to load | Check database query performance, optimize slow queries, add indexes |
| High CPU usage | Server running at >80% CPU | Identify resource-intensive processes, scale up resources if needed |
| Memory leaks | Increasing memory usage over time | Restart services periodically, investigate application code for memory leaks |

### Database Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| Database connection pool exhaustion | "Too many connections" errors | Adjust max_connections in PostgreSQL config, optimize connection pooling |
| Slow queries | Specific operations are slow | Add indexes, optimize queries, run EXPLAIN ANALYZE to identify bottlenecks |
| Database corruption | Unexpected errors, data inconsistency | Run database integrity checks, restore from backup if necessary |

### File Storage Issues

| Issue | Symptoms | Solution |
|-------|----------|----------|
| File upload failures | Error messages during upload | Check directory permissions, verify disk space availability |
| Missing media files | Broken images or file links | Verify media directory path and web server configuration |
| Backup failures | Backup jobs failing or incomplete | Check backup script permissions, verify sufficient disk space |

## Advanced Troubleshooting

### Backend Debugging

Enable debug mode temporarily for detailed error information:

1. Edit the `.env` file:
   ```
   DEBUG=True
   ```

2. Restart the backend service:
   ```bash
   systemctl restart gunicorn
   ```

3. **Important**: Disable debug mode after troubleshooting:
   ```
   DEBUG=False
   ```

### Database Troubleshooting

#### Connection Issues

Verify PostgreSQL configuration in `pg_hba.conf`:

```bash
# View configuration
cat /etc/postgresql/12/main/pg_hba.conf

# Ensure it contains appropriate entries like:
# host    maestre    maestre_user    127.0.0.1/32    md5
```

#### Database Performance

Identify slow queries:

```bash
# Enable query logging temporarily
psql -U postgres -c "ALTER SYSTEM SET log_min_duration_statement = 200;" # Log queries taking >200ms
psql -U postgres -c "SELECT pg_reload_conf();"

# Check the logs for slow queries
tail -f /var/log/postgresql/postgresql.log

# Disable when finished
psql -U postgres -c "ALTER SYSTEM RESET log_min_duration_statement;"
psql -U postgres -c "SELECT pg_reload_conf();"
```

### Network Troubleshooting

#### API Connection Issues

Test API connectivity:

```bash
# Test with authentication
curl -H "Authorization: Token YOUR_API_TOKEN" http://localhost:8000/api/users/
```

#### Web Server Issues

Verify Nginx configuration:

```bash
# Test configuration syntax
nginx -t

# Check for correct proxy settings in your site configuration
cat /etc/nginx/sites-available/backend
```

## Recovery Procedures

### Service Recovery

Restart services in the correct order:

```bash
# Restart database first
systemctl restart postgresql

# Then backend
systemctl restart gunicorn

# Finally web server
systemctl restart nginx
```

### Database Recovery

Restore from backup:

```bash
# Stop services that use the database
systemctl stop gunicorn

# Restore database
pg_restore -U postgres -d maestre -c /path/to/backups/maestre_db_backup.dump

# Start services
systemctl start gunicorn
```

### Application Reset

In extreme cases, reset the application state:

```bash
# Navigate to backend directory
cd /path/to/maestre/backend

# Activate virtual environment
source ../venv/bin/activate

# Flush the database (caution: this deletes all data)
python manage.py flush

# Apply migrations
python manage.py migrate

# Create a new superuser
python manage.py createsuperuser
```

## Preventive Measures

### Monitoring Setup

Implement proactive monitoring to detect issues before they affect users:

1. Set up system monitoring with Prometheus and Grafana
2. Configure alerts for critical metrics (CPU, memory, disk space)
3. Implement application health checks

### Regular Maintenance

Establish a regular maintenance schedule:

1. Weekly database optimization
2. Monthly security updates
3. Quarterly full system review

## Getting Help

If you cannot resolve an issue using this guide:

1. Check the [GitHub Issues](https://github.com/MAESTRE-TFG/maestre/issues) for similar problems
2. Search the [Documentation](https://documentation-maestre.netlify.app/) for additional information
3. Submit a detailed issue report including:
   - Error messages and logs
   - Steps to reproduce the issue
   - System configuration details

For urgent production issues, contact the development team through the support channels listed in your service agreement.

## Troubleshooting Checklist

Use this checklist when addressing system issues:

- [ ] Check system resources (CPU, memory, disk space)
- [ ] Review application logs for error messages
- [ ] Verify all services are running
- [ ] Test database connectivity
- [ ] Check network connectivity and firewall settings
- [ ] Verify configuration files for errors
- [ ] Test with a simple use case to isolate the issue
- [ ] Apply the appropriate solution from this guide
- [ ] Document the issue and solution for future reference