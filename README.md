## 지원자 성명

신성민

## 배포 링크 및 시연영상

https://web-wanted-pre-onboarding-frontend-3prof2llkv1wb92.sel4.cloudtype.app/

---

### Main
- 로컬스토리지에 토큰이 없을 경우 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 128 141" fill="none">
  <path d="M46.1191 87.8005L55.8987 97.5801L81.9776 71.5012" stroke="#292D32" stroke-width="9.77959" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M50.6177 31.0789H76.6966C89.7361 31.0789 89.7361 24.5592 89.7361 18.0395C89.7361 5 83.2163 5 76.6966 5H50.6177C44.098 5 37.5782 5 37.5782 18.0395C37.5782 31.0789 44.098 31.0789 50.6177 31.0789Z" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M89.7361 18.17C111.447 19.3435 122.335 27.3628 122.335 57.1578V96.2762C122.335 122.355 115.815 135.395 83.2163 135.395H44.098C11.4993 135.395 4.97959 122.355 4.97959 96.2762V57.1578C4.97959 27.428 15.8675 19.3435 37.5782 18.17" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>("/todo"로 가는 경로)에 접속한다면 "/signin" 경로로 리다이렉트
- 로컬스토리지에 토큰이 있을 경우 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 128 141" fill="none">
  <path d="M46.1191 87.8005L55.8987 97.5801L81.9776 71.5012" stroke="#292D32" stroke-width="9.77959" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M50.6177 31.0789H76.6966C89.7361 31.0789 89.7361 24.5592 89.7361 18.0395C89.7361 5 83.2163 5 76.6966 5H50.6177C44.098 5 37.5782 5 37.5782 18.0395C37.5782 31.0789 44.098 31.0789 50.6177 31.0789Z" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M89.7361 18.17C111.447 19.3435 122.335 27.3628 122.335 57.1578V96.2762C122.335 122.355 115.815 135.395 83.2163 135.395H44.098C11.4993 135.395 4.97959 122.355 4.97959 96.2762V57.1578C4.97959 27.428 15.8675 19.3435 37.5782 18.17" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>("/todo"로 가는 경로)에 접속한다면 "/todo"경로로 리다이렉트

### Sign Up & Login
- 회원가입 유효성검사에 통과하지 못한다면 회원가입 버튼 disabled
- 회원가입 후 "/signin"경로로 리다이렉트 
  

- 로그인 정보가 없다면 로그인 버튼 disabled
- 로그인(로컬 스토리지에 토큰 저장)후 "/todo"로 이동 , Header에 LOGOUT 표시

### Todo

- 투두 리스트의 내용과 체크박스로 완료 여부 표시
- 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

- 추가된 투두 리스트의 아이템 우측에 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 128 140" fill="none">
  <path d="M71.872 14.3824L18.3448 71.0391C16.3237 73.1906 14.3678 77.4284 13.9766 80.3623L11.5643 101.486C10.7168 109.114 16.1933 114.33 23.7562 113.026L44.7497 109.44C47.6836 108.919 51.7912 106.767 53.8124 104.55L107.339 47.8938C116.597 38.1142 120.77 26.9655 106.361 13.3393C92.018 -0.156558 81.13 4.60284 71.872 14.3824Z" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M62.94 23.8366C65.7435 41.831 80.3476 55.5876 98.4725 57.4128" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.97959 134.346H122.335" stroke="#292D32" stroke-width="9.77959" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>(수정버튼이) 존재하고 해당 버튼을 누르면 수정모드가 활성화 및 내용 수정
- 수정모드에서는 투두 리스트 아이템의 우측에 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
  <path d="M28 19V26C28 26.5304 27.7893 27.0391 27.4142 27.4142C27.0391 27.7893 26.5304 28 26 28H6C5.46957 28 4.96086 27.7893 4.58579 27.4142C4.21071 27.0391 4 26.5304 4 26V19C4 18.7348 4.10536 18.4804 4.29289 18.2929C4.48043 18.1054 4.73478 18 5 18C5.26522 18 5.51957 18.1054 5.70711 18.2929C5.89464 18.4804 6 18.7348 6 19V26H26V19C26 18.7348 26.1054 18.4804 26.2929 18.2929C26.4804 18.1054 26.7348 18 27 18C27.2652 18 27.5196 18.1054 27.7071 18.2929C27.8946 18.4804 28 18.7348 28 19ZM15.2925 19.7075C15.3854 19.8005 15.4957 19.8742 15.6171 19.9246C15.7385 19.9749 15.8686 20.0008 16 20.0008C16.1314 20.0008 16.2615 19.9749 16.3829 19.9246C16.5043 19.8742 16.6146 19.8005 16.7075 19.7075L21.7075 14.7075C21.8004 14.6146 21.8741 14.5043 21.9244 14.3829C21.9747 14.2615 22.0006 14.1314 22.0006 14C22.0006 13.8686 21.9747 13.7385 21.9244 13.6171C21.8741 13.4957 21.8004 13.3854 21.7075 13.2925C21.6146 13.1996 21.5043 13.1259 21.3829 13.0756C21.2615 13.0253 21.1314 12.9994 21 12.9994C20.8686 12.9994 20.7385 13.0253 20.6171 13.0756C20.4957 13.1259 20.3854 13.1996 20.2925 13.2925L17 16.5863V5C17 4.73478 16.8946 4.48043 16.7071 4.29289C16.5196 4.10536 16.2652 4 16 4C15.7348 4 15.4804 4.10536 15.2929 4.29289C15.1054 4.48043 15 4.73478 15 5V16.5863L11.7075 13.2925C11.5199 13.1049 11.2654 12.9994 11 12.9994C10.7346 12.9994 10.4801 13.1049 10.2925 13.2925C10.1049 13.4801 9.99944 13.7346 9.99944 14C9.99944 14.2654 10.1049 14.5199 10.2925 14.7075L15.2925 19.7075Z" fill="black"/>
  </svg>(제출버튼)과 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
  <path d="M20.7075 12.7075L17.4138 16L20.7075 19.2925C20.8004 19.3854 20.8741 19.4957 20.9244 19.6171C20.9747 19.7385 21.0006 19.8686 21.0006 20C21.0006 20.1314 20.9747 20.2615 20.9244 20.3829C20.8741 20.5043 20.8004 20.6146 20.7075 20.7075C20.6146 20.8004 20.5043 20.8741 20.3829 20.9244C20.2615 20.9747 20.1314 21.0006 20 21.0006C19.8686 21.0006 19.7385 20.9747 19.6171 20.9244C19.4957 20.8741 19.3854 20.8004 19.2925 20.7075L16 17.4137L12.7075 20.7075C12.6146 20.8004 12.5043 20.8741 12.3829 20.9244C12.2615 20.9747 12.1314 21.0006 12 21.0006C11.8686 21.0006 11.7385 20.9747 11.6171 20.9244C11.4957 20.8741 11.3854 20.8004 11.2925 20.7075C11.1996 20.6146 11.1259 20.5043 11.0756 20.3829C11.0253 20.2615 10.9994 20.1314 10.9994 20C10.9994 19.8686 11.0253 19.7385 11.0756 19.6171C11.1259 19.4957 11.1996 19.3854 11.2925 19.2925L14.5863 16L11.2925 12.7075C11.1049 12.5199 10.9994 12.2654 10.9994 12C10.9994 11.7346 11.1049 11.4801 11.2925 11.2925C11.4801 11.1049 11.7346 10.9994 12 10.9994C12.2654 10.9994 12.5199 11.1049 12.7075 11.2925L16 14.5863L19.2925 11.2925C19.3854 11.1996 19.4957 11.1259 19.6171 11.0756C19.7385 11.0253 19.8686 10.9994 20 10.9994C20.1314 10.9994 20.2615 11.0253 20.3829 11.0756C20.5043 11.1259 20.6146 11.1996 20.7075 11.2925C20.8004 11.3854 20.8741 11.4957 20.9244 11.6171C20.9747 11.7385 21.0006 11.8686 21.0006 12C21.0006 12.1314 20.9747 12.2615 20.9244 12.3829C20.8741 12.5043 20.8004 12.6146 20.7075 12.7075ZM29 16C29 18.5712 28.2376 21.0846 26.8091 23.2224C25.3807 25.3603 23.3503 27.0265 20.9749 28.0104C18.5995 28.9944 15.9856 29.2518 13.4638 28.7502C10.9421 28.2486 8.6257 27.0105 6.80762 25.1924C4.98953 23.3743 3.75141 21.0579 3.2498 18.5362C2.74819 16.0144 3.00563 13.4006 3.98957 11.0251C4.97351 8.64968 6.63975 6.61935 8.77759 5.1909C10.9154 3.76244 13.4288 3 16 3C19.4467 3.00364 22.7512 4.37445 25.1884 6.81163C27.6256 9.24882 28.9964 12.5533 29 16ZM27 16C27 13.8244 26.3549 11.6977 25.1462 9.88873C23.9375 8.07979 22.2195 6.66989 20.2095 5.83733C18.1995 5.00476 15.9878 4.78692 13.854 5.21136C11.7202 5.6358 9.76021 6.68345 8.22183 8.22183C6.68345 9.7602 5.63581 11.7202 5.21137 13.854C4.78693 15.9878 5.00477 18.1995 5.83733 20.2095C6.66989 22.2195 8.07979 23.9375 9.88873 25.1462C11.6977 26.3549 13.8244 27 16 27C18.9164 26.9967 21.7123 25.8367 23.7745 23.7745C25.8367 21.7123 26.9967 18.9164 27 16Z" fill="black"/>
  </svg>(취소버튼)이 표시되며 해당 버튼을 통해서 수정 내용을 제출 및 취소
- 추가된 투두 리스트의 아이템 우측에 <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 119 135" fill="none">
  <path d="M71.1831 108.973H77.47C78.3037 108.973 79.1032 108.641 79.6927 108.052C80.2822 107.462 80.6134 106.663 80.6134 105.829V49.2472C80.6134 48.4135 80.2822 47.614 79.6927 47.0245C79.1032 46.435 78.3037 46.1038 77.47 46.1038H71.1831C70.3494 46.1038 69.5498 46.435 68.9603 47.0245C68.3708 47.614 68.0396 48.4135 68.0396 49.2472V105.829C68.0396 106.663 68.3708 107.462 68.9603 108.052C69.5498 108.641 70.3494 108.973 71.1831 108.973ZM114.143 20.9563H92.5559L83.6494 6.10351C82.5317 4.24107 80.9506 2.69993 79.0601 1.63028C77.1696 0.560639 75.0343 -0.00103298 72.8622 1.42619e-06H46.4521C44.2809 -0.000128035 42.1466 0.561974 40.2571 1.63158C38.3677 2.70118 36.7873 4.24183 35.6701 6.10351L26.7584 20.9563H5.17085C4.05926 20.9563 2.99319 21.3978 2.20718 22.1839C1.42117 22.9699 0.979591 24.0359 0.979591 25.1475L0.979591 29.3388C0.979591 30.4504 1.42117 31.5164 2.20718 32.3024C2.99319 33.0885 4.05926 33.53 5.17085 33.53H9.3621V121.546C9.3621 124.881 10.6868 128.079 13.0449 130.437C15.4029 132.795 18.6011 134.12 21.9359 134.12H97.3784C100.713 134.12 103.911 132.795 106.269 130.437C108.627 128.079 109.952 124.881 109.952 121.546V33.53H114.143C115.255 33.53 116.321 33.0885 117.107 32.3024C117.893 31.5164 118.335 30.4504 118.335 29.3388V25.1475C118.335 24.0359 117.893 22.9699 117.107 22.1839C116.321 21.3978 115.255 20.9563 114.143 20.9563ZM45.9937 13.336C46.1337 13.1029 46.3319 12.9101 46.5689 12.7765C46.8058 12.6428 47.0733 12.573 47.3453 12.5738H71.969C72.2405 12.5735 72.5075 12.6435 72.7439 12.7771C72.9804 12.9107 73.1782 13.1033 73.318 13.336L77.8917 20.9563H41.4226L45.9937 13.336ZM97.3784 121.546H21.9359V33.53H97.3784V121.546ZM41.8443 108.973H48.1312C48.9649 108.973 49.7644 108.641 50.3539 108.052C50.9435 107.462 51.2746 106.663 51.2746 105.829V49.2472C51.2746 48.4135 50.9435 47.614 50.3539 47.0245C49.7644 46.435 48.9649 46.1038 48.1312 46.1038H41.8443C41.0106 46.1038 40.2111 46.435 39.6216 47.0245C39.0321 47.614 38.7009 48.4135 38.7009 49.2472V105.829C38.7009 106.663 39.0321 107.462 39.6216 108.052C40.2111 108.641 41.0106 108.973 41.8443 108.973Z" fill="black"/>
  </svg>(삭제버튼)이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제
- 투두를 추가 한 뒤 새로고침을 해도 추가한 투두가 목록에 존재

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
├── 📁 validators
|   └── 📄 authValidator
├── 📄 index
└── 📄 App
```

## 프로젝트 설치 및 실행

프로젝트 패키지 설치

```
npm install
```

프로젝트 실행

```
npm start
```
