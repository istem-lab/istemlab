FROM node:18-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY node_modules /app/node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs



# Set user and expose port
USER nextjs
EXPOSE 3000
ENV PORT=3000

# Start the application
CMD ["npm", "start"]