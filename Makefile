
IMAGE_NAME=personal_doc:v0.0.1
GIT_P:=`cat .git.pd`
GIT_U:=`cat .git.us`
build-image:
	docker build -t ${IMAGE_NAME} .

run-image:
	docker run -p 3000:3000 -v $(pwd)/docusaurus:/workspace ${IMAGE_NAME}

build:
	npm run build

serve:
	npm run serve

deploy:
	make build
	yarn deploy
