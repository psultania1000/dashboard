FROM --platform=linux/amd64 node:18-alpine

WORKDIR /app

COPY package*.json ./


# Remove any existing node_modules or package-lock.json
RUN rm -rf node_modules package-lock.json

# Install dependencies with specific platform
RUN npm install --platform=linux --arch=x64


COPY . .

EXPOSE 8080

# CMD ["npm", "run", "dev"]
CMD ["npm", "run", "start"]