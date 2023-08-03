## 지원자 성명

신성민

## 배포 링크

https://web-wanted-pre-onboarding-frontend-3prof2llkv1wb92.sel4.cloudtype.app/

## 프로젝트 구조

```
src
├── 📁 api
|   ├── 📄 auth
|   └── 📄 todo
├── 📁 components
|   ├── 📁 Auth
|   |   ├── 📄 SignInForm
|   |   └── 📄 SignUpForm
|   ├── 📁 Todo
|   |   ├── 📄 AddTodo
|   |   ├── 📄 TodoItem
|   |   └── 📄 TodoList
|   └── 📄 Header
├── 📁 config
|   └── 📄 axios
├── 📁 pages
|   ├── 📄 Main
|   ├── 📄 NotFound
|   ├── 📄 ProtectedRoute
|   ├── 📄 SignIn
|   ├── 📄 SignUp
|   └── 📄 Todo
└── 📁 validators
    └── 📄 authValidator
```

## 프로젝트 설치 및 실행

1. root경로에 .env.local 파일 생성
   ```
   REACT_APP_API_URI=API주소
   ```
2. 프로젝트 패키지 설치
   ```
   npm install
   ```
3. 프로젝트 실행
   ```
   npm start
   ```

## 사용 라이브러리
Axios  
react-router-dom  
React-Icons   
tailwindcss   
dotenv