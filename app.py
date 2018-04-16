import os
from flask import Flask, request, redirect, render_template, send_from_directory
from werkzeug.utils import secure_filename

app = Flask(__name__)

APP_ROOT = os.path.dirname(os.path.abspath(__file__))

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

@app.route("/")
def index():
    images = os.listdir('./images')
    return render_template("index.html", images=images)

def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route("/upload", methods=["GET","POST"])
def upload_file():
    if request.method=="GET":
        return render_template('upload.html')
    target = os.path.join(APP_ROOT, 'images/')
    print(target)
    if not os.path.isdir(target):
        os.mkdir(target)
    for file in request.files.getlist("file"):
        print(file)
        filename = file.filename
        destination = "/".join([target, filename])
        print(destination)
        file.save(destination)
    return render_template("uploaded.html")

@app.route('/upload/<filename>')
def send_image(filename):
    return send_from_directory("images", filename)

def send_image_for_filter(image):
    return render_template('filter.html', image=image)

@app.route("/filters")
def filter():
    return render_template('filters.html')

@app.url_defaults
def hashed_url_for_static_file(endpoint, values):
    if 'static' == endpoint or endpoint.endswith('.static'):
        filename = values.get('filename')
        if filename:
            if '.' in endpoint:  # has higher priority
                blueprint = endpoint.rsplit('.', 1)[0]
            else:
                blueprint = request.blueprint  # can be None too
            if blueprint:
                static_folder = app.blueprints[blueprint].static_folder
            else:
                static_folder = app.static_folder
            param_name = 'h'
            while param_name in values:
                param_name = '_' + param_name
            values[param_name] = static_file_hash(os.path.join(static_folder, filename))

def static_file_hash(filename):
    return int(os.stat(filename).st_mtime)

if __name__ == "__main__":
    app.run(port=5000)