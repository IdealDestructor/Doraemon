// customize.js

$(document).ready(function () {
  // 修改网址导航列表布局，从每行两列改为每行四列
  setTimeout(function () {
    // 尝试多种可能的选择器
    const selectors = [
      ".ui.doubling.stackable.two.column.grid",
      ".ui.doubling.two.column.grid",
      ".ui.two.column.grid",
      ".ui.doubling.cards.two",
      ".ui.cards.two",
    ];

    selectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      console.log(`找到 ${selector} 元素: ${elements.length}个`);

      elements.forEach((element) => {
        if (element.classList.contains("two")) {
          console.log("修改元素:", element);
          element.classList.remove("two");
          element.classList.add("four");
        }
      });
    });

    // 直接修改所有cards元素
    $(".ui.cards").each(function () {
      if ($(this).hasClass("two")) {
        console.log("修改cards元素:", this);
        $(this).removeClass("two").addClass("four");
      }
    });

    // 查找所有可能的网址导航容器并修改
    $(".ui.segment").each(function () {
      if ($(this).find(".header").length > 0) {
        $(this)
          .find(".grid, .cards")
          .each(function () {
            if ($(this).hasClass("two")) {
              console.log("找到导航容器并修改:", this);
              $(this).removeClass("two").addClass("four");
            }
          });
      }
    });

    console.log("网址导航列表布局修改完成");
  }, 1000); // 延迟1秒执行，确保页面完全加载
});
