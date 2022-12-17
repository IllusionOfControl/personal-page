FROM node:14 as builder

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx:stable-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder ./app/build /public

EXPOSE 3000
