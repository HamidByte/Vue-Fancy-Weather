# Vue Fancy Weather

Vue Fancy Weather is a sleek and user-friendly weather application powered by Vue.js. It provides real-time weather updates, elegant date and time display, and insightful country information in a stylish interface.

## Screenshots

![Vue Fancy Weather Home Page Image](https://raw.githubusercontent.com/HamidByte/Vue-Fancy-Weather/master/public/ui/home.png 'Vue Fancy Weather Home Page')

## Demo

You can check out a live demo of Vue Fancy Weather [here](https://vuefancyweather.netlify.app/).

## Features

- **Real-time Weather:** Get up-to-date weather information including temperature and descriptive icons.
- **Date and Time:** Stay informed about the current date and time alongside weather details.
- **Country Insights:** Explore details about countries, such as capital, flag, languages, area, population, region, and subregion.

## Technologies Used

- Vue.js
- BootstrapVue
- OpenWeatherMap
- RESTCountries API
- API Ninjas

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js:** Make sure Node.js is installed on your machine. [Download Node.js](https://nodejs.org/)
- **Git:** (Optional but recommended) Version control is useful for tracking changes. [Download Git](https://git-scm.com/)

### API Keys

1. Create a `.env` file in the project root.
2. Add the following API keys to the `.env` file:
   ```env
   VUE_APP_OPEN_WEATHER_API_URL=your_openweather_api_key
   VUE_APP_API_NINJAS_API_KEY=your_api_ninjas_api_key
   ```

Make sure to replace placeholders like `your_openweather_api_key`, and `your_api_ninjas_api_key` with your actual API keys.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/HamidByte/Vue-Fancy-Weatherr.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Vue-Fancy-Weather
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the project:
   ```bash
   npm run serve
   ```
5. Open your web browser and visit localhost:8080.

## Project setup

Install project dependencies:

```bash
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## Acknowledgments

Thank you to the open-source community for providing valuable tools and libraries.

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### ESLint Configuration Choices

In this project, we've made some specific choices in the ESLint configuration to ensure code consistency and maintainability. Here are the key decisions:

1. **Parser Choice:**

   - Initially, we used **"@babel/eslint-parser"** as the parser for ESLint. However, in the latest configuration, we have switched to using **"babel-eslint"**. This choice aligns with projects using Babel for JavaScript transpilation and has been a reliable parser for ESLint.
     Both packages serve a similar purpose, providing ESLint parser support for Babel. Using "babel-eslint" is a common approach, and it often works well with projects using Babel for JavaScript transpilation.

2. **Style Guide:**

   - Our ESLint configuration was initially based on the **"eslint-config-prettier"** style guide. However, in the current configuration, we have migrated to **"@vue/eslint-config-airbnb"**. This style guide follows the Airbnb JavaScript style guide, providing a set of rules that contribute to code consistency and readability.

3. **Prettier Integration:**
   - Initially, we had **"eslint-plugin-prettier"** installed. In the current configuration, we have opted not to use this package explicitly. Instead, we rely on Prettier's formatting directly. This decision streamlines the integration of Prettier with ESLint without the need for an additional plugin.
     This is a reasonable decision if you want to rely on Prettier's formatting without explicitly configuring ESLint to run Prettier rules. The integration of Prettier with ESLint can be achieved without the "eslint-plugin-prettier" package, but make sure your Prettier configuration is correctly set up.
