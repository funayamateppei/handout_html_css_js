$(document).ready(function () {
  $("#searchButton").click(function () {
    const input = $("#searchInput").val();
    const url = `https://www.googleapis.com/books/v1/volumes`;

    $.ajax({
      url: url,
      type: "GET",
      data: {
        q: input,
      },
      success: function (response) {
        console.log(response);
      },
      error: function () {
        alert("データの取得に失敗しました");
      },
    });
  });
});
