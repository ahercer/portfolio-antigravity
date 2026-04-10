# Deployment & CI/CD

The project is hosted on **Azure Static Web Apps**, providing global distribution and seamless integration with GitHub.

## Deployment Pipeline
The deployment is fully automated via GitHub Actions.

1. **Trigger**: Every push to the `main` branch.
2. **Build**: The runner executes `npm install` and `npm run build`.
3. **Deploy**: The resulting `dist/` folder is uploaded to the Azure Static Web Apps environment.

## Configuration
The GitHub Action workflow can be found at:
`.github/workflows/azure-static-web-apps-*.yml`

### Key Build Settings:
- **App Location**: `/`
- **Api Location**: (none)
- **Output Location**: `dist`

## Monitoring
Deployment status and logs are available in the **GitHub Actions** tab of the repository. Production health and custom domains are managed via the **Azure Portal**.
