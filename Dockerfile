FROM node:18

WORKDIR /workspace

RUN npx create-docusaurus@latest my-website classic

WORKDIR /workspace/my-website

CMD ["npm", "run", "start"]


