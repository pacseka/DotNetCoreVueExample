FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 56249
EXPOSE 44321

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["VueExample/VueExample.csproj", "VueExample/"]
RUN dotnet restore "VueExample/VueExample.csproj"
COPY . .
WORKDIR "/src/VueExample"
RUN dotnet build "VueExample.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "VueExample.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "VueExample.dll"]