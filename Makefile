
IMAGE_NAME=personal_doc:v0.0.1
build:
	docker build -t ${IMAGE_NAME} .

run:
	docker run -p 3000:3000 -v $(pwd)/docusaurus:/workspace ${IMAGE_NAME}