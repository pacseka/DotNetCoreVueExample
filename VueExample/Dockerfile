FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app

#Frontend build
FROM node AS frontend-build
WORKDIR /src
COPY . .
WORKDIR /src/VueExample

RUN npm install && \
    npm install webpack -g && \
    npm install webpack-cli -g && \
    npm install sonarqube-scanner -g
RUN webpack --config webpack.config.js

RUN sonar-scanner \
  -Dsonar.projectKey=job-frontend \
  -Dsonar.sources=wwwroot/js/src \
  -Dsonar.host.url=http://192.168.99.100:9000 \
  -Dsonar.login=17814b829f4ccc2d101b9e69fcaac2ebc883db33


#dotnet build
FROM microsoft/dotnet:2.1-sdk AS build
RUN apt-get update && apt-get install -y openjdk-8-jre
RUN dotnet tool install --global dotnet-sonarscanner
ENV PATH="/root/.dotnet/tools:${PATH}"

WORKDIR /src
COPY VueExample/VueExample.csproj VueExample/
RUN dotnet restore VueExample/VueExample.csproj
COPY . .
WORKDIR /src/VueExample
COPY --from=frontend-build /src/VueExample/wwwroot wwwroot/
RUN dotnet sonarscanner begin /k:"job-dotnet-core" /d:sonar.host.url="http://192.168.99.100:9000" /d:sonar.login="c0f6ec43cd706ab4f7b0951cfa4d3aa70a132920"
RUN dotnet build VueExample.csproj -c Release -o /app
RUN dotnet sonarscanner end /d:sonar.login="c0f6ec43cd706ab4f7b0951cfa4d3aa70a132920"

#dotnet publish
FROM build AS publish
RUN dotnet publish VueExample.csproj -c Release -o /app

#dotnet final image
FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "VueExample.dll"]
