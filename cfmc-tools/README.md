# Calgary Filipino Methodist Church Tools 🖥️

This is the CFMC Tools project, built using Django, PostgreSQL, and Docker to create web tools for the church.

## Getting Started 🚀

To get started with the tools project, clone the repository and navigate to the project folder:

```bash
git clone https://github.com/chvaldez10/cfmc-web-app.git
cd cfmc-tools
```

### Install Dependencies

Install all required Python packages:

```bash
pip install -r requirements.txt
```

### Set Up Environment Variables

Create an `.env` file in the project directory with the following content:

```bash
# Allow downloads
ALLOW_DOWNLOADS=True
DOWNLOAD_DIR=

# Database
DATABASE_URL="postgresql://postgres:postgres@localhost:5431/postgres"

# Redis
REDIS_URL="redis://localhost:6878"

# Django
DJANGO_SECRET_KEY=
```

### Build and Run the Docker Container

Create and start the Docker container:

```bash
docker compose up --build
```

### Set Up the Database and Run the Server

Migrate the database and start the development server:

```bash
python manage.py migrate
python manage.py runserver
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser to view the application.

## Learn More 📚

For more information, visit our [CFMC Facebook page](https://www.facebook.com/calgaryfilipino.methodistchurch).

## Contribute 💻

If you’d like to contribute, please create a new branch off the `main` branch following a common naming convention. For example, use `feat/add-some-tool` for feature additions.
