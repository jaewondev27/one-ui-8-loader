# 🌌 One UI 8 Galaxy Loader

One UI 8 스타일의 부드럽고 현대적인 갤럭시 로딩 애니메이션입니다. **Web Component** 방식으로 제작되어 복잡한 설정 없이 HTML 태그 한 줄로 어디서든 즉시 사용할 수 있습니다.

## 🚀 특징
- **간편한 사용:** 별도의 라이브러리 의존성 없이 자바스크립트 파일 하나로 동작합니다.
- **캡슐화:** Shadow DOM을 사용하여 기존 프로젝트의 CSS와 충돌하지 않습니다.
- **커스터마이징:** 로더의 크기와 애니메이션 속도를 자유롭게 조절할 수 있습니다.

## 📦 설치 및 사용법

### 1. 사용 방법 (설치부터 제어까지)

먼저 HTML 파일에 스크립트를 추가한 뒤, 원하는 곳에 태그를 넣거나 자바스크립트로 제어하세요.

```html
<script src="https://cdn.jsdelivr.net/gh/jaewondev27/one-ui-8-loader/oneui8-loader.js"></script>

<oneui8-loader size="1.5" speed="2.0"></oneui8-loader>

<script>
    const loader = document.querySelector('oneui8-loader');
    loader.setAttribute('size', '4');    // 크기 변경
    loader.setAttribute('speed', '3.0'); // 속도 변경
</script>
