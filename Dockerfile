# Imagen base de Java 17 (ligera y optimizada)
FROM eclipse-temurin:17-jdk-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el JAR generado por Maven/Gradle al contenedor
COPY target/optica-backend-0.0.1-SNAPSHOT.jar app.jar

# Expone el puerto de tu aplicación Spring Boot
EXPOSE 8080

# Comando para arrancar la aplicación
ENTRYPOINT ["java","-jar","app.jar"]
