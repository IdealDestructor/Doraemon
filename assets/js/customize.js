// customize.js

$(document).ready(function () {
  // 修改网址导航列表布局，从每行两列改为每行四列
  const navGrids = document.querySelectorAll(
    ".ui.doubling.stackable.two.column.grid"
  );

  navGrids.forEach((grid) => {
    // 检查是否为网址导航列表
    if (
      grid.closest(".ui.segment") &&
      grid.closest(".ui.segment").querySelector(".header")
    ) {
      // 将两列布局改为四列布局
      grid.classList.remove("two");
      grid.classList.add("four");

      // 调整子元素宽度以适应新布局
      const columns = grid.querySelectorAll(".column");
      columns.forEach((column) => {
        // 可能需要调整每个卡片的样式以适应更窄的列宽
        const cards = column.querySelectorAll(".ui.card");
        cards.forEach((card) => {
          card.style.width = "100%";
        });
      });
    }
  });

  // 如果使用了Semantic UI的特定网格组件，也可以尝试这种方式
  $(".ui.cards").removeClass("two").addClass("four");
});
