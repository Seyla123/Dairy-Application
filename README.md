# CRUD Diary

This project is a simple CRUD (Create, Read, Update, Delete) diary application built using HTML, CSS, and JavaScript. The goal is to provide a user-friendly interface for managing daily diary entries, where users can create, view, edit, and delete their notes, all within a single page.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Contact](#contact)

## Project Overview

This project provides a single-page diary application where users can:

1. Create new diary entries.
2. View existing entries.
3. Update any diary entry.
4. Delete entries that are no longer needed.

**Link to Live Demo** - [CRUD Diary](https://your-live-demo-link.com)

The application is designed with a focus on simplicity and ease of use, leveraging only front-end technologies to perform all CRUD operations without requiring a backend server.

## Installation

1. Clone the repository:
    ```bash
    git clone https://your-repo-link.git
    ```

2. Navigate to the project directory:
    ```bash
    cd crud-diary
    ```

3. Open the `index.html` file in your browser to view the project.

## Usage

After opening `index.html` in your browser, you can start using the diary application:

- **Create**: Add a new diary entry using the provided form.
- **Read**: Browse and view your list of diary entries.
- **Update**: Edit any existing diary entry.
- **Delete**: Remove an unwanted diary entry.

## Features

- **Single-page application**: All CRUD operations are performed on the same page.
- **Responsive design**: Optimized for both desktop and mobile devices.
- **User-friendly interface**: Simple and intuitive to use.
- **Client-side storage**: Entries are stored in the browser’s local storage.

## Technologies Used

- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **JavaScript**: For handling CRUD operations and user interactions.

## Contributing

Contributions are welcome! If you would like to contribute, please follow the Git-Flow branching strategy as outlined below:

![Git-Flow Diagram](https://github.com/Seyla123/Clone-Nike-Ind/assets/89925541/6be663ee-6f13-4466-92af-33aa549eb189)

### Git-Flow Branching Strategy

1. **Main Branch**:
   - The main branch represents the stable version of the codebase, containing production code.
   - Avoid making direct changes to the main branch.

2. **Feature Branches**:
   - Create a feature branch from the develop branch for any new feature or bug fix.
   - Work on your feature branch until it’s ready to be merged back into the develop branch.

3. **Development (Develop) Branch**:
   - This branch contains the latest development code and awaits integration into the main branch for upcoming releases.

4. **Release Branches**:
   - Use release branches for final adjustments and QA testing before a new release.
   - Once stable, merge the release branch back into both main and develop branches.

5. **Bugfix Branch**:
   - Create a bugfix branch to address specific issues without affecting ongoing development.

6. **Hotfix Branch**:
   - Use a hotfix branch to quickly address critical issues in the production code, directly branching from the main branch.

### Git-Flow Steps

1. **Create a Remote Repository on GitHub**:
   - Log in to your GitHub account and create a new repository.
   - Set up the repository details and initialize with a README if desired.

2. **Set Up a Local Repository**:
   - Open Visual Studio Code or your preferred IDE.
   - Initialize git and link your local repository to the remote:
     ```bash
     git init
     git remote add origin <repository_URL>
     ```

3. **Work on Feature Branches**:
   - Create and switch to a new feature branch:
     ```bash
     git checkout develop
     git flow feature start feature_name
     ```
   - Make your changes, commit, and push:
     ```bash
     git add .
     git commit -m "Commit message"
     git flow feature publish feature_name
     ```

4. **Complete and Merge Features**:
   - Once your feature is complete, create a pull request for review.
   - After approval, finish and merge the feature into the develop branch:
     ```bash
     git flow feature finish feature_name
     ```

5. **Release and Bugfix Management**:
   - Follow similar steps for creating and merging release and bugfix branches.

6. **Handling Hotfixes**:
   - For urgent fixes in production, create a hotfix branch directly from main:
     ```bash
     git checkout main
     git flow hotfix start hotfix_name
     ```

   - Commit your changes, and merge into both main and develop branches upon completion:
     ```bash
     git flow hotfix finish hotfix_name
     ```

### Additional Git Commands

- **Tracking Branches**:
  - Establish tracking for remote branches:
    ```bash
    git flow feature track <feature_name>
    ```

- **Merging Branches**:
  - Merge changes from one branch into another:
    ```bash
    git checkout main
    git merge develop
    ```

- **Rebasing Branches**:
  - Rebase a branch to move its commits on top of another branch:
    ```bash
    git checkout feature/branch_name
    git rebase develop
    ```

- **Resetting Branches**:
  - Reset a branch to a specific commit:
    ```bash
    git reset <commit_hash>
    ```

- **Checking Remote and Commit History**:
  - View remote repositories and commit history:
    ```bash
    git remote -v
    git log
    ```

## Contact

For any questions or support, feel free to reach out:

- **Seav Seyla** - [mrrseyla.758@gmail.com](mailto:mrrseyla.758@gmail.com)
- GitLab: [@Seyla123](https://git.clp.kr/Seyla123)
