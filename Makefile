up:
	docker compose up -d --build

network:
	docker network create link_network

down:
	docker compose down