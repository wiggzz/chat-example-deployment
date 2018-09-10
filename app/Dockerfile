FROM node:alpine as base
COPY package.json yarn.lock ./
RUN yarn install
COPY *.js ./
COPY src/ src/
RUN yarn build

FROM node:alpine
ENV NODE_ENV production
COPY package.json yarn.lock ./
RUN yarn install
COPY --from=base dist/ ./dist/
CMD node dist/server.js
