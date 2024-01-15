# **🥂“Coktail”**
**칵테일만 콕 집어 모아둔 콕테일입니다**.

    - 자신의 취향에 맞는 칵테일을 추천 받고 싶은 사람!!
    - 다양한 칵테일의 정보를 둘러보고 싶은 사람!!
    - 나만의 칵테일 레시피를 공유하고 싶은 사람!!
    - 칵테일을 처음 접해보는 사람!!
    
<br/>
<br/>

# **📚프로젝트 정보**
**📆개발기간**: 2023.11.11 ~ 2023.12.29
<br/>
**처음 접하는 사람한테는 맞춤 정보와 칵테일을 즐기는 사람들에게는 또 다른 경험을 제공하고 칵테일에 대한 이해를 높이는데 도움을 드릴게요**

<pre>
**주 기능**
    - 좋아하는 칵테일 혹은 DIY레시피 찜 추가/삭제
    - 처음 이용하는 사람을 위해 설문조사를 통한 나만의 칵테일 찾기
    - DIY 칵테일 레시피 공유 기능  ⇒ 관리자가 대표 레시피 하나를 공유하고, 사용자들이 레시피 공유
    - 베이스, 도수, 단맛, 쓴맛, 신맛의 필터를 통한 사용자 친화적인 조회 기능 
</pre>

<br/>

<pre>
**보조 기능**
    - 안 좋은 글을 쓰는 사용자는 글쓰기 권한 제한
    - 편하게 카카오로 로그인
    - 사용 안할시 연결 해제
    - 사용자 탈퇴시 삭제가 아닌 보관(관리자만 삭제 가능)
    - 칵테일&DIY레시피 둘다 동시에 검색 가능
    - 검색어를 입력시 자동완성
    - 커서기반의 무한스크롤 
    - 맘에 드는 리뷰에 추천 가능!
    - 내가 쓴 리뷰를 월별로 조회
    - 카카오 지도를 통한 주변 바 찾기
</pre>

<br/>

## 🔧기술 스택
- 공통 스택
    - `JavaScript` `Eslint` `Prettier` `Nginx` 
    
- 프론트
    - `React` `Vite` `yarn` `Styled-components` `Zustand`
   
- 백엔드
    - `Node JS` `MongoDB` `express` `swagger` `Postman`
- 협업 툴
    - `Figma`  `gitlab`📚
  
<br/>
<br/>

## 💡컨벤션

**커밋 컨벤션**
    `Feat `: 새로운 기능 추가

    `Fix `: 버그 수정

    `Docs `: 문서 수정

    `Style `: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우

    `Refactor `: 코드 리펙터링

    `Test `: 테스트 코드, 리펙터링 테스트 코드 추가

    `Chore `: 빌드 업무 수정, 패키지 매니저 수정

    `Hotfix` : 간단한 코드수정

    예시: Feat: "회원 가입 기능 구현"
<br/>
<br/>
**브랜치 컨벤션**

    `feature/기능명`

<br/>
<br/>
**코딩 컨벤션**

    변수, 함수, 클래스 등 : 카멜케이스 

    컴포넌트 : 파스칼케이스 
    
    스타일 컴포넌트 앞에다가 Styled붙이기 

    Boolean 타입의 변수 is로 시작

<br/>
참고
https://velog.io/@rex/%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1-%EA%B7%9C%EC%B9%99%EB%93%A4-Coding-Conventions
https://velog.io/@shin6403/Git-git-%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

<br/>
<br/>

## 💻설치및 실행 방법
**Front-End**
```
$ yarn install
$ yarn run dev
```

<br/>

**Back-End**
- 카카오 로그인 테스트시: `app.js`의 `public` 주석 해제
```
.env 파일 생성
$ npm install
$ npm run dev
```

<br/>

- 관리자로 로그인 하는 방법
http://kdt-sw-7-team07.elicecoding.com/testLogin 으로 이동
```    
id: admin  
pw: admin
```

<br/>

## 🚀 버전
---
프로젝트 (1.0.0)
- `Node JS 20.10.0`
- `npm 10.2.3`

<br/>

## 🚨 FAQ
-맞춤 추천은 어떻게 받나요?
<br/>
->회원 가입 하시고 설문조사를 하시면 메인페이지에 자동으로 뜹니다.
<br/>
-git clone으로 서비스를 실행하고 싶어요
<pre>
->프론트: `git clone https://kdt-gitlab.elice.io/sw_track/class_07/web_project_2/team7/frontend.git`
->백엔드: `git clone https://kdt-gitlab.elice.io/sw_track/class_07/web_project_2/team7/backend.git'
후 위의 실행방법 참고하세요
</pre>

<br/>

### 😎감사합니다!😘
