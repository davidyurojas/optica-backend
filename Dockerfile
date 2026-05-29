# Etapa 1: compilar con Maven
FROM eclipse-temurin:17-jdk-alpine AS build

WORKDIR /app

# Copia todo el código fuente
COPY . .

# Compila el proyecto con Maven Wrapper
RUN ./mvnw clean package -DskipTests

# Etapa 2: imagen final ligera
FROM eclipse-temurin:17-jdk-alpine

WORKDIR /app

# Copia el JAR generado en la etapa anterior
COPY --from=build /app/target/optica-backend-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto
EXPOSE 8080

# Comando de inicio
ENTRYPOINT ["java","-jar","app.jar"]
