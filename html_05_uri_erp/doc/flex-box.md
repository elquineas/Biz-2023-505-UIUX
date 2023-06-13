# HTML, CSS의 display 속성

- tag의 보여지는 성질을 변경할수 있는 속성
- 모든 tag는 자신만의 고유의 display 속성을 갖는다
- 기본속성은 block, inline 성질을 갖는다

## display:block 속성

- header, nav, div, section, article, footer 등의 속성은 기본적으로 block 성질을 갖는다
- block 성질은 box의 보여지는 모양과 달리 무조건 화면의 width 만큼의 영역을 차지하는 구조이다
- block 성질을 갖는 tag는 width값을 변경하여도 보여지는 크기만 달라질뿐 실제 box의 영역은 화면의 width이다.
- block 성질을 가진 상태에서는 box들을 가로방향으로 배치할 수 없다.
- css2 이전에는 block 성질을 가진 box들을 가로방향으로 배치하기 위하여 float라는 속성을 트릭으로 사용했다.
- box를 가로로 배치하면서 원하는 형태로 배열을 하는 것은 정말 어려운 작업이다

## display:inline 속성

- a, span, strong, b, label, input등과 같이 글자단위의 표현 tag들
- 실질적으로 tag의 width를 임의로 조절할수 없다.
- 이 tag들의 width는 tag가 포함하는 Context(text)의 길이만큼으로 자동으로 설정된다.
- 심지어 이 tag들은 padding도 설정이 안되는 경우도 있다.

## display:inline 속성

- block 속성의 성질과, inline 속성의 성질을 함께 포함하는 속성
- 이 속성은 기본 display 속성을 변경하여 표현되는 성질을 변경하는 것
- block 속성의 tag를 inline-block으로 변경한 후 width속성을 설정하면 실제 보여지는 tidth와 영역 width가 같아진다.

## display:inline 속성

- css2에서 추가된 display 속성중에 flex 속성과 grid속성이 있다.
- flex속성은 화면 layout을 만드는데 혁신적인 변화를 가져온 속성
- `display:flex` 속성은 `부모 box tag`에 지정하는 style
- 부모 tag에 `display:flex` 속성이 지정되면 children tag 들은 자동으로 `display:flex-item` 속성으로 변경된다
- `display:flex-item` 속성을 받는 children tag들은 기본적으로 `inline=block` 성질을 받게되고 추가로 독특한 성질을 갖게된다.
