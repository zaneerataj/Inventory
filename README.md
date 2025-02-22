# Inventory & POS

# React + TypeScript + Vite + shadcn + tailwind

Before pushing code to github run the below command
yarn prettier --write .

Prerequisites
Ensure the following software versions are installed on your system:

Yarn: Version 1.22.22
Node.js: Version 20.15.0
Installing Dependencies
To install project dependencies, run the following command:
yarn

to run the project

1. install yarn version 1.22.22
2. node vaersion 20.15.0 (LTS)
3. yarn (install all the required dependencies)
<<<<<<< HEAD
4. install tailwind using this command : yarn add tailwindcss
5. yarn dev (to run the project)
=======
4. install tailwind using the following command : yarn add tailwindcss
4. yarn dev (to run the project)

# Always use AxiosInterceptor to make an api call

How to write code :

1. write the code in the respective folder and follow the proper folder structure
2. Use the custom component which are already build under the Custom Component folder
3. routes are under the src/routes
4. write all your routes under the routes file
5. initially write the routes under the devRoutes file
6. when developement is done for testing push it to the test routes (test environment will be same the prodection environment)
7. once testing is done push the routes to the production route.

Note : dont touch any if the configuration files

# Create the github branch using the below commands

git clone https://github.com/username/repository.git
cd repository

# Create and switch to the new branch

git checkout -b new-branch

# Push the new branch to GitHub

git push origin new-branch

This format provides clear instructions for installing dependencies, running the project in development mode, building it for production, and specifically running the project as needed.

use yarn formatter to format the before pushing it to the git
command : yarn run format

---

To install nvm for mac
To install NVM (Node Version Manager) on your Mac, you can follow these steps:

Install Homebrew (if not already installed):
Homebrew is a package manager for macOS that makes it easy to install and manage software packages.

Open Terminal and paste the following command:

bash
Copy code
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
Install NVM using Homebrew:
Once Homebrew is installed, you can use it to install NVM.

Open Terminal and run the following command to install NVM:
Copy code
brew install nvm
Configure NVM:
After installing NVM, you need to configure your shell profile (.bash_profile, .zshrc, or .profile) to use it. Here’s how to do it:

Open your shell configuration file using a text editor (e.g., nano ~/.bash_profile).
Add the following lines at the end of the file:
bash
Copy code

export NVM_DIR="$HOME/.nvm"
[ -s "$(brew --prefix)/opt/nvm/nvm.sh" ] && . "$(brew --prefix)/opt/nvm/nvm.sh"
[ -s "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm" ] && . "$(brew --prefix)/opt/nvm/etc/bash_completion.d/nvm"

Save the file and exit the text editor.
Reload the shell configuration:
To apply the changes, either restart your terminal or run:

bash
Copy code

source ~/.bash_profile

Replace .bash_profile with your respective shell configuration file if you are using zsh or another shell.

Verify NVM installation:
You can verify that NVM is installed correctly by running:

css
Copy code
nvm --version
This command should print the installed version of NVM.

Install Node.js using NVM (optional):
Now you can use NVM to install Node.js. For example, to install the latest LTS version of Node.js, you can run:

css
Copy code
nvm install --lts
This will install the latest LTS (Long Term Support) version of Node.js.

That's it! Now you have NVM installed on your Mac, and you can use it to manage multiple Node.js versions effortlessly.

yarn prettier --write .
This command formats all supported files in the current directory and its subdirectories according to your .prettierrc configuration.

Benefits of Using a Root Reducer
Modularity: Each reducer manages its own slice of the state, promoting separation of concerns and easier debugging.
Scalability: As your application grows, you can add more reducers without modifying the root reducer structure significantly.
Organization: It centralizes the state management logic, making it easier to understand and maintain the overall state structure of your application.
<<<<<<<<< Temporary merge branch 1

# Inventory
=========
>>>>>>>>> Temporary merge branch 2
