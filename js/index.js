// jQuery를 이욯한 절치형 프로그래밍

// 메인 메뉴



// 공지사항 및 자료실탭 메뉴
var section = $('.board section'); // $대신 jQuery를 써도 됨. = querySelector(), querySelectorAll()
var tab = $('.board .tab a');
var item = $('.board li');

item.addClass('icon-dot-circled');

tab.click(function (e) { 
  e.preventDefault() //클릭했을 때 a가 갖고 있는 href속성값으로 이동하지 않게 만들어줌.
  section.removeClass('is-active'); // 모든 섹션의 클래스값을 지우므로 좋지 않음.
  $(this).parent().parent().addClass('is-active'); // this가 가리키는 것은 클릭한 요소. 점을 타고 가는 체이닝 기법
});