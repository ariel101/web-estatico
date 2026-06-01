# INFORME DEL LABORATORIO


## 2. Arquitectura

GitHub → Actions → S3 → CloudFront

## 3. Configuración del bucket S3

![Bucket](./screenshots/bucket.png)
![permisos](./screenshots/bucket-permisos.png)
![permisos](./screenshots/alojamiento-sitios-estaticos.png)

## 4. Configuración de GitHub Secrets

![secrets](./screenshots/action-secrets.png)
![variables](./screenshots/action-variables.png)
## 5. Pipeline CI/CD

Explicación del workflow.

## 6. Evidencia de ejecución fallida

![fallido](./screenshots/fallido-credenciales.png)

## 7. Evidencia de ejecución exitosa

![permisos](./screenshots/despliegue-exitoso.png)

## 8. Distribución CloudFront

![cloudfront](./screenshots/cloudfront1.png)
![cloudfront](./screenshots/cloudfront2.png)
![cloudfront](./screenshots/cloudfront3.png)

## 9. Sitio desplegado

URL S3:
...

URL CloudFront:
...

[Captura]

## 10. Conclusiones

- El despliegue continuo reduce errores manuales.
- GitHub Actions automatiza la publicación.
- CloudFront mejora rendimiento y disponibilidad.
- OAC protege el bucket S3.