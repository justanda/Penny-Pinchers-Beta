# Penny-Pinchers-Beta

This is a basic online store - Penny Pinchers (Beta)

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

Penny Pinchers Beta is an online store implemented as a PERN application

# Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this application, clone the git repository, run the following:

--- Update .env file
--- Install and run

```
 git checkout -b "branch_name"
 npm install
 npm run build
```

--- Create postgres db and seed

```
 cd server/db
 psql -U postgres
 \i schema.sql
\q
 npm run seed
```

--- Start the servers

```
 cd ../../ to root
 npm run start:dev
```

## Usage

To run this application

```
 npm run start:dev
```

## License

This work is covered under license. Click the license badge for details about the license.  
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Contributors

[Seth D Joslin](https://github.com/Seth-D-Joslin)

[Justin Miranda](https://github.com/justanda)

[John Morganti](https://github.com/jfmorganti)

- [React]
- [Node]
- [Express]
- [Postgres]
- [Typescript]
- [Bootstrap]

## Questions

If you have additional questions, email me at [jfmorganti@gmail.com](mailto:jfmorganti@gmail.com)
