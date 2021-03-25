<!--suppress HtmlDeprecatedAttribute -->
<p align="center">
<img src="https://raw.githubusercontent.com/VladiRR/svvs/master/images/svvs_v02.png" width="150" alt="logo svvs">
</p>

# 
[![](https://img.shields.io/badge/youtube-chanel-blue?style=flat&logo=youtube&logoColor=white)](https://www.youtube.com/channel/UCE8ux2eOsw_X7XVrI5mpYkg)
[![](https://img.shields.io/badge/SVVS-chat-blue?style=flat&logo=telegram&logoColor=white)](https://t.me/svvs_chat)
[![documentation](https://github.com/VladiRR/svvs/actions/workflows/generateDocs.yml/badge.svg)](https://github.com/VladiRR/svvs/actions/workflows/generateDocs.yml)

SVVS is an open source project and [YouTube channel](https://www.youtube.com/channel/UCE8ux2eOsw_X7XVrI5mpYkg) showcasing application development in the [Nx](https://nx.dev) mono repository.

## The SVVS project includes
- backend-api server
- PostgreSQL db
- frontend client app
- frontend admin app
- a set of libraries

### Technologies used

  [Nx](https://nx.dev)
• [NestJs](https://nestjs.com)
• [GraphQL](https://graphql.org/)
• [Docker](https://www.docker.com/)
• [PostgreSQL](https://www.postgresql.org/)
• [Angular](https://angular.io)
• [Bootstrap](https://v5.getbootstrap.com/)
• [angular.material](https://material.angular.io/)


### Documentation

  [backend-api](https://vladirr.github.io/svvs/api/)
• [frontend-client](https://vladirr.github.io/svvs/client/)
• [frontend-admin](https://vladirr.github.io/svvs/admin/)

---

### 📌 How to start
- Clone repo

- Rename .example.env => .env 
- run docker daemon (e.g. macOS you can use [Docker Desktop](https://docs.docker.com/docker-for-mac/release-notes/) )
- if necessary 
  - change .env data

```
yarn install                   // install dependensies
yarn run db:start              // create database
yarn run db:entites            // apply entities
yarn run db:migrations:run     // apply migration
yarn run backend-api:start     // start backend server
```
* fix  Observable warning Apollo

Before run angular app find

`node_modules/@apollo/client/utilities/observables/Observable.js`

replace

`import { Observable } from "zen-observable";`

to

`import { Observable } from "zen-observable-ts";`

* Run frontend application
```
yarn run frontend-client:start // start frontend client 
yarn run frontend-admin:start // start frontend admin 
```
---
#### ⚠️ IMPORTANT
This repository contains _github action_
`.github/workflows/generateDocs.yml`
This action generates up-to-date project documentation with a pull request or a commit to a branch _master_
To activate these actions:

⚡[generate your personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)

⚡[create encrypted secrets with a name "ACTION_GH_PAGE"](https://docs.github.com/en/actions/reference/encrypted-secrets)

...or **delete** `.github/workflows/generateDocs.yml` 

---

### Tags:
To bring the repository into the state corresponding to the selected tag, run

`git checkout -TAG_NAME-`


#### available tags

- v0.1.0 `init svvs workspace with backend-api and frontend client & admin app`
