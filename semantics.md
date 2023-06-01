# Semantics tag

- HTML 4.x 이하에서는 Layout을 만들때 주로 div tag 만을 구성하였다.
- tag와 tag가 겹쳐지고, 복잡한 Layout을 형성하게 되면 tag의 범위가 불분명하여 유지보수를 하기가 매우 어렵게 된다
- HTML 파일은 태생이 구조적 환경과는 거리가 멀기 때문에 파일의 tag들이 겹치고 겹쳐지는 구성이 많다
- 이러한 부분은 Front 개발자들에게 많은 어려움을 주었다

- HTML5 에서는 div tag 대신에 단어자체가 의미를 갖는 semantics tag를 도입하였다.
- HTML5에서는 div로 구성하는 Layout 대신에 semantics tag를 사용할 것을 적극 권장한다.

## Semantics tag로 Layout 만들기

- Header 만들기

```Html
<!-- html4 -->
<div id = "header">여기는 제목</div>
<!-- html5 -->
<header>여기는 제목</header>
```

- nav(Navigation) 만들기
- 화면의 상단 또는 좌우에 배치되는 메뉴 구성

```Html
<!-- html4 -->
<div id = "nav">여기는 메뉴</div>
<!-- html5 -->
<nav>여기는 제목</nav>
```

- section 만들기
- 구체적으로 보여질 화면의 본문 부분

```Html
<!-- html4 -->
<div id = "body">여기는 본문</div>
<div id = "section">여기는 본문</div>
<!-- html5 -->
<section>여기는 본문</section>
```

- article
- 본문의 구역 나누기

```Html
<!-- html4 -->
<div id = "section">
    <div id = "article1">Article</div>
    <div id = "article2">Article</div>
    <div id = "article3">Article</div>
</div>
<!-- html5 -->
<section>
    <article>Article</article>
    <article>Article</article>
    <article>Article</article>
</section>
```

- foorter(꼬리말)
- 회사의 주소, 전화번호, Email에 대한 정보를 표시하는 곳

```Html
<!-- html4 -->
<div id = "footer">
    <div id = "address">서울특별시</div>
    <div id = "email">elquineas@naver.com</div>
    <div id = "tel">010-1111-1111</div>
</div>
<!-- html5 -->
<footer>
    <address id = "address">서울특별시</address>
    <address id = "email">elquineas@naver.com</address>
    <address id = "tel">010-1111-1111</address>
</footer>
```