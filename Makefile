run_all:
	npx concurrently "npm run start:dev" "npm run start:dev orders" "npm run start:dev invoices"
