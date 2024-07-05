# CRUD Diary Application

This project is a web-based diary application offering a simple yet powerful interface for managing daily entries. Users can create, view, edit, and delete their diary notes. Additionally, the application now includes a user authentication system and a dashboard for a comprehensive overview of entries.

## Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Project Overview

CRUD Diary is designed as a user-friendly, multi-page application with the following key components:

1. **Login Page**: Secure user authentication.
2. **Sign Up Page**: User registration for new accounts.
3. **Dashboard**: Overview of entries and users, displaying the total number of entries and users with the most recent entries (up to 8).
4. **Main Page**: Core CRUD functionalities with a form to add new entries and a section displaying all existing entries.

**Link to Live Demo**: [CRUD Diary](https://seav-seyla-dairy-application.vercel.app/)

The application leverages front-end technologies to perform all operations and stores data on the client-side, eliminating the need for a backend server.

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://git.clp.kr/anbschool/2nd/hexcode/seav-seyla/diary-web-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd diary-web-app
    ```

3. Open the `index.html` file in your browser to launch the application.

## Usage

After opening `index.html` in your browser:

1. **Sign Up**: Create a new user account if you don't already have one.
2. **Login**: Use your credentials to log in.
3. **Dashboard**: View the total entries and users, with recent entries displayed as cards (limited to 8).
4. **Main Page**: Manage your diary entries with the following features:
    - **Create**: Use the form to add a new diary entry.
    - **Read**: Browse and view your existing entries.
    - **Update**: Edit any of your entries.
    - **Delete**: Remove any unwanted entries.

## Features

- **Multi-Page Application**: Includes login, sign-up, dashboard, and main diary management pages.
- **User Authentication**: Secure login and registration system.
- **Dashboard**: Summary view with recent entries and total counts of entries and users.
- **CRUD Operations**: Full functionality to create, read, update, and delete diary entries.
- **Responsive Design**: Optimized for both desktop and mobile use.
- **Client-Side Storage**: Uses local storage for saving entries.

## Technologies Used

- **HTML**: Markup language for structuring the application.
- **CSS**: Stylesheets for designing the layout and appearance.
- **JavaScript**: Programming language for dynamic functionality and CRUD operations.

**Convention Guide**: [Seav Seyla's Diary Web Application Guide](https://outgoing-oval-b13.notion.site/Seav-Seyla-Diary-Web-Application-08b9b87d74f44e8ba3f6ffe3580cf4d4?pvs=4)

## Contributing

Contributions are welcome! Please adhere to the Git-Flow branching strategy for a smooth collaboration process:

![Git-Flow Diagram](https://github.com/Seyla123/Clone-Nike-Ind/assets/89925541/6be663ee-6f13-4466-92af-33aa549eb189)

### Git-Flow Branching Strategy

1. **Main Branch**:
   - Represents the stable production code.
   - Direct changes are avoided here.

2. **Feature Branches**:
   - Used for developing new features or fixing bugs.
   - Derived from and merged back into the `develop` branch.

3. **Development (Develop) Branch**:
   - Contains the latest development code.
   - Prepares features for the next release.

4. **Release Branches**:
   - For final tweaks and testing before release.
   - Merged back into both `main` and `develop`.

5. **Bugfix Branches**:
   - Address specific issues without disrupting ongoing development.

6. **Hotfix Branches**:
   - For urgent fixes to the production code, branched directly from `main`.

### Git-Flow Steps

1. **Create a Remote Repository**:
   - Set up a new repository on GitHub.

2. **Initialize a Local Repository**:
   - Use Git to initialize and link your local repository:
     ```bash
     git init
     git remote add origin <repository_URL>
     ```

3. **Work on Feature Branches**:
   - Create and work on a new feature branch:
     ```bash
     git checkout develop
     git flow feature start feature_name
     ```
   - Commit and push changes:
     ```bash
     git add .
     git commit -m "Commit message"
     git flow feature publish feature_name
     ```

4. **Merge and Complete Features**:
   - Merge completed features back into `develop`:
     ```bash
     git flow feature finish feature_name
     ```

5. **Manage Releases and Bugfixes**:
   - Follow similar steps for handling releases and bugfixes.

6. **Apply Hotfixes**:
   - For critical production issues:
     ```bash
     git checkout main
     git flow hotfix start hotfix_name
     ```

   - Merge hotfixes into both `main` and `develop`:
     ```bash
     git flow hotfix finish hotfix_name
     ```

### Additional Git Commands

- **Tracking and Rebasing**:
  - Track remote branches and rebase your work:
    ```bash
    git flow feature track <feature_name>
    git checkout feature/branch_name
    git rebase develop
    ```

- **Merging and Resetting**:
  - Merge branches and reset to specific commits:
    ```bash
    git checkout main
    git merge develop
    git reset <commit_hash>
    ```

- **Remote and Commit History**:
  - View and manage remote branches and commit history:
    ```bash
    git remote -v
    git log
    ```

## Contact

For questions or support, please reach out to:

- **Seav Seyla** - [mrrseyla.758@gmail.com](mailto:mrrseyla.758@gmail.com)
- GitLab: [@Seyla123](https://git.clp.kr/Seyla123)
