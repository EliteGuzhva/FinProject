# Запуск серверного приложения через Docker

## Запуск с использованием готового образа
```bash
cd server/ci/docker
./run.sh
```
или
```bash
docker run --rm -t -p 5000:5000 elit3guzhva/bulls-bears-server:0.0.12
```

## Сборка докер-образа вручную
```bash
cd server/ci/docker
./build.sh
```
