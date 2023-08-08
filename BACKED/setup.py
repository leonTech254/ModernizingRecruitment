import sys
import os
from cx_Freeze import setup, Executable

# Add your dependencies here
build_exe_options = {
    "packages": ["blinker", "click", "flask", "flask_cors", "flask_sqlalchemy",
                 "greenlet", "itsdangerous", "jinja2", "markupsafe",
                 "dotenv", "six", "sqlalchemy", "typing_extensions", "werkzeug","bcrypt","PyJWT"],
    "includes": ["pymysql"],  # Include the pymysql module
    "include_files": [(".env")]  # Include the .env file
}
base = None
if sys.platform == "win32":
    base = "Win32GUI"

# Update the path to your main Python file
executables = [Executable("main.py", base=base)]

setup(
    name="LEONTEQSEUCURITY",
    version="1.0",
    description="Description of your application",
    options={"build_exe": build_exe_options},
    executables=executables
)
