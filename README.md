# Thinc-frontend
Thinc notes webapp frontend code.

![Static Badge](https://img.shields.io/badge/Thinc-frontend?style=plastic&logo=github&logoColor=white&label=Github&labelColor=black&color=white&link=https%3A%2F%2Fgithub.com%2FShaedow2000%2FThinc-frontend)
![Static Badge](https://img.shields.io/badge/Thinc-frontend?style=plastic&logo=codeberg&logoColor=white&label=Codeberg&labelColor=blue&color=white&link=https%3A%2F%2Fcodeberg.org%2FShaedow2000%2FThinc-frontend)
![Static Badge](https://img.shields.io/badge/TypeScript-lang?style=plastic&logo=typescript&logoColor=white&label=Lang&labelColor=blue&color=white)

## I - Features

### Tech Stack

- HTML
- Tailwindcss
- Typescript

### Routes

- **/**: Landing page.

#### Auth specific routes
- **/login**: Login page.
- **/register**: Registration page.
- **/verify**: Verification code page.
- **/unregister**: Unregister to Thinc.
- **/unregister_confirmation**: Enter code that confirms unregistration.
- **/reset**: Reset account page (delete data).
- **/logout**: Logout from account.
- **/password_recovery**: recover password for your account page.
- **/change_password**: Change the password of the account after confirming identity in the page above.
- **/aborted**: Abort/Cancel confirmation changing password.
- **/abort**: Abort/Cancel changing password.

#### Main app
- **/dashboard**: Main app page.
- **/note**: Read a note page.
- **/new**: Create a new note page.
- **/edit**: Edit a note page.
- **/draft**: Draft note page.
- **/search**: Search for a note by title.
- **/confirm_note_delete**: Confirm that you are deleting a note.
- **/account**: Account settings page.

## II - Setup

### Installation

- To install the frontend of the app, run:

```bash
git clone 'https://github.com/Shaedow2000/Thinc-frontend'
```

- Then:

```bash
# for devs
npm run dev
```

or 

```bash
# for a preview of the app
npm run preview
```

### Env file
The only variable in the .env file is VITE_API_URL, just spin up the api, take its URL `(for the officail api its http://localhost:8080)`.

### Spin up the Thinc notes API
Go to the [repo](github.com/Shaedow2000/Thinc-API), and follow its README.

## III - Contributions

All contributions are welcome !!
Just wait for an issue to open, and you can open your _PR_ after getting permission to be assigned to the issue.

## IV - LICENSE

Maintained by **_Shaedow2000_** under the `Apache License Version 2.0` © 2026.
