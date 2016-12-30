//login.js

$(document).ready(() => {
  $("form").submit(event => {
    event.preventDefault();
    const username = $("#username").val();
    const password = $("#password").val();
    const obj = {username, password};
    $.ajax({
      type: "POST",
      dataType: "JSON",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(obj),
      url: `/login`,
      sucess: (result) => console.log(result)
    });
  });
});
