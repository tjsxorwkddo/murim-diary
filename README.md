# 무협일지

체중 기록과 매일의 수련을 내공, 경지, 무공 성장으로 연결하는 모바일 우선 자기계발 PWA입니다.

## 로컬 확인

브라우저에서 `index.html`을 열면 기본 기능을 확인할 수 있습니다.

PWA 설치와 서비스워커는 `file://`에서 동작하지 않습니다. 설치 테스트는 GitHub Pages처럼 `https://` 주소에서 확인해야 합니다.

## GitHub Pages 배포

1. GitHub 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소 루트에 올립니다.
3. GitHub 저장소의 `Settings` -> `Pages`로 이동합니다.
4. `Deploy from a branch`를 선택합니다.
5. Branch는 `main`, folder는 `/root`로 설정합니다.
6. 배포 주소가 열리면 모바일 브라우저에서 홈 화면 추가 또는 앱 설치를 확인합니다.

## 배포 전 체크

- `index.html`, `manifest.json`, `service-worker.js`가 저장소 루트에 있어야 합니다.
- 새 버전을 배포할 때 `index.html`의 `style.css?v=...`, `script.js?v=...`와 `service-worker.js`의 `CACHE_NAME`을 함께 올립니다.
- 이미지가 크기 때문에 처음 배포 전에는 GitHub 업로드가 조금 걸릴 수 있습니다.
- `.gitignore`에 들어간 예전 강호행 원본 이미지는 로컬 보관용이며, 현재 앱 배포에는 사용하지 않습니다.
- 몸 사진은 서버에 업로드되지 않고 브라우저 내부 저장소에만 저장됩니다.
