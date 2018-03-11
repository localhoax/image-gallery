# image-gallery
Image gallery application.
## Update
- [X]  **Added backend**
- [X]  **Seperated the app as frontend and backend**

## Backend
1. **backend is built on Python Django v 1.11.7**
2. **added mongodb as the database**

## Frontend
1. **frontend built on ReactJS, React-Router-v4**
2. **server runs on webpack**

## Setup
1. `git clone https://github.com/frozen4code/image-gallery.git`
2. Create python virtual-env (Optional), Install Django
    `cd backend && pip install -U -r requirements.txt`
3. Install MongoDB at port **27017** (default)
4. `cd ../frontend && npm install`
5. cd ../backend && python manage.py runserver
6. `cd ../frontend && npm run build ***or*** npm run watch`

## Todo
- [ ]  Design frontend.
- [ ]  Add Google Auth.
- [ ]  Django REST API
- [ ]  Use API with frontend