# 화면에서 입력한 데이터를 Server로 보내지(전송)

- html의 input tag 를 사용하여 입력 box를 만들기
- input tag 를 만들어진 입력 box는 개별데이터 요소를 입력하는 화면 도구이다
- input tag 들을 fotm tag 로 감싸서 포장을 한다
- Server 데이터를 보낼때는 개별적으로 보낼수도 있지만,
  일반적으로 form tag로 감싸서 한꺼번에 전송을 한다

## input tag 구성요소

- `name 속성` : Server로 데이터를 보낼때 개별 데이터 요소를 식별할 변수
- 아래 코드로 생성된 화면에 문자열(홍길동)을 입력하면
  `d_name=홍길동`이라는 Server로 보내기위한 코드가 자동생성된다
- 생성된 코드는 form tag에 의해 하나의 묶음으로 만들어지고 Server로 보내진다
- input box에 문자열을 입력한 후 `전송` 버튼을 클릭하면
  자동으로 서버로 데이터를 보내는 `submit` 코드가 자동생성되고,
  `전송`버튼을 클릭시 데이터가 보내진다

```html
<form>
  <input name="d_name" />
  <button>전송</button>
</form>
```

## form tag로 감싸진 button의 역할

- form tag로 감싸진 button은 기본역할이 `submit`이다
- 아무런 코드를 작성하지 않아도 HTML 문서의 기본성질중에서 button은 submit 코드를 실행하는 역할을 수행한다.

### button 성질 부여 속성

- 버튼의 성질을 부여할때는 `type=submit`과 같은 송성을 사용한다
- `type=submit` : form tag로 감싸진 경우 input box에 입력한 데이터(text)를 서버로 보내는 역할 수행
  기본 설정값. type을 생략하면 자동으로 type=sumit을 설정한 것과 같다
- `type=reset` : form tag로 감싸진 경우 같은 form tag로 감싸진 input box에 입력한 데이터를 모두 clear하는 역할 수행
- `type=button` : 아무런 역할(기능)도 수해하지 마라. 모양한 button으로 유지하라
