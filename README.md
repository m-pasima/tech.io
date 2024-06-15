# Personal Portfolio Website

Hello! I'm **Nyanga P**, a passionate DevOps and Cloud Engineer. This repository contains the source code for my personal portfolio website, where I showcase my expertise and share insights into my journey.

Here's what you'll find:

1. **Skills and Experience**: Explore my skills, tools, and practical knowledge in DevOps and Cloud Engineering.
2. **Project Repositories**: Dive into project examples with detailed, step-by-step instructions. These repositories serve as valuable resources for fellow cloud enthusiasts.
3. **Built with Jekyll**: The website itself was crafted using Jekyll, a powerful static site generator.
4. **GitHub Pages Hosting**: It's currently hosted on GitHub Pages, making it accessible to anyone interested in learning from or replicating my work.

Feel free to use this template to create your own impressive portfolio for free! If you have any questions or need further assistance, don't hesitate to reach out. 😊🚀🌟

## Getting Started

### Prerequisites

To run this project, you will need to have the following installed:
- Ruby
- Jekyll
- Bundler

### Setup

1. **Clone the repository**:
   ```sh
   https://github.com/m-pasima/tech.io.git
   cd techy
   ```

2. **Install Jekyll and Bundler**:
   ```sh
   gem install jekyll bundler
   ```

3. **Install dependencies**:
   ```sh
   bundle install
   ```

4. **Build the site and make it available on a local server**:
   ```sh
   bundle exec jekyll serve
   ```

5. **Open your browser and go to**:
   ```
   http://localhost:4000
   ```

### Customization

To customize the site with your own information:

1. **Replace the content**: Edit the `index.md` file to update the personal details, skills, projects, and experience with your own information.
2. **Update the logo**: Replace `logo.png` in the root directory with your own logo image. Adjust the size in `index.md` if needed.
3. **Modify the layout**: You can update the `_config.yml` file to change the site's title, description, and other configurations.

### Deploying to GitHub Pages

To deploy the site, push your changes to your repository on GitHub:

1. **Create a new repository on GitHub**:
   - Go to [GitHub](https://github.com) and create a new repository.

2. **Push your local changes to the new repository**:
   ```sh
   git remote set-url origin https://github.com/<your-username>/<your-repository>.git
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to the repository settings on GitHub.
   - In the "GitHub Pages" section, select the source as `main` branch.
   - Save your changes. Your site should be available at `https://<your-username>.github.io/<your-repository>/`.

### Enabling Branch Protection

To secure your repository, you can enable branch protection to prevent unauthorized changes to the main branch:

1. **Go to the repository settings**:
   - Navigate to your repository on GitHub.
   - Click on the `Settings` tab.

2. **Access the Branches settings**:
   - In the left sidebar, click on `Branches`.

3. **Add a branch protection rule**:
   - Under `Branch protection rules`, click on `Add rule`.
   - In the `Branch name pattern` field, type `main` (or the name of your default branch).

4. **Configure the branch protection rule**:
   - Select the protections you want to enable, such as:
     - Require pull request reviews before merging
     - Require status checks to pass before merging
     - Require branches to be up to date before merging
     - Include administrators (if you want to enforce these rules for admins as well)

5. **Save the branch protection rule**:
   - Click on `Create` or `Save changes` to apply the protection rules to your branch.

## Contributing

If you have suggestions for improvements, feel free to fork the repository and create a pull request or open an issue.

## Setup

This setup ensures that all necessary commands, configuration instructions, and security steps are easy to follow and implement.









