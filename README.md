# Transcendence

## 게임, 채팅 웹 서비스

- 실행 순서
  1. 도커가 있는지 부터 체크 (있다면 2번, 없다면 docker부터 설치 꼭 하세요!)
  2. .env 파일 설정
  ```
  ###### POSTGRESQL ######
  POSTGRES_PASSWORD=<Password>
  ###### PGADMIN4 #######
  PGADMIN_DEFAULT_EMAIL=<ID>
  PGADMIN_DEFAULT_PASSWORD=<Password>
  ###### FT_OAuth2 ######
  FT_APP_UID=<42 API UID>
  FT_APP_SECRET=<42 API SECRET>
  FT_APP_CALLBACK=<42 API REDIRECT URL>
  ###### JWT ######
  JWT_SECRET=<JWT MAIN SECRET>
  JWT_UC_SECRET=<JWT TEMP SECRET>
  JWT_2FA_SECRET=<JWT 2FA SECRET>
  ###### EMAIL ######
  FT_MAIL=<USER 42EMAIL>
  FT_MAIL_SECRET= <SECRET>
  ```
  3. 만든 .env파일을 
  3. 쉘에 make 실행
  4. 모든 컨테이너가 run 상태라면 http://localhost로 웹사이트에 접근할 수 있습니다.

