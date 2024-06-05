import type { UserConfig } from "vite";

export default (): UserConfig => {
  return {
    // 이미지 파일을 처리할 확장자를 추가합니다.
    assetsInclude: /\.(png|jpe?g|gif|svg)$/i
  };
};
