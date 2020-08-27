FROM node
COPY package.json .
COPY package-lock.json .
RUN npm i express body-parser aws-sdk --save
COPY main.js .
RUN cat package.json
CMD ["npm", "start"]
