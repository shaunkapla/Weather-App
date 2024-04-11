# Activate the virtual environment for the backend
echo starting venv
source .venv/bin/activate
echo venv made


# Install dependencies from requirements.txt
pip install -r ./backend/requirements.txt

# Start backend
python ./backend/app.py