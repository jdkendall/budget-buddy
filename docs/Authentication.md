# Firebase Authentication for Budget Buddy

## Introduction

Firebase Auth is a flexible and easy-to-use authentication solution that integrates seamlessly with other Firebase services. It supports a range of authentication methods, including email/password, OAuth providers like Google and Facebook, and even phone number verification. Firebase Auth uses JWT (JSON Web Tokens) to help us securely identify users in the Budget Buddy project.

## JWT (JSON Web Tokens)

JWT is a compact, URL-safe token format used for securely transmitting information between parties. In the context of Firebase, after a user logs in, Firebase Auth provides a JWT, known as an ID token, to identify them. 

(This ID token is separate and distinct from the _access token_, which is another form of authentication with OAuth2 that allows access to resources on the providing servers such as Google - used for looking up profile data, for example. Generally, both are retrieved and available through the same mechanisms, though there is an extra step for generating the access token which requires a secure connection through the backend server using the Firebase app's web client ID & secret.)  

### Structure:

- **Header**: Contains metadata for the token and specifies the signing algorithm.
- **Payload**: Contains the claims or the pieces of information being passed about the user and any metadata required.
- **Signature**: To prevent tampering, the header and payload are encoded and combined with a secret to create the signature.

An excellent visualization of this is available on the official website, https://jwt.io/ -- you can input a JWT token to see its payload, and likewise fill in a payload to generate a JWT token. It's even possible to generate a signed token. 

## JWKs (JSON Web Key Sets)

### Overview

JSON Web Key Set (JWKs) is a JSON structure that represents a set of public keys as a part of the JSON Web Key (JWK) specification. The primary purpose of JWKs is to allow the efficient and straightforward transmission of cryptographic keys.

### How JWKs Work

1. **Key Representation**: Each key in the set is represented by a JSON object, and this object contains various attributes detailing the key, such as its type, usage, algorithm, and public key details.


2. **Key Rotation**: One of the advantages of JWKs is that it supports key rotation. As security best practices may necessitate periodic key rotation, having multiple keys in a set is helpful. When keys are rotated, new keys can be added to the set, and old keys can be removed, all without service interruption.


3. **Key Identification**: Each key in the JWKs has a unique identifier, called `kid` (key ID). This identifier is often present in the header of a JWT. By matching the `kid` in the JWT with the one in the JWKs, the backend can determine which public key to use for verification.


### Role in Firebase Authentication

Firebase Authentication uses JWTs as ID tokens, and these JWTs are signed using a private key. For anyone to verify the authenticity of these tokens, they need the corresponding public key. Instead of distributing this public key directly, Firebase provides an endpoint that serves the JWKs, containing the necessary public key(s).

1. **Fetching the JWKs**: When our backend receives a JWT from the frontend (after a user logs in via Firebase on the frontend), it needs to verify this token. The backend can fetch the JWKs from Firebase's JWKS endpoint.


2. **Token Verification**: Once the JWKs are retrieved, the backend can:
   - Check the `kid` value in the JWT header.
   - Find the corresponding key in the JWKs using this `kid`.
   - Extract the public key from the matched JWK.
   - Use this public key to verify the signature of the JWT, ensuring it was genuinely issued by Firebase and hasn't been tampered with.


3. **Security Advantages**: By using JWKs, Firebase ensures that even if a key gets compromised, they can seamlessly rotate to a new key. Backends that rely on Firebase's JWKS endpoint for key retrieval will automatically get the new key on their next fetch, ensuring uninterrupted and secure service.

## Firebase Authentication Flow with Angular

1. **Setting up Firebase SDK**: First, we'll need to integrate the Firebase SDK into the Angular application.

2. **OAuth Providers**: Firebase supports a variety of OAuth providers. For instance, if using Google:

    ```typescript
    import { AngularFireAuth } from '@angular/fire/auth';
    import firebase from 'firebase/app';

    class ExampleGoogleLoginService {
        constructor(private afAuth: AngularFireAuth) { }

        login() {
            this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        }
    }
    ```

3. **Getting the JWT**: Once the user is authenticated, Firebase provides a JWT token which can be retrieved as:

    ```typescript
    async getIdToken() {
        const user = await this.afAuth.currentUser;
        return user?.getIdToken(true);
    }
    ```

4. **Sending JWT to the Backend**: The token can then be sent to our backend (the Budget Buddy backend) in the HTTP Authorization header.

## Spring Security Integration with Firebase JWTs

With the JWT token sent to our backend, we'll use Spring Security to validate and parse it.

1. **OAuth2 Resource Server Configuration**:

   Using the previously discussed `SecurityConfig`, we'll set up Spring to act as an OAuth2 Resource Server:

    ```java
    @Configuration
    public class ExampleSecurityConfiguration {

        @Bean
        public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
           // Set up Firebase authentication via OAuth2 JWTs + JWKs
           http.csrf(AbstractHttpConfigurer::disable)
                   .authorizeHttpRequests((ahr) -> ahr.anyRequest().authenticated())  // Protect all endpoints
                   .oauth2ResourceServer((o2rs) -> o2rs.jwt(j -> j.jwkSetUri("https://www.googleapis.com/service_accounts/v1/jwk/YOUR_FIREBASE_PROJECT_ID")));
           return http.build();
        }
    }
    ```

2. **JWT Validation**:

   Spring Security will validate the incoming JWT against the JWK Set provided by Firebase. We configure the JWKS endpoint in our [application.properties](../backend/src/main/resources/application.properties):

    ```properties
    spring.security.oauth2.resourceserver.jwt.jwk-set-uri=https://www.googleapis.com/service_accounts/v1/jwk/YOUR_FIREBASE_PROJECT_ID
    ```

3. **Accessing User Information**:

   Once the JWT is validated, we can access the claims (user information and any other metadata) in our application. Spring Security will automatically parse the JWT and make its claims available.
