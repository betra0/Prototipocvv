FROM nginx:alpine

# Copia tu sitio estático al directorio que Nginx ya usa
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
