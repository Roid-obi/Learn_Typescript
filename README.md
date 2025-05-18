# Running Tests

This project contains tests written using Jest and TypeScript. Follow these steps to run them:

## Prerequisites

Make sure you have:

* **Node.js:** (LTS version recommended) - Download from [https://nodejs.org/](https://nodejs.org/)
* **npm** (Comes with Node.js) or **yarn** (install separately: `npm install -g yarn`)

## Steps to Run Tests

1.  **Navigate to the Project Directory:**
    Open your terminal or command prompt and go to the project folder.

    ```bash
    cd path/to/your/practice-project
    ```

2.  **Install Dependencies:**
    If you haven't, install the project dependencies.

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Compile TypeScript:**
    Compile the `.ts` files to `.js`.

    ```bash
    npx tsc
    # or
    yarn tsc
    ```

4.  **Run All Tests:**
    To run all tests in the project:

    ```bash
    npm test
    # or
    yarn test
    ```

5.  **Run a Specific Test File:**
    To run tests in a single file (e.g., `1.tipe-data.test.js`):

    ```bash
    npm test 1.tipe-data.test.js
    # or
    yarn test 1.tipe-data.test.js
    ```

    **Important:** Use the compiled `.js` file name.

Now you should be able to run the tests for your TypeScript practice project.