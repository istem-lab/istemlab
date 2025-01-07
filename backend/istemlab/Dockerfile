# Use the official Python base image
FROM python:3.10-slim

# Set environment variables to prevent Python from writing .pyc files and enable buffered logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory inside the container
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libpq-dev gcc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application code to the container
COPY . .

# Expose the port Django runs on (default: 5000)
EXPOSE 5000

# Collect static files
RUN python manage.py collectstatic --noinput

# Command to run the Django server (replace with your WSGI server in production, e.g., gunicorn)
CMD ["gunicorn", "--bind", "0.0.0.0:5000", "myproject.wsgi:application"]
