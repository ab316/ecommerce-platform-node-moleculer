BACKEND_SERVICES = products

.PHONY: docker

DB_PORT=5432
docker : DB_USER = admin
docker : DB_PASSWORD = admin
docker : DB_DATABASE = postgres
docker : DB_HOST = localhost

docker: $(BACKEND_SERVICES)

$(BACKEND_SERVICES): %: %-env

%-env:
	@echo DATABASE_URL="postgresql://$(DB_USER):$(DB_PASSWORD)@$(DB_HOST):$(DB_PORT)/$(DB_DATABASE)?schema=$(subst -env,,$@)" > packages/$(subst -env,-service,$@)/.env
