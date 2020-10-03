# Rest API

Proje geliştirme aşamasında kullanacağım bu API'i Json-Server modülü ile geliştirdim.

## Veritabanı

* people
* users
* appointments

## Endpointler

 > Register

 Kullanıcı kaydetme işlemi.

 Endpoint: **/api/auth/register**

 Request Body:

 ```json
 {
    username: "username",
    email:"email",
    password:"password",
    name:"name",
    lastname:"lastname"
 }
 ```

> Login

Kullanıcı giriş işlemi.

Endpoint: **/api/auth/login**

Request Body:

```json
{
    email:"email",
    password:"password"
}
```

