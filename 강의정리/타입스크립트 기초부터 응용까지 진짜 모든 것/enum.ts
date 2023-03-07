// 성별, 부서코드, 카테고리 등을 어떠한 범위로 한정지을 때 사용

enum categoryEnum {
  Home,
  Sports,
  Study,
}

const category: categoryEnum = categoryEnum.Home;

console.log(category);
