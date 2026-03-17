## Deployment (Vercel + Custom Domain)

### Deploy to Vercel

1. Import this repository into Vercel.
2. Set project root directory to `buildwithshannonapp`.
3. Use these settings:
	- Install Command: `npm install`
	- Build Command: `npm run build`
	- Framework Preset: Next.js (auto-detected)
4. Add environment variables (if any) in Project Settings before production deploy.
5. Deploy.

### Add Domain

1. In Vercel Project Settings -> Domains, add both:
	- yourdomain.com
	- www.yourdomain.com
2. Choose one as the primary domain.
3. Enable redirect from the non-primary host to the primary host.

### DNS Records (at your registrar)

Use these records for a standard Vercel setup:

- Type: `A` | Name: `@` | Value: `76.76.21.21`
- Type: `CNAME` | Name: `www` | Value: `cname.vercel-dns.com`

### Safe DNS Cutover Order

1. Lower existing DNS TTL to 300 (optional but recommended).
2. Add domain entries in Vercel first.
3. Update registrar DNS records (`@` A record and `www` CNAME).
4. Wait until Vercel shows valid domain configuration and SSL issued.
5. Verify:
	- `https://yourdomain.com`
	- `https://www.yourdomain.com`
6. Confirm redirect and key routes are working.

### Troubleshooting Deploys

- Build fails immediately:
	- Verify the Vercel root directory is `buildwithshannonapp`.
	- Confirm `package.json` exists in that root.

- Build fails due to missing variables:
	- Add all required environment variables in Vercel Project Settings.
	- Redeploy after saving variable changes.

- Domain shows "Invalid Configuration":
	- Re-check DNS records at registrar (`@` A record and `www` CNAME).
	- Remove conflicting old A/CNAME records for the same host.

- SSL certificate not issued yet:
	- Wait for DNS propagation, then refresh Domains in Vercel.
	- Ensure both apex and `www` records resolve publicly.

- Site still shows old version:
	- Confirm latest commit is on the production branch.
	- Trigger a new deployment from Vercel Deployments.

- `www` and apex do not redirect correctly:
	- Set one primary domain in Vercel Domains settings.
	- Keep both hosts added in the same project.
