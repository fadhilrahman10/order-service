# Gunakan image Node.js sebagai base image
FROM node:16

# Set working directory di dalam container
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy seluruh source code ke dalam container
COPY . .

# Expose port yang akan digunakan oleh service
EXPOSE 3000

# Jalankan aplikasi
#CMD ["npm", "run", "start"]
CMD [ "npm", "run", "start:dev" ]
