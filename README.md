# IP Lookup Service

This service provides an API to look up geolocation information for a given IP address. It leverages the `ipwhois` API for fetching IP details and uses Redis for caching the responses to improve performance.


## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Docker

## Features

- Lookup geolocation information for IP addresses
- Cache responses in Redis

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (LTS version)
- A running instance of Redis

### Installing

To install the IP Lookup Service, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/iamivants/iplookup.git
```
2. Create .env file
  - add secrets:
    REDIS_HOST=
    REDIS_PORT=

##### Manual run 

1. Run project:
```bash
yarn
yarn start
```
  - application will start on http://localhost:3000

#### Build and run with Docker
```bash
docker-compose up
```

### Endpoints
GET /:ip - Look up geolocation information for the given IP address.
DELETE /:ip - Remove cached geolocation information for the given IP address.


### Built With
NestJS - The framework used
ioredis - Redis client for Node.js
axios - Promise based HTTP client for the browser and Node.js

