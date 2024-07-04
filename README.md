# Photography Digital Model Release Form

[![Node.js: v18.0.0](https://img.shields.io/badge/Node.js-v18.0.0-brightgreen.svg)](https://nodejs.org/en/download/package-manager/) [![SQLite: 3](https://img.shields.io/badge/SQLite-3-blue.svg)](https://www.npmjs.com/package/sqlite3) [![Nuxt: 3.12.3](https://img.shields.io/badge/Nuxt-3.12..3-green.svg)](https://v3.nuxtjs.org/) [![Vue: 3](https://img.shields.io/badge/Vue-3-occar.svg)](https://v3.vuejs.org/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Photography Digital Model Release Form** is a [Vue.js](https://github.com/vuejs/core)/[Nuxt.js](https://github.com/nuxt/nuxt)-based digital [Model Release Form](https://rps.org/media/4kvcamlr/rps-model-release-form-pdf.pdf) designed to provide a **paperless solution for photographers** and media creators to obtain legal model release forms on the spot. This project aims to **simplify the process of obtaining model releases**, making it easier for street photographers and digital media creatives to focus on their craft and not waste too much time on paperwork.

----

Intrigued? Support the development of this project by donating to the sole developer, **Kolja Nolte** ([PayPal](https://paypal.me/thaikolja)).

## Features

* ⚡️ **Real-time Form Generation:** Generate a legal model release form in real-time, eliminating the need for paper forms and manual data entry.
* ⚖️ **Legal Templates:** Laws and regulations surrounding personal data differ from country to country. Our platform provides a list of legally sound templates verified and approved by certified professionals, ensuring that you're always compliant with local regulations.
* 🔒 **Secure Data Storage:** Store and manage model release forms securely within a local [SQLite 3](https://www.npmjs.com/package/sqlite3) database, ensuring that all data is protected while still easy to export its content.
* ✉️ **Easy Sharing:** Share the completed form with your models via email or messaging apps, making it easy to obtain their consent and keep a record of their agreement.

**See the full list of all features and how to customize them in the [extended documentation](#).**

## Requirements

### Prerequisites

Before getting started, make sure you have the following software installed:

* [**Node.js**](https://nodejs.org/en/download/package-manager) `v18.0.0` or higher
* One Node.js-compatible package manager:
  * [**bun**](https://bun.sh/docs/installation#installing) (*recommended*),
  * [**yarn**](https://classic.yarnpkg.com/en/docs/install), or
  * **npm** (provided by Node.js)

If you're new to Node.js or package managers, you can find more information and resources on the official websites.

## Installation

### 1. Clone Repository

#### Via `git clone`:

```bash
git clone https://github.com/thaikolja/photography-digital-model-release-form.git
```

#### Via `.zip` Archive:

```bash
https://github.com/thaikolja/photography-digital-model-release-form/archive/refs/heads/main.zip
```

### 2. Installation

**Note:** For easier readability, this brief documentation assumes that you are using the **bun** package manager. If you use **yarn**, simply replace `bun <command>` with `yarn <command>` in your command line, and for `npm`, replace it with `npm run <command>`.

1. Change into the cloned or extracted directory via `cd photography-digital-model-release-form`
2. **Install dependencies:** `bun i`
3. **Start the development server:** `bun dev`
4. **Open your web browser** and navigate to [http://localhost:3000](http://localhost:3000)

You should now see a minimally configured default version of the digital release form.

If you happen to encounter an error, please report it in the [Issues](https://github.com/thaikolja/photography-digital-model-release-form/issues/new) section.

## Usage

### Configuration

*This section is still under development...*

**Stay tuned for updates on how to configure and customize the digital release form.**

## Deployment

Since features such as databases and emails require a server-side back-end, Nuxt 3 must be built as a [server-side rendering](https://nuxt.com/docs/guide/concepts/rendering) (SSR) application that can store information in the database and send confirmation emails.

In your root directory, run:

```bash
bunx build
```

**Note:** Consult the (yet-to-be-written) [documentation](#) to learn more about how to deploy your app to a server.

## Roadmap

As of this date (July 5th, 2024), this project is still in its infancy. If this seems like an app you might be interested in, bookmark it and check back every now and then.

### Short-term Goals

1. Completing the first alpha version of the app.
2. Implementing a user-friendly interface for creating and managing model release forms.
3. Developing a robust database system for storing and retrieving form data.

### Long-term Goals

1. Providing a wide range of country-specific legal regulations regarding photography and privacy policies.
2. Expanding the platform to support multiple languages and regions.

## Contributing

Since I am working alone on this project in addition to my full-time job, help in the form of code contributions, **bug reports**, or **feature requests** is more than welcome.

For **code contributions**, please fork this repository and create a pull request with your changed code. If you have a feature request or a bug fix, please [open an issue](https://github.com/thaikolja/photography-digital-model-release-form/issues/new).

## Contact

If you have any questions or need support, feel free to [contact me](https://github.com/thaikolja) via GitHub or via [kolja.nolte@gmail.com](mailto:kolja.nolte@gmail.com).

## License

The **Photography Digital Model Release Form** is licensed under the [MIT License](https://opensource.org/licenses/MIT). This license allows you to freely use, modify, and distribute the form for personal or commercial purposes. For more information, please refer to the [original license text](https://opensource.org/licenses/MIT).

**Copyright (C) 2014 by Kolja "[thaikolja](https://github.com/thaikolja)" Nolte**
