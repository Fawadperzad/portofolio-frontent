# Portfolio Frontend

A modern Angular portfolio website showcasing full-stack development skills with Java 21 Spring Boot and Angular 18.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/portofolio-frontend` directory. By default, the production build optimizes your application for performance and speed.

**Latest build stats:**

- Main bundle: 216.17 kB (59.63 kB gzipped)
- Styles: 27.04 kB (4.47 kB gzipped)
- Total: 243.21 kB (64.10 kB gzipped)

## Serving the production build

After building, you cannot open `index.html` directly in the browser due to Angular's client-side routing. Instead, serve the built files using a static web server:

```bash
# Using Python (built-in)
cd dist/portofolio-frontend/browser
python -m http.server 8080

# Or using Node.js http-server
npx http-server dist/portofolio-frontend/browser -p 8080 -o

# Or using Angular CLI (for development)
ng serve --configuration production
```

Then open `http://localhost:8080` in your browser.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
