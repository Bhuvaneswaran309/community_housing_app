# Community Housing - Fullstack Scaffold (React + Flask)

This archive contains a starter React frontend (Material UI) and a sample Flask backend.
It is designed to be a starting point for deploying to AWS Amplify (frontend) and
using AWS Cognito for authentication + Lambda (Python) for backend APIs if desired.

## Contents
- frontend/  (React app)
- backend/   (Flask sample API)
- This README

---

## Quick local run (frontend)
1. In `frontend/` run:
   - `npm install`
   - `npm start`

## Quick local run (backend)
1. In `backend/` run:
   - `python -m venv venv`
   - `source venv/bin/activate` (or `venv\Scripts\activate` on Windows)
   - `pip install -r requirements.txt`
   - `python app.py`
2. API will be available at `http://localhost:5000/api/...`

## Step-by-step: Push to GitHub and deploy with AWS Amplify (recommended flow)

### 1) Create a GitHub repository and push the project
```bash
git init
git add .
git commit -m "Initial commit - community housing scaffold"
# create repo on GitHub and push (replace URL)
git remote add origin https://github.com/yourusername/community-housing.git
git branch -M main
git push -u origin main
```

### 2) Deploy frontend with AWS Amplify Console
1. Go to AWS Amplify Console -> "Host web app" -> Connect repository (GitHub) -> authorize.
2. Select the repo and branch (main).
3. Amplify will detect React; use the default build settings or provide a `amplify.yml`:
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: build
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
4. Save and deploy — Amplify will build and host the frontend.

### 3) Add Authentication (Cognito) using Amplify or manually
Option A (Amplify CLI - recommended for deep integration):
- Install Amplify CLI: `npm install -g @aws-amplify/cli`
- `amplify configure` (follow prompts)
- In project root: `amplify init`
- Add auth: `amplify add auth` -> select default configuration (email sign-in) or customize
- `amplify push` to create Cognito resources

Option B (Amplify Console / AWS Console):
- Create a Cognito User Pool in AWS Console
- Create an App client, configure callback URLs (Amplify app domain)
- Use AWS Amplify Library or AWS SDK in frontend to authenticate users.

### 4) Add backend API (Python) - two approaches

#### Approach A: Use Amplify CLI to create Lambda (Python) + API Gateway
- `amplify add api`
- Choose REST, attach a new Lambda function (choose Python runtime)
- Edit the Lambda code (handler) to implement endpoints for users/bills/complaints.
- `amplify push` to deploy resources.
- Amplify will provide the API endpoint; update your frontend axios base URL.

#### Approach B: Host Flask on Elastic Beanstalk or EC2 (if you prefer full Flask)
- Create an Elastic Beanstalk Python app and deploy the backend.
- Update frontend to call the EB endpoint.

### 5) Connect frontend to Cognito and API
- Use AWS Amplify libs or AWS SDK to sign up / sign in users (Cognito).
- On login, receive tokens (ID/Access) and include them in API requests (Authorization header).
- Protect admin routes by checking user groups or a custom attribute in Cognito (e.g., role=admin).

### 6) Admin flows
- Admin can add users via a protected API endpoint (Cognito admin create user or your own DB + API).
- Admin updates bills by calling API endpoints that only allow admin authorization.
- Complaints: admin can list all complaints and call a respond endpoint (see sample `/api/complaints/<id>/respond`).

---
## Useful links
- Amplify Console: https://console.aws.amazon.com/amplify/
- Amplify CLI docs: https://docs.amplify.aws/cli
- AWS Cognito: https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html
- AWS Lambda for Python: https://docs.aws.amazon.com/lambda/latest/dg/python-handler.html

---
If you want, I can now:
1. Package this scaffold into a zip for download. (I'll do that next)
2. Generate detailed Amplify CLI commands & sample Lambda handler code for the API (Python).
3. Provide the `amplify.yml` and Lambda function stubs already wired for users/bills/complaints.
